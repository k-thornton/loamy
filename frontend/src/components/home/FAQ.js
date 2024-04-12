import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How does Loamy’s Women Like Me survey work?",
    answer: (
      <>
        <p className="mb-4">
          This tool is comprised of eight questions. Simply input your
          fertility goal, stage, age, primary diagnosis, and hormone levels. The
          tool will then output results of the patients who share your similar
          characteristics, based on age and diagnosis. 
        </p>
        <p className="mb-4">
          You will receive a personalized report that includes expected outcomes
          for eggs retrieved, mature eggs, fertilized eggs, and day 5 embryos as
          well as the expected hormone levels for women your age. This
          information is contextualized with curated content and recommended
          actions to optimize your fertility.{" "}
        </p>
      </>
    ),
  },
  {
    question: "What data sources does Women Like Me use?",
    answer: (
      <>
        <p className="mb-4">
          Women Like Me uses publicly available, self-reported data from over
          4,000 de-identified women who have undergone IVF.
        </p>
        <p className="mb-4">
          All data is anonymous and used to show an aggregate sample of real-world outcomes. 
          None of the data is moentized or sold to third parties. 
        </p>
      </>
    ),
  },
  {
    question: "How can I learn more about data transparency in women’s health?",
    answer: (
      <>
        <p className="mb-4">
          We think great places to start are online resources like the Centers
          for Disease Control and Prevention (CDC) and National Institutes of
          Health (NIH) as well as academic journals and publications.
        </p>
        <p className="mb-4">
          In an effort to contribute to responsible data practices, we include
          methodology for how we use the data as well as insights extracted from
          the above sources.
        </p>
      </>
    ),
  },
  {
    question: "How can I get help with my Loamy survey?",
    answer: (
      <>
        <p className="mb-4">
          We expect most women getting started will have to leave a few
          questions blank. The good news is the tool is designed to still
          provide filtered outcomes and content based on the responses you do
          provide.
        </p>
        <p className="mb-4">
          We will generate a personalized report that can help get you started
          on the journey and resources to find some of your missing fields. You
          can always go back and input them later to see your results evolve.
        </p>
        <p className="mb-4">
          If you still have questions, reach out! Message us at bcurry@loamy.info
          for help with the survey.
        </p>
      </>
    ),
  },
  {
    question: "What data does the Women Like Me survey collect?",
    answer: (
      <>
        <p className="mb-4">
          In order to generate your outcomes and personalized content, we ask
          for your age, stage of the fertility journey, diagnosis, AMH level,
          and Antral Follicle Count (AFC). We store this information in your
          personal profile for your convenience, so that you do not need to
          reenter it every time you use the Women Like Me tool.
        </p>
        <p className="mb-4">
          You can opt not to answer any of the above fields and still receive a
          report on fertility.{" "}
        </p>
        <p className="mb-4">
          We do not expose any of your personal data to the AI fertility
          assistant.{" "}
        </p>
      </>
    ),
  },
  {
    question: "What’s next for Loamy?",
    answer: (
      <>
        <p className="mb-4">
          Loamy is on a mission to create reproductive freedom for all. We will
          deliver on the key pain points of the widely neglected patient
          experience in fertility: data, decision-support, education, and
          community.
        </p>
        <p className="mb-4">
          We will continue to fine tune and build upon our data, models, and
          recommendations. We have stealthy partnerships down the pipeline with
          networks of fertility clinics, researchers, and academia to deliver
          some of the most sophisticated fertility models to market.{" "}
        </p>
        <p className="mb-4">
          But more importantly, we know this experience sucks. Loamy is
          committed to creating a user experience that grows with each fertility
          journey and understands each individual user.
        </p>
        <p className="mb-4">
          It’s about more than just seeing data for women like you, it’s also
          about engaging, interacting, and meeting women like you.{" "}
        </p>
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div className="bg-primary" id="faq">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-primary-content">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
