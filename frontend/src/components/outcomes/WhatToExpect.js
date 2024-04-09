import React from "react";
import ReadMore from "../ReadMore";
import FertilityJourney from "./FertilityJourney";
import Callout from "../Callout";

const integrativeSteps = <><h3 className="font-bold text-lg mb-2">Integrative Steps</h3>
<ul className="list-none space-y-2">
  {[
    <p className="text"><a className="link "href="#mindfulness" >Mental Health Support</a></p>,
    <p className="text"><a className="link "href="#supplements" >Prenatal Vitamins & Supplements</a></p>,
    <p className="text"><a className="link "href="#acupuncture" >Acupuncture</a></p>,
    <p className="text"><a className="link "href="#lifestyle" >Nutrition Modifications</a></p>,
    <p className="text"><a className="link "href="#lifestyle" >Omission of Chemicals & Drugs</a></p>,
  ].map((step, index) => (
    <li key={index} className="flex">
      <span className="text-primary mr-2">■</span>
      <span>{step}</span>
    </li>
  ))}
</ul></>;

const WhatToExpect = ({ myPersona }) => {
const justHereToLearn = (
  <section className="mb-10">
  <h2 className="text-2xl font-bold mb-4">What To Expect</h2>
  <ReadMore>
    <p className="mb-4 text">
      While IVF or egg freezing might not be immediate considerations
      for you, and perhaps they never will be, we view all women as the
      Chief Fertility Officers of their households. If it matches your
      goals, a valuable initial step is to become acquainted with your
      reproductive baseline, lab levels, and overall fertility health.
    </p>
    {/* <p className="mb-4 text">Here is a glimpse of where you are at in the journey currently:</p> */}
    <div className="mb-6">
      <FertilityJourney stepsCompleted={0} />
      <p className="mb-4 text">
        The fertility journey involves a series of sequential decisions.
        Due to the limited number of providers—around 1,300 reproductive
        endocrinologists for 30 million women—most of these decisions
        are made by you, the patient.
      </p>
      <p className="mb-4 text">
        Beyond the clinic, many patients also explore integrative and
        holistic services like supplements, acupuncture, or nutrition
        packages.
      </p>
      <p className="mb-4 text">
        We differentiate between optional and required steps in an IVF
        cycle by focusing on evidence-based practices that are right for
        you. You can find more detailed information below.
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
        {integrativeSteps}
      </div>
    </div>
    <Callout>
      <h3 className="font-semibold">💡 Myths and Truths:</h3>
      <p className="mb-1 mt-7">
        <strong>Myth: </strong>Success in fertility treatment requires
        taking numerous specialized supplements and adhering to strict
        fertility diets.
      </p>
      <p className="mb-4 text">
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
      <p className="mb-4 text">
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
      <p className="mb-4 text">
        <strong>Truth:</strong> ICSI (Intracytoplasmic Sperm Injection)
        is utilized in over 90% of IVF cycles, not just for cases of
        male factor infertility. Many choose it for the perceived
        psychological benefits, although the evidence supporting its
        impact on increasing live birth rates is limited. ICSI costs
        patients between $800 and $2,500 per cycle, while clinics incur
        costs of $50 to $250 to perform it. We'll explore the economics
        of IVF further below.
      </p>
    </Callout>
  </ReadMore>
</section>
);
const embryoFreezing = (
  <section className="mb-10">
  <h2 className="text-2xl font-bold mb-4">What To Expect</h2>
  <ReadMore>
    <p className="mb-4 text">
    You've come a long way already. Your journey, often thought to start at the fertility clinic, actually includes much more—like the months you've spent advocating for yourself, being persistent with providers, and undergoing various diagnoses and tests to get to where you are now.
    </p>
    <p className="mb-4 text">These experiences are a significant part of your journey and will be a chapter in the story of how your future child came into the world. Here's a glimpse into where you stand now in your embryo freezing journey.</p>
    <div className="mb-6">
      <FertilityJourney stepsCompleted={myPersona.stage} />
      <p className="mb-4 text">
      The embryo freezing journey involves a series of sequential decisions. Due to the limited number of providers—around 1,300 reproductive endocrinologists for 30 million women—most of these decisions are made by you, the patient.
      </p>
      <p className="mb-4 text">
        Beyond the clinic, many patients also explore integrative and
        holistic services like supplements, acupuncture, or nutrition
        packages.
      </p>
      <p className="mb-4 text">
      We differentiate between optional and required steps in an embryo freezing cycle by focusing on evidence-based practices that are right for you. You can find more detailed information below.
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
            "Embryo Storage: Embryos are stored at very low temperatures, typically in liquid nitrogen, to preserve their biologic age.",
            "Oral, Injectable, Vaginal or Transdermal Hormones: Medication is used to prepare your uterus for accepting an embryo.",
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
       <h3 className="font-bold text-lg mb-2">Add-ons for Embryo Freezing</h3>
        <ul className="list-none space-y-2">
          {[
            "ICSI: Fertilization technique where a single sperm is injected directly into an egg to assist fertilization, used for male factor infertility. ",
            "PICSI: A variant of ICSI, it is a method of sperm selection based on the degree of maturation of the sperm and its ability to bind to hyaluronic acid.",
            "IMSI: An improved type of ICSI, where sperm are evaluated under high magnification to select the best quality sperm for fertilization.",
            "Preimplantation Genetic Testing (PGT): Screening embryos for genetic abnormalities before implantation.",
          ].map((step, index) => (
            <li key={index} className="flex">
              <span className="text-primary mr-2">■</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
        <h3 className="font-bold text-lg mb-2">Add-ons for Embryo Transfer</h3>
        <ul className="list-none space-y-2">
          {[
            "Endometrial Scratch: A procedure where the uterine lining is gently scratched to promote embryo implantation during IVF treatment.",
            "Embryo Glue: Hyaluronan-enriched embryo transfer to promote successful embryo transfer.",
          ].map((step, index) => (
            <li key={index} className="flex">
              <span className="text-primary mr-2">■</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
        {integrativeSteps}
      </div>
    </div>
    <Callout>
      <h3 className="font-semibold">💡 Myths and Truths:</h3>
      <p className="mb-1 mt-7">
        <strong>Myth: </strong>Success in fertility treatment requires
        taking numerous specialized supplements and adhering to strict
        fertility diets.
      </p>
      <p className="mb-4 text"><strong>Truth:</strong> Eating nutritious, whole foods, engaging
        in regular exercise, and avoiding harmful habits like smoking,
        using cannabis, and excessive drinking are beneficial for your
        health and fertility, regardless of your treatment plan.
      </p>
      <p className="mb-1 mt-7">
        <strong>Myth: </strong>I need to purchase every add-on to increase my embryo freezing and transfer success rate.
      </p>
      <p className="mb-4 text">
        <strong>Truth:</strong> ICSI is now used in over 90% of IVF cycles regardless of whether male factor is the reason. Many patients report using it for its psychological benefits, even if the evidence for its improvements on live birth are thin. ICSI costs the patient between $800 - 2,500 per cycle and the clinic $50 - 250 to perform. We’ll get into the economics of IVF below. 
      </p>
      <p className="mb-4 text">
        <strong>Truth:</strong> Endometrial scratching (endometrial biopsy prior to embryo transfer) also provided no significant outcome benefit to patients going through IVF, with the treatment group performing the same as the control group in a recent <a className="link" href="https://pubmed.ncbi.nlm.nih.gov/30673547/">study</a>. As well, Embryo Glue (hyaluronan-enriched embryo transfer) has only been found to have slight improvements on success rates. 
      </p>
    </Callout>
    <p className="mb-4 text">Some procedures and add-ons might be considered a last resort, but this shouldn't deter you from inquiring why your provider recommends a specific protocol or suggests an additional treatment. It's crucial to understand the rationale behind each decision in your care plan.</p>
  </ReadMore>
</section>
);

const eggFreezing = (
  <section className="mb-10">
  <h2 className="text-2xl font-bold mb-4">What To Expect</h2>
  <ReadMore>
    <p className="mb-4 text">
    You've come a long way already. Your journey, often thought to start at the fertility clinic, actually includes much more—like the months you've spent advocating for yourself, being persistent with providers, and undergoing various diagnoses and tests to get to where you are now.
    </p>
    <p className="mb-4 text">These experiences are a significant part of your journey and will be a chapter in the story of how your future child came into the world. Here's a glimpse into where you stand now in your embryo freezing journey.</p>
    <div className="mb-6">
      <FertilityJourney stepsCompleted={myPersona.stage} />
      <p className="mb-4 text">
      The embryo freezing journey involves a series of sequential decisions. Due to the limited number of providers—around 1,300 reproductive endocrinologists for 30 million women—most of these decisions are made by you, the patient.
      </p>
      <p className="mb-4 text">
        Beyond the clinic, many patients also explore integrative and
        holistic services like supplements, acupuncture, or nutrition
        packages.
      </p>
      <p className="mb-4 text">
      We differentiate between optional and required steps in an embryo freezing cycle by focusing on evidence-based practices that are right for you. You can find more detailed information below.
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
            "Storage:  Eggs are stored at very low temperatures, typically in liquid nitrogen, to preserve their biologic age."
          ].map((step, index) => (
            <li key={index} className="flex">
              <span className="text-primary mr-2">■</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 px-2">
      {integrativeSteps}
      </div>
    </div>
    <Callout>
      <h3 className="font-semibold">💡 Myths and Truths:</h3>
      <p className="mb-1 mt-7">
        <strong>Myth: </strong>Success in fertility treatment requires
        taking numerous specialized supplements and adhering to strict
        fertility diets.
      </p>
      <p className="mb-4 text"><strong>Truth:</strong> Eating nutritious, whole foods, engaging
        in regular exercise, and avoiding harmful habits like smoking,
        using cannabis, and excessive drinking are beneficial for your
        health and fertility, regardless of your treatment plan.
      </p>
      <p className="mb-1 mt-7">
        <strong>Myth: </strong>Egg freezing guarantees a future live birth.
      </p>
      <p className="mb-4 text">
        <strong>Truth:</strong> The success rate for live births from thawed eggs is approximately 39%, with the most significant factor being the age at which the eggs are frozen. Statistically, freezing eggs at a younger age is associated with higher success rates.
      </p>
    </Callout>
    <p className="mb-4 text">Some procedures and add-ons might be considered a last resort, but this shouldn't deter you from inquiring why your provider recommends a specific protocol or suggests an additional treatment. It's crucial to understand the rationale behind each decision in your care plan.</p>
  </ReadMore>
</section>
);

const IVF = (
  <section className="mb-10">
  <h2 className="text-2xl font-bold mb-4">What To Expect</h2>
  <ReadMore>
    <p className="mb-4 text">
    You've come a long way already. Your journey, often thought to start at the fertility clinic, actually includes much more—like the months you've spent advocating for yourself, being persistent with providers, and undergoing various diagnoses and tests to get to where you are now.
    </p>
    <p className="mb-4 text">These experiences are a significant part of your journey and will be a chapter in the story of how your future child came into the world. Here's a glimpse into where you stand now in your IVF journey.</p>
    <div className="mb-6">
      <FertilityJourney stepsCompleted={myPersona.stage} />
      <p className="mb-4 text">
      The IVF journey involves a series of sequential decisions. Due to the limited number of providers—around 1,300 reproductive endocrinologists for 30 million women—most of these decisions are made by you, the patient.
      </p>
      <p className="mb-4 text">
        Beyond the clinic, many patients also explore integrative and
        holistic services like supplements, acupuncture, or nutrition
        packages.
      </p>
      <p className="mb-4 text">
      We differentiate between optional and required steps in an IVF cycle by focusing on evidence-based practices that are right for you. You can find more detailed information below.
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
       <h3 className="font-bold text-lg mb-2">Add-ons for IVF</h3>
        <ul className="list-none space-y-2">
          {[
            "ICSI: Fertilization technique where a single sperm is injected directly into an egg to assist fertilization, used for male factor infertility. ",
            "PICSI: A variant of ICSI, it is a method of sperm selection based on the degree of maturation of the sperm and its ability to bind to hyaluronic acid.",
            "IMSI: An improved type of ICSI, where sperm are evaluated under high magnification to select the best quality sperm for fertilization.",
            "Preimplantation Genetic Testing (PGT): Screening embryos for genetic abnormalities before implantation.",
            "Endometrial Scratch: A procedure where the uterine lining is gently scratched to promote embryo implantation during IVF treatment.",
            "Embryo Glue: Hyaluronan-enriched embryo transfer to promote successful embryo transfer.",
          ].map((step, index) => (
            <li key={index} className="flex">
              <span className="text-primary mr-2">■</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
        {integrativeSteps}
      </div>
    </div>
    <Callout>
      <h3 className="font-semibold">💡 Myths and Truths:</h3>
      <p className="mb-1 mt-7">
        <strong>Myth: </strong>Success in fertility treatment requires
        taking numerous specialized supplements and adhering to strict
        fertility diets.
      </p>
      <p className="mb-4 text"><strong>Truth:</strong> Eating nutritious, whole foods, engaging
        in regular exercise, and avoiding harmful habits like smoking,
        using cannabis, and excessive drinking are beneficial for your
        health and fertility, regardless of your treatment plan.
      </p>
      <p className="mb-1 mt-7">
        <strong>Myth: </strong>I need to purchase every add-on to increase my IVF success rate.
      </p>
      <p className="mb-4 text">
        <strong>Truth:</strong>  ICSI is now used in over 90% of IVF cycles regardless of whether male factor is the reason. Many patients report using it for its psychological benefits, even if the evidence for its improvements on live birth are thin. ICSI costs the patient between $800 - 2,500 per cycle and the clinic $50 - 250 to perform. We’ll get into the economics of IVF below. 
      </p>
      <p className="mb-4 text">
        <strong>Truth:</strong>  Endometrial scratching (endometrial biopsy prior to embryo transfer) also provided no significant outcome benefit to patients going through IVF, with the treatment group performing the same as the control group in a recent <a className="link" href="https://pubmed.ncbi.nlm.nih.gov/30673547/">study</a>. As well, Embryo Glue (hyaluronan-enriched embryo transfer) has only been found to have slight improvements on success rates. 
      </p>
    </Callout>
    <p className="mb-4 text">Some procedures and add-ons might be considered a last resort, but this shouldn't deter you from inquiring why your provider recommends a specific protocol or suggests an additional treatment. It's crucial to understand the rationale behind each decision in your care plan.</p>
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

    return content[myPersona.goal] || content["default"];
};

export default WhatToExpect;
