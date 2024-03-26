import React from 'react';

const IVFDataInfo = () => {
  return (
    <div className="text-neutral-700 p-4">
      <h1 className="text-2xl font-bold mb-4">IVF Hunger Games Datasheet - r/infertility Subreddit</h1>
      <p className="mb-4 text">
        The data is from over 4,000 IVF patients who have contributed their experiences to the <strong>IVF Hunger Games Datasheet</strong> in the r/infertility subreddit. This resource provides insights into the outcomes and protocols experienced by women with biologically female reproductive organs (uterus, ovaries, vagina, etc.) during the egg retrieval phase of IVF treatment for infertility.
      </p>
      
      <h2 className="text-xl font-semibold mb-2">Important Considerations to Keep in Mind:</h2>
      
      <h3 className="text-lg font-semibold mb-2">Specific Scope</h3>
      <p className="mb-4 text">
        - This data focuses on the <strong>egg retrieval phase</strong> of IVF treatment for infertility. It may not accurately model data results of egg freezing for fertility preservation in the absence of an infertility diagnosis.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Non-Representative Sample</h3>
      <p className="mb-4 text">
        - The dataset does not originate from a random sample, meaning the outcomes may not accurately reflect the experiences of all women undergoing IVF.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Self-Reported Data</h3>
      <p className="mb-4 text">
        - Information is based on <strong>self-reported data</strong>, which can include errors or typographical mistakes (e.g., inputting '11' instead of '1'). Details may be recalled incorrectly, or diagnoses may change as treatment progresses.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Multiple Submissions</h3>
      <p className="mb-4 text">
        - Individuals can report results from <strong>multiple egg retrievals</strong>. It's important to recognize that different data entries may not be entirely independent.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Survivorship Bias</h3>
      <p className="mb-4 text">
        - The dataset may exhibit <strong>survivorship bias</strong>. Those who do not achieve success quickly are more likely to undergo multiple retrievals and contribute data multiple times. Conversely, individuals who experience success after a single retrieval and transfer may be underrepresented.
      </p>
    </div>
  );
};

export default IVFDataInfo;
