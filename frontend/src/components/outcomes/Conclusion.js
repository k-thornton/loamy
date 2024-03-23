import React from "react";

const Conclusion = ({ myPersona }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
      <p>
        We hope this information and the recommendations provided help address
        three important questions for you:
      </p>
      <ol className="list-decimal pl-10 mb-6 space-y-2">
        <li className="pl-2">What results can I expect?</li>
        <li className="pl-2">How can I optimize my overall fertility?</li>
        <li className="pl-2">What should I do next?</li>
      </ol>
      <p className="mb-4">
        If becoming a mother (or father) is your goal, remember that there are
        multiple paths to achieve it. Recognizing that you are not limited to
        one narrative can be liberating. Options like IVF, adoption, and
        third-party reproduction/surrogacy offer different avenues that you can
        assess based on your age, health, genetic background, and financial
        circumstances. If considering surrogacy as your next step, a reputable
        platform to explore is{" "}
        <a
          href="https://www.circlesurrogacy.com/intended-parents?device=c&matchtype=p&network=o&utm_adgroupid=1313918682797505&keyword=need%20surrogate&geo_click_id=51375&campaignid=686969534&gclid=&msclkid=c00c7c3de8a4104b760a19c939a7d05e&utm_source=bing&utm_medium=cpc&utm_campaign=IPs%20-%20US%20-%20Clear%20Intent%20-%20High%20Value&utm_term=need%20surrogate&utm_content=Surrogate%20-%20Need"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Circle Surrogacy
        </a>
        .
      </p>
      <p className="mb-4">
        The good news is that you have a range of options to consider and the
        freedom to decide your reproductive future.
      </p>
    </section>
  );
};

export default Conclusion;
