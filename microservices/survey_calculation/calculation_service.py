from flask import Flask, request, jsonify
import hashlib
import pandas as pd
import os

app = Flask(__name__)


def load_data():
    # Get the directory of the script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    file_name = "20231025.csv"

    # Build the path to the CSV file
    file_path = os.path.join(script_dir, "data", file_name)
    df = pd.read_csv(file_path)
    df = df[df["Cancelled"] != "Yes"]
    df = df[df["Age at Retrieval"] >= 20]

    ## Returns a dataframe with cleaned data from the hunger games dataset
    return df


def filter_dataframe(df, diagnosis, age, amh, afc, size):
    import pandas as pd

    filters_considered = 0
    ## Create bins for age groups
    labels = ["20-24", "25-29", "30-34", "35-39", "40+"]
    bins = [19.9, 24.9, 29.9, 34.9, 39.9, 100]
    df["age_group_use"] = pd.cut(
        df["Age at Retrieval"], bins=bins, labels=labels, right=False
    )
    age_group = pd.cut([age], bins=bins, labels=labels)[0]
    df_filtered_age = df[df["age_group_use"] == age_group]
    if diagnosis == "Do not know" or diagnosis == "Other":
        df_filtered_dx = pd.DataFrame()
    elif diagnosis == "Endometriosis" or "Diminished" in diagnosis:
        df_filtered_dx = df_filtered_age[
            df_filtered_age["Infertility Diagnosis"].str.contains("Endometriosis")
            | df_filtered_age["Infertility Diagnosis"].str.contains("Diminished")
        ]
    else:
        diagnosis_str = diagnosis.split(" ")[0]
        df_filtered_dx = df_filtered_age[
            df_filtered_age["Infertility Diagnosis"].str.contains(
                diagnosis_str, na=False, case=False
            )
        ]
    # df_filtered_afc = pd.DataFrame()
    # if len(df_filtered_dx) >= size:
    #     df_filtered_temp = df_filtered_dx.copy()
    #     if afc < 10 and afc != 0:
    #         df_filtered_afc = df_filtered_temp[df_filtered_temp["afc_group"] == "Low"]
    #     elif afc >= 10 and afc != 0:
    #         df_filtered_afc = df_filtered_temp[df_filtered_temp["afc_group"] == "High"]

    # return [df_filtered_afc, df_filtered_dx, df_filtered_age, df]
    return [df_filtered_dx, df_filtered_age, df]


def get_outcomes(filtered_df_list, threshold, category):
    index = -1
    for df in filtered_df_list:
        index += 1
        if len(df) < 1:
            continue
        df_final_temp = df.copy()
        df_final_temp = df_final_temp.dropna(
            subset=[category]
        )  ## filter out the outcome column that is nan
        if len(df_final_temp) >= threshold:
            df_final = df_final_temp.copy()
            break

    df_final_grouped = df_final.groupby(category)["Num"].count().reset_index()
    df_final_grouped["percent"] = df_final_grouped["Num"] / len(df_final)

    df_final_grouped = df_final_grouped[df_final_grouped["percent"] > 0]
    df_final_grouped = df_final_grouped.sort_values(by="percent", ascending=False)
    return {
        "labels": df_final_grouped[category].to_dict(),
        "groups": df_final_grouped.percent.to_dict(),
        "highest": df_final_grouped[category].iloc[0],
        "highest_percent": df_final_grouped.percent.iloc[0],
        "num": len(df_final),
        "index": index,
    }


def find_range_by_age(age, ranges):
    for range_dict in ranges:
        if range_dict["start_age"] <= age <= range_dict["end_age"]:
            return range_dict
    return ranges[
        0
    ]  # We should be rejecting values out of range, but returning the first range as a safe default


@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.json
    diagnosis = data.get("diagnosis")
    age = int(data.get("age"))
    amh = int(data.get("amh"))
    afc = int(data.get("afc"))
    goal = data.get("goal")
    familiarity = data.get("familiarity")
    stage = data.get("stage")
    location = data.get("location")
    amh_ranges = [
        {
            "start_age": 25,
            "end_age": 35,
            "start_val": 1.5,
            "end_val": 3,
            "unit": "ng/mL",
        },
        {
            "start_age": 36,
            "end_age": 40,
            "start_val": 1,
            "end_val": 1.5,
            "unit": "ng/mL",
        },
        {
            "start_age": 41,
            "end_age": 45,
            "start_val": 0.5,
            "end_val": 1,
            "unit": "ng/mL",
        },
    ]
    afc_ranges = [
        {
            "start_age": 25,
            "end_age": 35,
            "start_val": 10,
            "end_val": 13,
            "unit": "follicles",
        },
        {
            "start_age": 36,
            "end_age": 40,
            "start_val": 8,
            "end_val": 10,
            "unit": "follicles",
        },
        {
            "start_age": 41,
            "end_age": 45,
            "start_val": 5,
            "end_val": 7,
            "unit": "follicles",
        },
    ]

    df = load_data()
    outcome_options = [
        {
            "name": "Eggs Retrieved",
            "data_name": "eggs_retrieved_bins",
            "unit": "eggs retrieved"
        },
        {
            "name": "Mature Eggs",
            "data_name": "eggs_mature_bins",
            "unit": "mature eggs"
        },
        {
            "name": "Fertilized Eggs",
            "data_name": "eggs_fertilized_bins",
            "unit": "fertilized eggs",
        },
        {
            "name": "Day Five Embryos",
            "data_name": "day_5_embryos_bins",
            "unit": "embryos frozen",
        },
    ]
    min_df_size = 50  # Pulled from streamlit code
    filtered_df_list = filter_dataframe(df, diagnosis, age, amh, afc, min_df_size)
    outcomes = [
        {"name": outcome["name"],
         "data": get_outcomes(filtered_df_list, min_df_size, outcome["data_name"]),
         "unit": outcome["unit"]}
        for outcome in outcome_options
    ]

    result = {
        "familiarity": familiarity,
        "goal": goal,
        "amh": amh,
        "afc": afc,
        "diagnosis": diagnosis,
        "age": age,
        "outcomes": outcomes,
        "stage": stage,
        "local": location == "Yes",
        "amh_range": find_range_by_age(age, amh_ranges),
        "afc_range": find_range_by_age(age, afc_ranges),
    }

    print(result)
    response = jsonify({"result": result})
    return response


if __name__ == "__main__":
    app.run(debug=True, port=6000)
