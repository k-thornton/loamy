import React from "react";

function ResultsIntro() {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold text-primary mb-4">
        Outcomes for Women Like You
      </h2>
      <p className="mb-4 text">
        You may have found yourself leaving a few questions blank or
        encountering some that made no sense at all. Not to worry - we're here
        to help!
      </p>
      <p className="mb-4 text">
        Reproductive health and fertility can be complex subjects, often not
        given attention until we reach our 30s or encounter difficulties
        conceiving. Unfortunately, our current systems have not prioritized
        fertility education, research, or women's health overall. To put it
        bluntly, <a className="link" href="https://www.theguardian.com/lifeandstyle/2019/nov/13/the-female-problem-male-bias-in-medical-trials">"We literally know less about every aspect of female biology
        compared to male biology."</a>
      </p>
      <p className="mb-4 text">
        This is precisely why we're developing Loamy - to bridge the knowledge
        gap in women's health and provide clear fertility expectations for
        individuals like you.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
        Your Results
      </h2>
      <p>
        There’s a lot of information here, and some of it may be new to you.
        We’ve partnered with reproductive endocrinologists (REIs), CMOs,
        researchers, international fertility drug pharmacies, acupuncturists,
        nutritionists, fertility and longevity supplement providers, and even a
        neurologic music therapist to make sense of it.
      </p>
    </div>
  );
}

export default ResultsIntro;
