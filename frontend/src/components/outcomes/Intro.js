import React from "react";

const Intro = ({ myPersona }) => {
  const getContent = (myPersona) => {
    // Lot of repeated content here... this could definitely be collapsed further.
    // There's just a bit too much to diff at the moment to do it easily.
    // Definitely if this copy is going to be edited a bunch you might want
    // to come in here and combine sections that are similar.
    // Right now it's a bit Frankenstein'd together :(

    const achievement = (thing, topic) => {
      return (
        <p className="mb-4 text">
          Completing {thing} is a significant achievement, no matter the
          results. By this stage, you're likely well-versed in the process and
          might even consider yourself an expert in {topic}. Yet, the road ahead
          can appear daunting, filled with decisions about your future, health,
          career, and family, leaving you at a crossroads about your next steps.
        </p>
      );
    };

    const uncertain = (goal) => {
      return <p className="mb-4 text">
        Feeling uncertain about whether {goal} is the
        right choice for you — whether from a physical, emotional, financial, or
        mental perspective — is completely natural. However, the prevalent lack of
        informed consent in these crucial reproductive health decisions is not
        acceptable.
      </p>;
    };

    const daunting = (
      <p className="mb-4 text">
        It's entirely normal to feel uncertain about major life decisions such
        as having children, career paths, or relationship status at this point
        in your life. Deciding where to begin your fertility journey—be it with
        your doctor, a partner, friends, insurance, or even your employer—can be
        daunting.
      </p>
    );

    const dataStarved = (familiarity) => {
      if (familiarity === "3"){
        return  <p className="mb-4 text">
        The feeling of being data-starved in making reproductive health
        decisions is common. Often, it might feel like many promises are made
        with little or weak evidence of clinical efficacy, compounded by the
        anxiety of wondering about your chances of success. The question
        looms, should I undergo another cycle? How do my results compare with
        others? What should I do next?
      </p>;
      }
      if (familiarity === "2"){
        return <p className="mb-4 text">
          The feeling of being data-starved in making reproductive health
          decisions is common. Often, it might feel like many promises are made
          with little or weak evidence of clinical efficacy, compounded by the
          anxiety of wondering about your chances of success. Questions around
          outcomes, how you’re responding to stims, and next steps loom.
        </p>;
      }
      return <p className="mb-4 text">
          The scarcity of clear, compelling clinical evidence, coupled with the
          anxiety surrounding potential outcomes, contributes to the feeling of
          being overwhelmed by options that seem to be sold to us rather than
          explained.
        </p>;
    };

    const whyLoamy = (goal) => {
      return <p className="mb-4 text">
        This is why we’re building Loamy; to provide real, transparent
        expectations for your {goal.toLowerCase()} journey, informed
        by data from women and couples like you.
      </p>;
    };

    // From here onward is the divergences in copy based on persona
    if (myPersona.goal === "embryo") {
      let topContent = (
        // default (level 1)
        <>
          {daunting}
          <p className="mb-4 text">
            Feeling conflicted or unsure about whether embryo freezing is the
            right next step for you, whether mentally, physically, financially,
            or emotionally, is completely valid. What's problematic, however, is
            the pervasive issue of inadequate informed consent in our
            decision-making processes.
          </p>
        </>
      );
      if (myPersona.familiarity === "3") {
        topContent = achievement(
          "a round of embryo freezing",
          "embryo freezing"
        );
      } else if (myPersona.familiarity === "2") {
        topContent = (
          <>
            <p className="mb-4 text">
              Starting your embryo freezing journey can feel daunting, whether
              you're here due to career goals, the absence of a suitable
              partner, or simply not feeling ready to start a family just yet.
            </p>
            {uncertain("embryo freezing")}
          </>
        );
      }

      return (
        <div>
          {topContent}
          {dataStarved(myPersona.familiarity)}
          {whyLoamy("embryo freezing")}
        </div>
      );
    }

    if (
      myPersona.goal === "egg" ||
      myPersona.goal === "electiveEgg"
    ) {
      let topContent = (
        // default (level 1)
        <>
          {daunting}
          <p className="mb-4 text">
            Feeling conflicted or unsure about whether egg freezing is the right
            next step for you, whether mentally, physically, financially, or
            emotionally, is completely valid. What's problematic, however, is
            the pervasive issue of inadequate informed consent in your
            decision-making processes.
          </p>
        </>
      );
      if (myPersona.familiarity === "3") {
        topContent = achievement("an egg freezing cycle", "egg freezing");
      } else if (myPersona.familiarity === "2") {
        topContent = (
          <>
            <p className="mb-4 text">
              Starting your egg freezing journey can feel daunting, whether
              you're here due to career goals, the absence of a suitable
              partner, or simply not feeling ready to start a family just yet.
            </p>
            {uncertain("egg freezing")}
          </>
        );
      }
      return (
        // Egg Freezing default fallback
        <div>
          {topContent}
          {dataStarved(myPersona.familiarity)}
          {whyLoamy("egg freezing")}
        </div>
      );
    }

    if (myPersona.goal === "ivf") {
      let topContent = (
        // Default (level 1)
        <>
          <p className="mb-4 text">
            At the start of the IVF journey, it's normal for everything to feel
            new, scary, and uncertain. Deciding where to begin your fertility
            journey—be it with your doctor, a partner, friends, insurance, or
            even your employer—can be daunting.
          </p>
          <p className="mb-4 text">
            It's completely normal to experience a mix of emotions or struggle
            to decide whether IVF is the right next step for you, whether that’s
            mentally, physically, financially, or emotionally. What's
            problematic, however, is the pervasive issue of inadequate informed
            consent in our decision-making processes.
          </p>
        </>
      );
      if (myPersona.familiarity === "3") {
        topContent = achievement("a round of IVF", "IVF");
      } else if (myPersona.familiarity === "2") {
        topContent = (
          <>
            <p className="mb-4 text">
              Starting your IVF journey can feel daunting, surrounded by a
              whirlwind of new emotions, uncertainties, and fears.
            </p>
            {uncertain("IVF")}
          </>
        );
      }
      return (
        <div>
          {topContent}
          {dataStarved(myPersona.familiarity)}
          {whyLoamy("IVF")}
        </div>
      );
    }

    // Default (i.e. Just here to learn)
    return (
      <div>
        <p className="mb-4 text">
          You may have found yourself leaving a few questions unanswered or
          encountering some that made no sense at all. Not to worry - we're here
          to help!
        </p>
        <p className="mb-4 text">
          Reproductive health and fertility can be complex subjects, often not
          given attention until we reach our 30s or encounter difficulties
          conceiving. Unfortunately, our current systems have not prioritized
          fertility education, research, or women's health overall. To put it
          bluntly,{" "}
          <a
            className="link"
            href="https://www.theguardian.com/lifeandstyle/2019/nov/13/the-female-problem-male-bias-in-medical-trials"
          >
            "We literally know less about every aspect of female biology
            compared to male biology."
          </a>
        </p>
        <p className="mb-4 text">
          This is precisely why we're developing Loamy - to bridge the knowledge
          gap in women's health and provide clear fertility expectations for
          individuals like you.
        </p>
      </div>
    );
  };

  return (<section className="mb-10">{getContent(myPersona)}</section>
  );
};
export default Intro;
