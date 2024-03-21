import React from "react";
import ReadMore from "../ReadMore";

const Methodology = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Loamy’s Methodology</h2>
      <ReadMore maxItems={1}>
        <div className="mb-6">
          <p className="mb-4 text">
            We’re committed to providing transparent, accessible fertility data
            to our users so they can understand their options and make informed
            reproductive decisions.
          </p>
        </div>
        <aside className="bg-blue-100 p-4 m-6">
          <h3 className="font-semibold mb-4">💡 How we filtered the data:</h3>
          <p className="mb-4 text">
            We filter the data based on the following ranges of ages and
            diagnoses:
          </p>
          <ul className="mb-4 list-disc list-inside">
            <li>Age ranges: (25 - 29, 30 - 34, 35 - 39, 40+)</li>
            <li>Each single primary infertility diagnosis</li>
          </ul>
          <p className="mb-4 text">
            We digest the data, then progress through the filters in order (age
            → diagnosis).
          </p>
          <p className="mb-4 text">
            If no diagnosis is present, the data provided is filtered only by
            age. Age has been found to be among the single biggest predictors of
            egg quality and treatment success.
          </p>
          <p className="mb-4 text">
            We did not filter on AFC because we did not find it to be
            significant to outcomes in this dataset.
          </p>
          <p className="mb-4 text">
            AMH alone is also not a good single indicator of egg freezing
            success, so we don’t filter on AMH. However, we use your AMH inputs
            to inform the content below.
          </p>
          <p className="text">
            We maintain a minimal threshold of 50 like-outcomes for each data
            visualization to make sure it provides a useful representative
            sample.
          </p>
        </aside>
      </ReadMore>
    </section>
  );
};

export default Methodology;
