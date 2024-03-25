import React from "react";
import ReadMore from "../ReadMore";
import BulletChart from "../BulletChart";
import Callout from "../Callout";

const amhLevel = (age) => {
  const ageRange = findClosestRange(age);
  const rangeLookup = {
    "25-35": { start: 1.5, end: 3, unit: "ng/mL" },
    "36-40": { start: 1, end: 1.5, unit: "ng/mL" },
    "41-45": { start: 0.5, end: 1, unit: "ng/mL" },
  };
  return rangeLookup[ageRange] ?? null;
};
const afcLevel = (age) => {
  const ageRange = findClosestRange(age);
  const rangeLookup = {
    "25-35": { start: 10, end: 13, unit: "follicles" },
    "36-40": { start: 8, end: 10, unit: "follicles" },
    "41-45": { start: 5, end: 7, unit: "follicles" },
  };
  return rangeLookup[ageRange] ?? null;
};

function findClosestRange(number) {
  const ranges = [
    { start: 25, end: 35, label: "25-35" },
    { start: 36, end: 40, label: "36-40" },
    { start: 41, end: 45, label: "41-45" },
  ];
  // Check if the number is within any of the ranges
  for (const range of ranges) {
    if (number >= range.start && number <= range.end) {
      return range.label;
    }
  }
  return ranges[0].label;
}

const LabValues = ({ myPersona }) => {
  const amh = amhLevel(myPersona.age);
  const afc = afcLevel(myPersona.age);
  const myAmh = myPersona.amh;
  const myAfc = myPersona.afc;
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Understanding Lab Values</h2>
      <ReadMore>
        <p className="text mb-4">
          Lab values are crucial for assessing your chances of success with
          fertility treatments and understanding your remaining fertile years.
          Loamy can help interpret what these numbers mean for you.
        </p>
        <p className="text mb-4">
          Baseline hormone levels, such as AMH and AFC, offer insights into how
          time affects your fertility. They also provide information about your
          egg reserve, aiding in decisions about when to conceive or freeze
          eggs/embryos. For example, an antral follicle count of 20-40 suggests
          about a decade of fertile years remaining.
        </p>
        <p className="text mb-4">
          If this information is new to you and you haven't yet completed a
          hormone panel, consider getting tested at a fertility clinic, or ask
          your primary care provider for a test. At-home tests may also provide
          useful initial data, though they may not be as accurate as laboratory
          testing.
        </p>
        <Callout>
          <p className="text mb-4">
            💡 👉 The accuracy of at-home tests can vary widely, influenced by
            the manufacturer, the conditions during shipping, and whether the
            test was conducted on the appropriate day of your cycle. Often,
            these tests cannot provide a comprehensive overview without a
            physical examination, and your Reproductive Endocrinologist (REI)
            will likely require you to repeat them.
          </p>
        </Callout>
        <p className="text mb-4">
          To provide a baseline for comparison, here are the average values of
          AMH (Anti-Müllerian Hormone) and AFC (Antral Follicle Count) for women
          in your age group.
        </p>
        <div className="mt-5 mb-4 p-4">
          <div className="mb-6">
            <strong>Typical AMH level for women like you:</strong> A typical AMH
            level is 1.0 – 4.0 ng/ml, but, depending on age, many women will be
            higher or lower than this range.
            <div className="flex flex-col items-center -mt-10">
              <BulletChart
                min={1}
                max={4}
                highlightStart={amh.start}
                highlightEnd={amh.end}
                marker={myAmh}
                metricName={"AMH"}
                unit={amh.unit}
              />
              <div className="text text-sm -mt-10 mb-10">
                For women your age, the typical range is {amh.start} to{" "}
                {amh.end} {amh.unit}
              </div>
            </div>
            <div className="mb-4">
              <a
                className="link"
                href="https://www.fertstert.org/article/S0015-0282(10)02687-7/fulltext"
              >
                Source: Age-specific serum anti-Müllerian hormone values for
                17,120 women presenting to fertility centers within the United
                States - Fertility and Sterility (fertstert.org)
              </a>
            </div>
          </div>
          <div className="mt-4">
            <strong>Typical AFC for women like you:</strong> Understanding the
            number of antral follicles present in your ovaries relative to your
            age can provide valuable insight for both you and your fertility
            specialist regarding your ovarian reserve.
            <div className="flex flex-col items-center -mt-10">
              <BulletChart
                min={0}
                max={30}
                highlightStart={afc.start}
                highlightEnd={afc.end}
                marker={myAfc}
                metricName={"AFC"}
                unit={afc.unit}
              />
              <div className="text text-sm -mt-10 mb-10">
                For women your age, the typical range is {afc.start} to{" "}
                {afc.end} {afc.unit}
              </div>
            </div>
            <div>
              <a
                className="link"
                href="https://www.fertstert.org/article/S0015-0282(10)02461-1/fulltext"
              >
                Source: Age-related normogram for antral follicle count: McGill
                reference guide (fertstert.org)
              </a>
            </div>
          </div>
        </div>
        <p className="text mb-4">
          Comparing your AMH (Anti-Müllerian Hormone) and AFC (Antral Follicle
          Count) levels to those of women in your age group can provide valuable
          context. Generally, higher levels of AMH and AFC indicate a larger
          ovarian reserve. However, it's important to note that high AMH levels
          do not guarantee the ability to conceive. AMH alone is not a reliable
          predictor of overall fertility.
        </p>
      </ReadMore>
    </section>
  );
};

export default LabValues;
