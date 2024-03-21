import React from "react";
import ChartCards from "../ChartCards";
import ReadMore from "../ReadMore";
import Methodology from "./Methodology";
import LabValues from "./LabValues";
import Heading from "./Heading";
import YourResults from "./YourResults";

const HereToLearn = ({ myPersona }) => {
  return (
    <div className="p-5">
      <div className="container mx-auto">
        <Heading />
        <section className="mb-10">
          <p>
            You may have found yourself leaving a few questions blank or
            encountering some that made no sense at all. Not to worry - we're
            here to help!
          </p>
          <p>
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
          <p>
            This is precisely why we're developing Loamy - to bridge the
            knowledge gap in women's health and provide clear fertility
            expectations for individuals like you.
          </p>
        </section>

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
          <p>
            While IVF or egg freezing might not be immediate considerations for
            you, and perhaps they never will be, we view all women as the Chief
            Fertility Officers of their households. If it matches your goals, a
            valuable initial step is to become acquainted with your reproductive
            baseline, lab levels, and overall fertility health.
          </p>
          {/* Fertility Journey Visualization and Steps */}
          <div className="mb-6">
            <img
              src="https://prod-files-secure.s3.us-west-2.amazonaws.com/d9c90e86-62c5-4f94-97fb-63692e9f5292/7851c0b4-3ec0-416e-a81a-966e715ca6db/IVF_step_by_step.png"
              alt="IVF Step by Step"
              className="mb-4"
            />
            <p>
              The fertility journey involves a series of sequential decisions.
              Due to the limited number of providers—around 1,300 reproductive
              endocrinologists for 30 million women—most of these decisions are
              made by you, the patient.
            </p>
            {/* Additional content related to the fertility journey and steps can be added here */}
          </div>
        </section>

        {/* Your Next Steps Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Your Next Steps</h2>
          <p>
            There's a considerable amount of misleading information online about
            fertility, with some sources suggesting simplistic solutions like
            "just relax" or take a specific supplement to miraculously boost
            fertility.
          </p>
          {/* insights can be added here */}
        </section>

        {/* Conclusion Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>
            We hope this information and the recommendations provided help
            address three important questions for you:
          </p>
          <ol className="list-decimal list-inside">
            <li>What results can I expect?</li>
            <li>How can I optimize my overall fertility?</li>
            <li>What should I do next?</li>
          </ol>
          <p>
            If becoming a mother (or father) is your goal, remember that there
            are multiple paths to achieve it. Recognizing that you are not
            limited to one narrative can be liberating. Options like IVF,
            adoption, and third-party reproduction/surrogacy offer different
            avenues that you can assess based on your age, health, genetic
            background, and financial circumstances.
          </p>
          <p>
            The good news is that you have a range of options to consider and
            the freedom to decide your reproductive future.
          </p>
        </section>

        {/* Sources Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Sources</h2>
          <div className="overflow-auto h-64">
            {/* Source list items */}
            <ul className="list-disc list-inside">
              <li>
                Ahmadi, S., Bashiri, R., Ghadiri-Anari, A., & Nadjarzadeh, A.
                (2016). Antioxidant supplements and semen parameters: An
                evidence based review.{" "}
                <em>International journal of reproductive biomedicine</em>,{" "}
                <em>14</em>(12), 729–736.
              </li>
              <li>
                Balk, J., Catov, J., Horn, B., Gecsi, K., & Wakim, A. (2010).
                The relationship between perceived stress, acupuncture, and
                pregnancy rates among IVF patients: a pilot study.{" "}
                <em>Complementary therapies in clinical practice</em>,{" "}
                <em>16</em>(3), 154–157.
                https://doi.org/10.1016/j.ctcp.2009.11.004
              </li>
              <li>
                Ben-Meir, A., Burstein, E., Borrego-Alvarez, A., Chong, J.,
                Wong, E., Yavorska, T., Naranian, T., Chi, M., Wang, Y., Bentov,
                Y., Alexis, J., Meriano, J., Sung, H.-K., Gasser, D. L., Moley,
                K. H., Hekimi, S., Casper, R. F., & Jurisicova, A. (2015).
                Coenzyme Q10 restores oocyte mitochondrial function and
                fertility during reproductive aging. <em>Aging Cell</em>,{" "}
                <em>14</em>(5), 887–895. https://doi.org/10.1111/acel.12368
              </li>
              <li>
                El Osta, R., Almont, T., Diligent, C., Hubert, N., Eschwège, P.,
                & Hubert, J. (2016). Anabolic steroids abuse and male
                infertility. <em>Basic and clinical andrology</em>, <em>26</em>,
                2. https://doi.org/10.1186/s12610-016-0029-4
              </li>
              <li>
                Fertility, C. N. Y. (n.d.). Fertility Supplements & Vitamins: An
                Evidence Based Review.
                https://www.cnyfertility.com/fertility-supplements/
              </li>
              <li>
                Hart, R. J. (2023). Nutritional supplements and IVF: an evidence
                based approach. <em>Reproductive Biomedicine Online</em>,
                103770–103770. https://doi.org/10.1016/j.rbmo.2023.103770
              </li>
              <li>
                Intracytoplasmic sperm injection (ICSI) for non–male factor
                indications: a committee opinion. (2020).{" "}
                <em>Fertility and Sterility</em>, <em>114</em>(2), 239–245.
                https://doi.org/10.1016/j.fertnstert.2020.05.032
              </li>
              <li>
                Jackson, G. (2019, November 13). The female problem: how male
                bias in medical trials ruined women’s health.{" "}
                <em>The Guardian</em>.
                https://www.theguardian.com/lifeandstyle/2019/nov/13/the-female-problem-male-bias-in-medical-trials
              </li>
              <li>
                Jain, M., & Singh, M. (2022). Environmental Toxins And
                Infertility. PubMed; StatPearls Publishing.
                https://www.ncbi.nlm.nih.gov/books/NBK576379/
              </li>
              <li>
                Jung, A., Strauss, P., Lindner, H.-J., & Schuppe, H.-C. (2008).
                Influence of heating car seats on scrotal temperature.{" "}
                <em>Fertility and Sterility</em>, <em>90</em>(2), 335–339.
                https://doi.org/10.1016/j.fertnstert.2007.06.053
              </li>
              <li>
                Kamenov, Z., & Gateva, A. (2020). Inositols in PCOS.{" "}
                <em>Molecules (Basel, Switzerland)</em>, <em>25</em>(23), 5566.
                https://doi.org/10.3390/molecules25235566
              </li>
              <li>
                Lateef, O. M., & Akintubosun, M. O. (2020). Sleep and
                Reproductive Health. <em>Journal of circadian rhythms</em>,{" "}
                <em>18</em>, 1. https://doi.org/10.5334/jcr.190
              </li>
              <li>
                Lynch, C. D., Sundaram, R., Maisog, J. M., Sweeney, A. M., &
                Buck Louis, G. M. (2014). Preconception stress increases the
                risk of infertility: results from a couple-based prospective
                cohort study--the LIFE study.{" "}
                <em>Human reproduction (Oxford, England)</em>, <em>29</em>(5),
                1067–1075. https://doi.org/10.1093/humrep/deu032
              </li>
              <li>
                Milosavljević, J. Z., Milosavljević, M. N., Arsenijević, P. S.,
                Milentijević, M. N., & Stefanović, S. M. (2022). The effects of
                selective serotonin reuptake inhibitors on male and female
                fertility: a brief literature review.{" "}
                <em>
                  International journal of psychiatry in clinical practice
                </em>
                , <em>26</em>(1), 43–49.
                https://doi.org/10.1080/13651501.2021.1872647
              </li>
              <li>
                Ricci, E., Viganò, P., Cipriani, S., Somigliana, E.,
                Chiaffarino, F., Bulfoni, A., & Parazzini, F. (2017). Coffee and
                caffeine intake and male infertility: a systematic review.{" "}
                <em>Nutrition journal</em>, <em>16</em>(1), 37.
                https://doi.org/10.1186/s12937-017-0257-2
              </li>
              <li>
                Schrock, L. (2023). <em>Fertility Rules</em>. Simon and
                Schuster.
              </li>
              <li>
                Setti, A. S., Braga, D. P. A. F., Halpern, G., Figueira, R. C.
                S., Iaconelli, A., Jr, & Borges, E., Jr (2018). Is there an
                association between artificial sweetener consumption and
                assisted reproduction outcomes?.{" "}
                <em>Reproductive biomedicine online</em>, <em>36</em>(2),
                145–153. https://doi.org/10.1016/j.rbmo.2017.11.004
              </li>
              <li>
                Vujkovic, M., de Vries, J. H., Lindemans, J., Macklon, N. S.,
                van der Spek, P. J., Steegers, E. A. P., & Steegers-Theunissen,
                R. P. M. (2010). The preconception Mediterranean dietary pattern
                in couples undergoing in vitro fertilization/intracytoplasmic
                sperm injection treatment increases the chance of pregnancy.{" "}
                <em>Fertility and Sterility</em>, <em>94</em>(6), 2096–2101.
                https://doi.org/10.1016/j.fertnstert.2009.12.079
              </li>
              <li>
                Wang, R. R., Su, M. H., Liu, L. Y., Lai, Y. Y., Guo, X. L., Gan,
                D., Zheng, X. Y., Yang, H., Yu, S. Y., Liang, F. R., Wei, W.,
                Zhong, Y., & Yang, J. (2023). Systematic review of acupuncture
                to improve ovarian function in women with poor ovarian response.{" "}
                <em>Frontiers in endocrinology</em>, <em>14</em>, 1028853.
                https://doi.org/10.3389/fendo.2023.1028853
              </li>
              <li>
                Xu, L., Hu, C., Liu, Q., & Li, Y. (2019). The Effect of
                Dehydroepiandrosterone (DHEA) Supplementation on IVF or ICSI: A
                Meta-Analysis of Randomized Controlled Trials.{" "}
                <em>Geburtshilfe und Frauenheilkunde</em>, <em>79</em>(7),
                705–712. https://doi.org/10.1055/a-0882-3791
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HereToLearn;
