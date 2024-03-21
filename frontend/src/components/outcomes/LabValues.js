import React from "react";
import ReadMore from "../ReadMore";

const amhLevel = (age) => {
  const ageRange = findClosestRange(age);
  const rangeLookup = {
    "25-35": "1.5 - 3 ng/mL",
    "36-40": "1 - 1.5 ng/mL",
    "41-45": "0.5 - 1 ng/mL",
  };
  return rangeLookup[ageRange] ?? null;
};
const afcLevel = (age) => {
  const ageRange = findClosestRange(age);
  const rangeLookup = {
    "25-35": "10 - 13",
    "36-40": "8 - 10",
    "41-45": "5 - 7",
  };
  return rangeLookup[ageRange] ?? null;
};

function findClosestRange(number) {
  const ranges = [
    { start: 25, end: 35, label: "25-35" },
    { start: 36, end: 40, label: "36-40" },
    { start: 41, end: 45, label: "41-45" },
  ];
  console.log(number);
  // Check if the number is within any of the ranges
  for (const range of ranges) {
    console.log(range);
    if (number >= range.start && number <= range.end) {
      console.log("hi");
      return range.label;
    }
  }
  return null;
}

const LabValues = ({ myPersona }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Understanding Lab Values</h2>
      <ReadMore>
        <p className="text">
          Lab values are crucial for assessing your chances of success with
          fertility treatments and understanding your remaining fertile years.
          Loamy can help interpret what these numbers mean for you.
        </p>
        <p className="text">
          Baseline hormone levels, such as AMH and AFC, offer insights into how
          time affects your fertility. They also provide information about your
          egg reserve, aiding in decisions about when to conceive or freeze
          eggs/embryos. For example, an antral follicle count of 20-40 suggests
          about a decade of fertile years remaining.
        </p>
        <p className="text">
          If this information is new to you and you haven't yet completed a
          hormone panel, consider getting tested at a fertility clinic, or ask
          your primary care provider for a test. At-home tests may also provide
          useful initial data, though they may not be as accurate as laboratory
          testing.
        </p>
        <aside className="bg-blue-100 p-4 m-6 ">
          <p className="text">
            💡 👉 The accuracy of at-home tests can vary widely, influenced by
            the manufacturer, the conditions during shipping, and whether the
            test was conducted on the appropriate day of your cycle. Often,
            these tests cannot provide a comprehensive overview without a
            physical examination, and your Reproductive Endocrinologist (REI)
            will likely require you to repeat them.
          </p>
        </aside>
        <p className="text">
          To provide a baseline for comparison, here are the average values of
          AMH (Anti-Müllerian Hormone) and AFC (Antral Follicle Count) for women
          in your age group.
        </p>
        <ul className="mt-5 p-4">
          <li>
            <strong>Typical AMH level for women like you:</strong> A typical AMH
            level is 1.0–4.0 ng/ml, but, depending on age, many women will be
            higher or lower than this range.
            {amhLevel(myPersona.age) &&
              ` For women your age, the typical range is ${amhLevel(
                myPersona.age
              )}.`}
          </li>
          <li>
            <strong>Typical AFC for women like you:</strong> Understanding the
            number of antral follicles present in your ovaries relative to your
            age can provide valuable insight for both you and your fertility
            specialist regarding your ovarian reserve.
            {afcLevel(myPersona.age) &&
              `Typically, women in your age group fall within the following range: ${afcLevel(
                myPersona.age
              )}.`}
          </li>
        </ul>
        <p className="text">
          Comparing your AMH (Anti-Müllerian Hormone) and AFC (Antral Follicle
          Count) levels to those of women in your age group can provide valuable
          context. Generally, higher levels of AMH and AFC indicate a larger
          ovarian reserve. However, it's important to note that high AMH levels
          do not guarantee the ability to conceive. AMH alone is not a reliable
          predictor of overall fertility.
        </p>
        {/* You can add more detailed content here as needed. */}
      </ReadMore>
    </section>
  );
};

export default LabValues;
