import React from "react";
import ReadMore from "../ReadMore";
import Callout from "../Callout";

const embryoFreezing = (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">How To Interpret Your Outcomes</h2>
    <ReadMore maxItems={1}>
      <p className="mb-4 text">
        Access to fertility data is your right. Gaining insight into the typical
        range of outcomes for individuals who share your demographic profile and
        diagnosis is crucial for setting realistic expectations.
      </p>
      <p className="mb-4 text">
        Outcomes can vary significantly among women. However, knowing the
        typical range of outcomes for individuals with similar demographics and
        diagnoses can help you better understand your reproductive status.
      </p>

      <Callout>
        <h3 className="font-semibold">💡 Insights</h3>
        <ul className="list-disc list-inside">
          <li>
            Women like you often aim to collect 10-20 mature eggs prior to
            fertilization.
          </li>
          <li>
            It's common for not all retrieved eggs to be mature; many times, 40%
            of the eggs collected may be immature. This reduction from retrieved
            to mature eggs is anticipated.
          </li>
          <li>
            The purpose of embryo freezing is to bring as many follicles to
            maturity as possible, and to then fertilize and develop the
            fertilized eggs (embryos) to the blastocyst stage (day five or day
            six embryo).
          </li>
          <li>
            Freezing at the blastocyst stage can improve the chances of
            successful thawing and implantation when the embryos are later
            transferred into the uterus during IVF.
          </li>
          <li>
            Typically, multiple retrievals are needed to accumulate a
            sufficiently large embryo bank for those desiring more than one
            child.
          </li>
        </ul>
        </Callout>

      <p className="mb-4 text">
        Understanding potential outcomes is crucial for estimating your
        expenses, which include both time and effort. Consider the duration of
        the process, the number of cycles needed to achieve a live birth, the
        financial cost of these cycles, and their impact on your mental health
        and relationships. Another key decision is whether to freeze eggs or
        embryos.
      </p>
      <p className="mb-4 text">
        The success rate of live births per embryo transfer ranges between
        34-47%, varying with the egg quality's grading. Opting for genetic
        screening with embryos offers more insight into your frozen embryos
        regarding potential outcomes.
      </p>
      <p className="mb-4 text">
        The choice between egg and embryo freezing hinges on several factors,
        including whether infertility is primarily due to female or male
        diagnoses, your short-term budget, and discussions concerning the
        disposition of surplus embryos and eggs.
      </p>

      <Callout>
        <h3 className="font-semibold">💡 Questions to consider:</h3>
        <ul className="list-disc list-inside">
          <li>
            What aspects of starting a family excite me, and what concerns might
            hold me back?
          </li>
          <li>
            What financial investment am I prepared to make in the process of
            having a baby?
          </li>
          <li>
            How do I plan to manage stress, and what kind of support will I need
            from my friends and family?
          </li>
          <li>
            If my partner and I were to part ways, how would we handle the
            division of frozen embryos? Would I need a reproductive lawyer?
          </li>
          <li>
            How would I feel about not using my frozen embryos in the future?
          </li>
          <li>
            Am I open to the idea of using donor eggs or sperm? Does my clinic
            offer access to a reputable donor database?
          </li>
        </ul>
        <h2>Questions for Your Reproductive Endocrinologist:</h2>
        <ul>
          <li>
            How many cycles of embryo freezing might be necessary for me, and
            what does that timeline look like?
          </li>
          <li>
            Based on my specific situation, what is the expected rate of live
            birth?
          </li>
          <li>
            Are there steps I can take to enhance my chances of success before,
            during, and after treatment?
          </li>
          <li>
            What are the anticipated costs, including medications, lab work, and
            consultations, for the expected number of cycles?
          </li>
        </ul>
      </Callout>
    </ReadMore>
  </section>
);
const eggFreezing = (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">How To Interpret Your Outcomes</h2>
    <ReadMore maxItems={1}>
      <p className="mb-4 text">
        Access to fertility data is your right. Gaining insight into the typical
        range of outcomes for individuals who share your demographic profile and
        diagnosis is crucial for setting realistic expectations.
      </p>
      <p className="mb-4 text">
        Outcomes can vary significantly among women. However, knowing the
        typical range of outcomes for individuals with similar demographics and
        diagnoses can help you better understand your reproductive status.
      </p>

      <Callout>
        <h3 className="font-semibold">💡 Insights</h3>
        <ul className="list-disc list-inside">
          <li>Women like you often aim to collect 10-20 mature eggs.</li>
          <li>
            It's common for not all retrieved eggs to be mature; many times, 40%
            of the eggs collected may be immature. This reduction from retrieved
            to mature eggs is anticipated.
          </li>
          <li>
            The purpose of egg freezing is to bring as many follicles to
            maturity as possible, which will then be stored and used for a
            future IVF cycle.
          </li>
          <li>
            In IVF, the objective is to fertilize these mature eggs and develop
            as many of the fertilized eggs (embryos) to the blastocyst stage
            (day five or day six embryo), where they will be transferred into
            the uterus.
          </li>
          <li>
            Typically, multiple retrievals are needed to accumulate a
            sufficiently large egg bank for those desiring more than one child.
          </li>
        </ul>
      </Callout>

      <Callout>
        <h3 className="font-semibold">💡 Questions to consider:</h3>
        <ul className="list-disc list-inside">
          <li>Why am I considering freezing my eggs?</li>
          <li>Do I have a preference for freezing eggs or embryos?</li>
          <li>
            What aspects of starting a family excite me? Are there any
            reservations holding me back?
          </li>
          <li>
            How much am I prepared to invest financially to preserve my
            fertility?
          </li>
          <li>
            What strategies will I employ to manage stress, and what kind of
            support will I need from friends and family?
          </li>
          <li>How would I feel if I never use my frozen eggs?</li>
          <li>
            Who would I want to co-parent with, if I decide to use these eggs?
          </li>
        </ul>
        <h3>Questions to Discuss with Your Reproductive Endocrinologist:</h3>
        <ul>
          <li>
            How many cycles might be necessary for me? What could the timeline
            look like?
          </li>
          <li>
            For someone of my age and with my lab values, what is the typical
            range of eggs retrieved?
          </li>
          <li>
            Are there any measures I can take to enhance my chances of success?
          </li>
          <li>
            What are the expected costs, including medications, lab tests, and
            consultations, for the number of cycles I might undergo?
          </li>
        </ul>
      </Callout>
    </ReadMore>
  </section>
);
const IVF = (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">How To Interpret Your Outcomes</h2>
    <ReadMore maxItems={1}>
      <p className="mb-4 text">
        While IVF outcomes can vary significantly from person to person, access
        to fertility data is your right. Gaining insight into the typical range
        of outcomes for individuals who share your demographic profile and
        diagnosis is crucial for setting realistic expectations.
      </p>
      <p className="mb-4 text">
        Knowing the typical range of outcomes for individuals with similar
        demographics and diagnoses can help you better understand your
        reproductive status.
      </p>

      <Callout>
        <h3 className="font-semibold">💡 Insights</h3>
        <ul className="list-disc list-inside">
          <li>
            Women like you often aim to collect 10-20 mature eggs prior to
            fertilization.
          </li>
          <li>
            It's common for not all retrieved eggs to be mature and suitable for
            fertilization; many times, 40% of the eggs collected may be
            immature. This reduction from retrieved to mature eggs is
            anticipated.
          </li>
          <li>
            The purpose of IVF is to bring as many follicles to maturity as
            possible, and to then fertilize and develop the fertilized eggs
            (embryos) to the blastocyst stage (day five or day six embryo).
          </li>
        </ul>
      </Callout>

      <p className="mb-4 text">
        Understanding potential outcomes is crucial for estimating your
        expenses, which include both time and effort. Consider the duration of
        the process, the number of cycles needed to achieve a live birth, the
        financial cost of these cycles, and their impact on your mental health
        and relationships.
      </p>

      <Callout>
        <h3 className="font-semibold">💡 Questions to consider:</h3>
        <ul className="list-disc list-inside">
          <li>
            What aspects of starting a family excite me, and what concerns might
            hold me back?
          </li>
          <li>
            What financial investment am I prepared to make in the process of
            having a baby?
          </li>
          <li>
            How do I plan to manage stress, and what kind of support will I need
            from my friends and family?
          </li>
          <li>
            Am I open to the idea of using donor eggs or sperm? Does my clinic
            offer access to a reputable donor database?
          </li>
        </ul>
        <h3>Questions for Your Reproductive Endocrinologist:</h3>
        <ul>
          <li>
            How many IVF cycles might I need, and what does the overall timeline
            look like?
          </li>
          <li>
            Given my specific situation, what is the expected live birth rate?
          </li>
          <li>
            Are there any steps I can take to increase the chances of success?
          </li>
          <li>
            What are the total expected costs, including medications, lab tests,
            and consultations, for the number of cycles I'm considering?
          </li>
        </ul>
      </Callout>
    </ReadMore>
  </section>
);

const justHereToLearn = (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">How To Interpret Your Outcomes</h2>
    <ReadMore maxItems={1}>
      <p className="mb-4 text">
        Data on fertility treatment outcomes can help you determine whether egg
        freezing, IVF, or natural conception could be viable options for you.
        While age stands out as one of the primary indicators of success, it's
        just one among several factors. If these statistics appear overwhelming,
        it's crucial to bear in mind that they may not fully represent your
        overall health and vitality profile.
      </p>
      <p className="mb-4 text">
        Outcomes can vary significantly among women. However, knowing the
        typical range of outcomes for individuals with similar demographics and
        diagnoses can help you better understand your reproductive status.
      </p>
      <Callout>
        <h3 className="font-semibold">💡 Insights</h3>
        <ul className="list-disc list-inside">
          <li>Women like you often aim to collect 10-20 mature eggs.</li>
          <li>
            It's common for not all retrieved eggs to be mature; many times, 40%
            of the eggs collected may be immature. This reduction from retrieved
            to mature eggs is anticipated.
          </li>
          <li>
            The purpose of egg freezing is to bring as many follicles to
            maturity as possible, which will then be stored and used for a
            future IVF cycle.
          </li>
          <li>
            In IVF, the objective is to fertilize these mature eggs and develop
            as many of the fertilized eggs (embryos) to the blastocyst stage
            (day five or day six embryo), where they will be transferred into
            the uterus.
          </li>
          <li>
            Typically, multiple retrievals are needed to accumulate a
            sufficiently large egg bank for those desiring more than one child.
          </li>
        </ul>
      </Callout>
      <Callout>
        <h3 className="font-semibold">💡 Questions to consider:</h3>
        <ul className="list-disc list-inside">
          <li>Do I want children? If so, why? If not, why not?</li>
          <li>When would I like to have children?</li>
          <li>
            Do I want to delay having children or plan the timing of my
            children?
          </li>
          <li>How many children do I envision having?</li>
          <li>
            What aspects of starting a family excite me? Are there any concerns
            or reservations holding me back?
          </li>
          <li>What budget am I prepared to allocate for family planning?</li>
          <li>
            How do I plan to handle stress, and what kind of support will I need
            from my friends and family?
          </li>
        </ul>
      </Callout>
    </ReadMore>
  </section>
);

const content = {
  "embryo": embryoFreezing,
  "egg": eggFreezing,
  "electiveEgg": eggFreezing,
  "ivf": IVF,
  "default": justHereToLearn
};

const HowToInterpret = ({ myPersona }) => {
    return content[myPersona.goal] || content["default"];
};

export default HowToInterpret;
