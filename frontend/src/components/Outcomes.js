import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe, setSurveyCompleted, unsetSurveyCompleted } from "../features/survey/surveySlice";
import { resetAnswers } from "../features/survey/surveySlice";
import ChatBot from "./ChatBot";
import FullscreenLoader from "./FullscreenLoader";
import ResultsIntro from "./outcomes/ResultsIntro";
import ChartCards from "./ChartCards";
import ReadMore from "./ReadMore";
import Heading from "./outcomes/Heading";
import Methodology from "./outcomes/Methodology";
import LabValues from "./outcomes/LabValues";
import YourResults from "./outcomes/YourResults";
import FertilityJourney from "./outcomes/FertilityJourney";
import Sources from "./outcomes/Sources";
import Intro from "./outcomes/Intro";

function Outcomes() {
  const dispatch = useDispatch();
  const { myPersona, loading, error } = useSelector((state) => state.survey);

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <FullscreenLoader />;
  }

  if (!myPersona) {
    return <FullscreenLoader />;
  }

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
      <div className="p-5">
      <div className="container mx-auto">

        <Heading />
        <Intro myPersona={myPersona}/>
        <YourResults myPersona={myPersona} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            How To Interpret Your Outcomes
          </h2>
          <ReadMore maxItems={1}>
            <div className="mb-6">
              <p>
                Data on fertility treatment outcomes can help you determine
                whether egg freezing, IVF, or natural conception could be viable
                options for you. While age stands out as one of the primary
                indicators of success, it's just one among several factors. If
                these statistics appear overwhelming, it's crucial to bear in
                mind that they may not fully represent your overall health and
                vitality profile.
              </p>
            </div>
            <div className="mb-6">
              <p>
                Outcomes can vary significantly among women. However, knowing
                the typical range of outcomes for individuals with similar
                demographics and diagnoses can help you better understand your
                reproductive status.
              </p>
            </div>
            <aside className="bg-blue-100 p-4 mb-6">
              <h3 className="font-semibold">💡 Insights</h3>
              <ul className="list-disc list-inside">
                <li>Women like you often aim to collect 10-20 mature eggs.</li>
                <li>
                  It's common for not all retrieved eggs to be mature; many
                  times, 40% of the eggs collected may be immature. This
                  reduction from retrieved to mature eggs is anticipated.
                </li>
                <li>
                  The purpose of egg freezing is to bring as many follicles to
                  maturity as possible, which will then be stored and used for a
                  future IVF cycle.
                </li>
                <li>
                  In IVF, the objective is to fertilize these mature eggs and
                  develop as many of the fertilized eggs (embryos) to the
                  blastocyst stage (day five or day six embryo), where they will
                  be transferred into the uterus.
                </li>
                <li>
                  Typically, multiple retrievals are needed to accumulate a
                  sufficiently large egg bank for those desiring more than one
                  child.
                </li>
              </ul>
            </aside>
            <aside className="bg-blue-100 p-4 mb-6">
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
                  What aspects of starting a family excite me? Are there any
                  concerns or reservations holding me back?
                </li>
                <li>
                  What budget am I prepared to allocate for family planning?
                </li>
                <li>
                  How do I plan to handle stress, and what kind of support will
                  I need from my friends and family?
                </li>
              </ul>
            </aside>
          </ReadMore>
        </section>
        <Methodology />
        <LabValues myPersona={myPersona} />

        {/* What To Expect Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What To Expect</h2>
          <ReadMore>
            <p className="mb-4">
              While IVF or egg freezing might not be immediate considerations
              for you, and perhaps they never will be, we view all women as the
              Chief Fertility Officers of their households. If it matches your
              goals, a valuable initial step is to become acquainted with your
              reproductive baseline, lab levels, and overall fertility health.
            </p>
            {/* <p>Here is a glimpse of where you are at in the journey currently:</p> */}
            <div className="mb-6">
              <FertilityJourney stepsCompleted={0} />
              <p className="mb-4">
                The fertility journey involves a series of sequential decisions.
                Due to the limited number of providers—around 1,300 reproductive
                endocrinologists for 30 million women—most of these decisions
                are made by you, the patient.
              </p>
              <p className="mb-4">
                Beyond the clinic, many patients also explore integrative and
                holistic services like supplements, acupuncture, or nutrition
                packages.
              </p>
              <p className="mb-4">
                We differentiate between optional and required steps in an IVF
                cycle by focusing on evidence-based practices that are right for
                you. You can find more detailed information here.{" "}
                <a href="#">LINK TO “Your next Steps” section</a>
              </p>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <h3 className="font-bold text-lg mb-2">Key Steps</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Medical evaluation & lab testing: Initial consult with a fertility clinic where you undergo tests to check hormone levels, ovarian function, and sperm quality",
                    "Ovarian stimulation: Daily medication and hormone injections to encourage the ovaries to produce multiple eggs during a menstrual cycle.",
                    "Egg retrieval: Minor surgical procedure where mature eggs are collected from the ovaries using an ultrasound-guided fine needle.",
                    "Fertilization: Sperm and eggs are combined in a lab setting to facilitate the creation of embryos.",
                    "Embryo Transfer: One or more embryos are placed into the uterus, typically via a thin catheter, with the hope of implantation.",
                    "Pregnancy Test: Test done to measure the level of a hormone called human chorionic gonadotropin (hCG) in the urine or blood, which indicates pregnancy.",
                  ].map((step, index) => (
                    <li key={index} className="flex">
                      <span className="text-primary mr-2">■</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <h3 className="font-bold text-lg mb-2">Integrative Steps</h3>
                <ul className="list-none space-y-2">
                  {[
                    "Mental Health Support [Link to “Mental Health & Mindfulness” in the “Your Next Steps” section]",
                    "Prenatal Vitamins & Supplements [Link to “Supplements” in the “Your Next Steps” section]",
                    "Acupuncture [Link to “Acupuncture” in the “Your Next Steps” section]",
                    "Nutrition Modifications [Link to “Lifestyle” in the “Your Next Steps” section]",
                    "Omission of Chemicals & Drugs [Link to “Lifestyle” in the “Your Next Steps” section]",
                  ].map((step, index) => (
                    <li key={index} className="flex">
                      <span className="text-primary mr-2">■</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="bg-blue-100 p-4 mb-6">
              <h3 className="font-semibold">💡 Myths and Truths:</h3>
              <p className="mb-1 mt-7">
                <strong>Myth: </strong>Success in fertility treatment requires
                taking numerous specialized supplements and adhering to strict
                fertility diets.
              </p>
              <p>
                {" "}
                <strong>Truth:</strong> Eating nutritious, whole foods, engaging
                in regular exercise, and avoiding harmful habits like smoking,
                using cannabis, and excessive drinking are beneficial for your
                health and fertility, regardless of your treatment plan.
              </p>
              <p className="mb-1 mt-7">
                <strong>Myth: </strong>Egg freezing guarantees a future live
                birth.
              </p>
              <p>
                {" "}
                <strong>Truth:</strong> The success rate for live births from
                thawed eggs is approximately 39%, with the most significant
                factor being the age at which the eggs are frozen.
                Statistically, freezing eggs at a younger age is associated with
                higher success rates.
              </p>
              <p className="mb-1 mt-7">
                <strong>Myth: </strong>To achieve the best outcomes, you must
                opt for every available IVF add-on.{" "}
              </p>
              <p>
                <strong>Truth:</strong> ICSI (Intracytoplasmic Sperm Injection)
                is utilized in over 90% of IVF cycles, not just for cases of
                male factor infertility. Many choose it for the perceived
                psychological benefits, although the evidence supporting its
                impact on increasing live birth rates is limited. ICSI costs
                patients between $800 and $2,500 per cycle, while clinics incur
                costs of $50 to $250 to perform it. We'll explore the economics
                of IVF further below.
              </p>
            </aside>
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Your Next Steps</h2>
              <p>
                There's a considerable amount of misleading information online
                about fertility, with some sources suggesting simplistic
                solutions like "just relax" or take a specific supplement to
                miraculously boost fertility.
              </p>
              <p>
                Fortunately, there's substantial research focused on behavior
                modifications that can genuinely enhance fertility—though these
                findings are frequently overshadowed by the noisy fertility
                wellness influencer industry. Based on the literature, here's
                what we recommend:
              </p>
            </section>
          </ReadMore>
        </section>

        {/* Conclusion Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>
            We hope this information and the recommendations provided help
            address three important questions for you:
          </p>
          <ol className="list-decimal pl-10 mb-6 space-y-2">
            <li className="pl-2">What results can I expect?</li>
            <li className="pl-2">How can I optimize my overall fertility?</li>
            <li className="pl-2">What should I do next?</li>
          </ol>
          <p className="mb-4">
            If becoming a mother (or father) is your goal, remember that there
            are multiple paths to achieve it. Recognizing that you are not
            limited to one narrative can be liberating. Options like IVF,
            adoption, and third-party reproduction/surrogacy offer different
            avenues that you can assess based on your age, health, genetic
            background, and financial circumstances. If considering surrogacy as
            your next step, a reputable platform to explore is{" "}
            <a
              href="https://www.circlesurrogacy.com/intended-parents?device=c&matchtype=p&network=o&utm_adgroupid=1313918682797505&keyword=need%20surrogate&geo_click_id=51375&campaignid=686969534&gclid=&msclkid=c00c7c3de8a4104b760a19c939a7d05e&utm_source=bing&utm_medium=cpc&utm_campaign=IPs%20-%20US%20-%20Clear%20Intent%20-%20High%20Value&utm_term=need%20surrogate&utm_content=Surrogate%20-%20Need"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Circle Surrogacy
            </a>
            .
          </p>
          <p className="mb-4">
            The good news is that you have a range of options to consider and
            the freedom to decide your reproductive future.
          </p>
        </section>
        <Sources />
      </div>
    </div>
      <div className="ml-10 mt-10 mb-10 text text-xs">Want to start over? <button className="btn btn-xs" onClick={() => dispatch(unsetSurveyCompleted())}>Back to Survey</button></div>
      <ChatBot />
    </div>
  );
}

export default Outcomes;
