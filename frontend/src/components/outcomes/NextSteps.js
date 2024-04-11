import React from "react";
import Callout from "../Callout";

const NextSteps = ({ myPersona }) => {
  return (
    <section className="mb-10">
      <h2 id="nextSteps" className="text-2xl font-bold mb-4">
      Your Next Steps
      </h2>
      <p className="mb-4 text">
        There's a considerable amount of misleading information online about
        fertility, with some sources suggesting simplistic solutions like "just
        relax" or take a specific supplement to miraculously boost fertility.
      </p>
      <p className="mb-4 text">
        Fortunately, there's substantial research focused on behavior
        modifications that can genuinely enhance fertility—though these findings
        are frequently overshadowed by the noisy fertility wellness influencer
        industry. Based on the literature, here's what we recommend:
      </p>
      <h2 id="nextSteps" className="text-xl font-bold mt-6 mb-4">
        Women like you have used...
      </h2>
      <h2 id="fertilityConsulting" className="text-l font-bold mb-4">
        Data-Driven Fertility Consulting
      </h2>
      <p className="mb-4 text">
        Before visiting an IVF clinic or even after your first IVF attempt,
        consider exploring data-driven, science-backed fertility consultants.
        These organizations focus on evidence-based approaches and may address
        some root causes of infertility. Our top recommendations include{" "}
        <a className="link" href="https://fertilitypregnancy.org/protocol/">
          The Fertility and Pregnancy Institute
        </a>{" "}
        and <a className="link" href="https://go.denovofertility.com/guide?am_id=shaundra565">Denovo Fertility</a>, both
        known for their commitment to research and results.
      </p>
      <Callout>
        <h3 className="font-semibold mb-4">
          🏆 Denovo Fertility is a functional medicine program using self-paced
          and group coaching programs that has been found to help patients who
          have been told IVF is their only option. Their specialties:
        </h3>
        <ul className="list-none space-y-2 mb-4">
          <li>
            Nutrition, sleep enhancement, exercise modulation, lifestyle
            modification, and stress management.
          </li>
          <li>
            Emotional processing, relationship wellness, communication and
            conflict resolution, hypnotherapy, biofeedback, and nervous system
            regulation.
          </li>
          <li>
            Hormonal balance through autonomic nervous system regulation to help
            clients improve their fertility, as well as improve egg and sperm
            health.
          </li>
          <li>
            Hormone monitoring throughout the menstrual cycles to confirm
            ovulation utilizing urine metabolite measurements for progesterone,
            estrogen, and LH through an FDA-approved home lab device.
          </li>
          <li>
            Pharmaceutical-grade supplement line customized for male-factor and
            female-factor infertility types.
          </li>
        </ul>
        {myPersona.goal === 'ivf' && (
        <>
          <p className="mb-4 text">
          👉{" "}
            <strong>Consider, the 12-Week VIP Program or 12-Week CORE Plus Program 
              from <a className="link" href="https://go.denovofertility.com/guide?am_id=shaundra565">Denovo</a>. It 
              has been found to have an 85% success rate, even for patients with extensive 
              fertility struggles or failed IVF cycles. </strong>
          </p>
        </>
      )}
      {myPersona.goal === 'embryo' && (
        <>
          <p className="mb-4 text">
          👉{" "}
            <strong>Consider, the 12-Week VIP Program or 12-Week CORE Plus Program 
              from <a className="link" href="https://go.denovofertility.com/guide?am_id=shaundra565">Denovo</a> when 
              thinking about conception, IVF, or embryo freezing. It has been found to have an 85% success rate,
               even for patients with extensive fertility struggles or failed IVF cycles. </strong>
          </p>
        </>
      )}
      {myPersona.goal === 'egg' && (
        <>
          <p className="mb-4 text">
          👉{" "}
              <strong>Consider, the 12-Week CORE Plus Program 
              from <a className="link" href="https://go.denovofertility.com/guide?am_id=shaundra565">Denovo</a> in preperation 
              for your egg freezing cycle. It has been found to have an 85% success rate,
               even for patients with extensive fertility struggles. </strong>
          </p>
          <p className="mb-4 text">
              <strong>Tip: </strong>Mention you are egg freezing. Denovo will allow you to join their CORE Plus 
              Program without the male component to save money.
          </p>
        </>
      )}
      {myPersona.goal === 'electiveEgg' && (
        <>
          <p className="mb-4 text">
          👉{" "}
              <strong>Consider, the Core Plus Dynamic Egg program
              from <a className="link" href="https://go.denovofertility.com/guide?am_id=shaundra565">Denovo</a> in preperation 
              for your egg freezing cycle. It has been found to have an 85% success rate,
               even for patients with extensive fertility struggles. </strong>
          </p>
        </>
      )}
      {myPersona.goal === 'learn' && (
        <>
          <p className="mb-4 text">
          👉{" "}
              <strong>Consider, the  the Baby Basics Program 
              from <a className="link" href="https://go.denovofertility.com/guide?am_id=shaundra565">Denovo</a> for 
              optimizing your health and fertility. </strong>
          </p>
        </>
      )}
      </Callout>

      <h2 id="mindfulness" className="text-l font-bold mb-4">
        Mental Health & Mindfulness
      </h2>
      <p className="mb-4 text">
        Research indicates a link between stress and fertility outcomes. A study found that
        women with higher levels of alpha-amylase, a stress biomarker,
        experienced a 29% decrease in fecundity (resulting in a longer time to
        pregnancy) and were over twice as likely to face infertility compared to
        women with lower levels of this biomarker. You may find practices like meditation, 
        breathwork on a guided app, or visualization to be helpful in reducing stress. 
      </p>
      <p className="mb-4 text">
      Guided visualization is a mind-body practice wherein you evoke all your senses to 
      experience something in your mind. Olympic athletes use this technique to imagine their 
      race and cancer patients use it before treatment to mentally prepare. This can help control 
      your emotions, physiology, and reduce stress-induced cortisol levels. You can start on 
      YouTube with fertility meditations and if you want to upgrade your practice, <a className="link" href="hhttps://circlebloom.com/shop/?ref=20393">Circle & Bloom</a> offers 
      a series of guided visualization curated for your specific fertility journey. 
      </p>
      <p className="mb-4 text">
        Seeking a trustworthy therapist familiar with infertility, engaging your
        partner or community groups for support, and considering integrative
        therapies such as acupuncture or massage are all viable options.
      </p>

      <h2 id="supplements" className="text-l font-bold mb-4">
        Supplements
      </h2>
      <p className="mb-4 text">
        The human body optimally absorbs vitamins and minerals from food, but
        supplements can help bridge nutritional gaps missing from your diet when
        used appropriately. Here are our recommendations:
      </p>
      <Callout>
        <h3 className="font-semibold mb-4">🏆 Our Top Picks:</h3>
        <p className="mb-4 text">
          <strong>
            Top pick for men and women to support overall fertility:
          </strong>{" "}
          <a className="link" href="https://amzn.to/3vN5qre">Ritual Prenatal vitamin (Includes Choline and Folate/Folic acid)</a>
        </p>
        <p className="mb-4 text">
          <strong>Top pick for men and women over 35:</strong> <a className="link" href="https://amzn.to/4cDVQHz">
            Natalist Coenzyme Q10 (CoQ10)</a>
        </p>
        <p className="mb-4 text">
          <strong>Supplements just for women with DOR (not recommended for women who have a history of hormonal cancer 
            or estrogen-sensitive conditions like endometriosis or PCOS):</strong>{" "}
          <a className="link" href="https://amzn.to/3VQxapg"> Fertility Nutraceuticals Dehydroepiandrosterone (DHEA)</a>
        </p>
        <p className="mb-4 text">
          <strong>Supplements for women with PCOS:</strong> <a className="link" href="https://amzn.to/4czLgkS">Wholesome Story Myoinositol;
          Corrects the LH/FSH ratio</a> 
        </p>
        <p className="mb-4 text">
          <strong>
            Supplement for men with low sperm count, motility, volume:
          </strong>{" "}
          <a className="link" href="https://amzn.to/3vJuoHW">Fertility Dad with Ashwangandha</a>
        </p>
        <p className="mb-4 text">
          <strong>
            Supplement for men with low sperm count, concentration,
            motility, and ejaculate volume:
          </strong>{" "}
          <a className="link" href="https://amzn.to/4as1gUz">Wholesome Story male Supplement with Lycopene </a>
        </p>
        <p className="mb-4 text">
          Vitamin D is recommended for both men and women if you're Vitamin D
          deficient, which affects 40% of the population. Antioxidants like
          Vitamin C and E and Selenium may also help support healthy sperm
          count, motility, and morphology.
        </p>
        <p className="mb-4 text">
          👉{" "}
          <strong>
            Top pick for medical-grade, third-party tested supplements:
          </strong>{" "}
          <a className="link" href="https://fertilitypregnancy.org/protocol/">
            The Fertility and Pregnancy Institute
          </a>
        </p>
      </Callout>
      <h2 id="acupuncture" className="text-l font-bold mb-4">
        Acupuncture & Massage
      </h2>
      <p className="mb-4 text">
        At the very least, we see acupuncture as an excellent mindfulness
        practice to alleviate stress during fertility treatments.
      </p>
      <p className="mb-4 text">
        A meta-analysis reviewed the effectiveness of acupuncture as a
        complementary therapy for diminished ovarian response (DOR) by examining
        seven randomized controlled trials involving 516 women. Although the
        overall quality of these studies was generally low, the results suggest
        that acupuncture, in conjunction with controlled ovarian
        hyperstimulation (stims therapy), can significantly increase the number
        of retrieved oocytes, enhance endometrium thickness, and increase the
        antral follicle count. Furthermore, acupuncture was observed to reduce
        follicle-stimulating hormone (FSH) levels and raise estradiol levels,
        indicating its potential to improve ovarian function in DOR patients.
      </p>
      <p className="mb-4 text">
        Despite the rarity of clinical studies on Western medicine interventions
        like acupuncture in well-known, mainstream medical journals, many women
        undergoing egg/embryo freezing report finding these treatments to be
        stress-reducing and beneficial to their journey. If your interested in 
        exploring acupuncture further, a resource with over <a className="link" href="https://directory.nccaom.org/">21,000 National Board-Certified 
        Acupuncturists</a> is available for reference. Look for a practice that focuses 
        specifically on fertility and you can always cross-reference with 
        referrals from friends or your reproductive endocrinologist.
      </p>
      {myPersona.local && (
        <>
          <p className="mb-4 text">
            <strong>Our top recommendation for acupuncture in Boston:</strong>{" "}
            <a className="link" href="https://yintuitionwellness.com/">Yintuition</a>.
          </p>
        </>
      )}
      <p className="mb-4 text">
      Other integrative practices women have used include cupping, acupressure, and massage. Massage is a 
      complementary approach to treatment through safe and compassionate touch. Often studied and used as an 
      approach to relieve pain in cancer patients, we see this as a viable option for both infertility and onco-fertility patients.
      </p>
      {myPersona.local && (
        <>
          <p className="mb-4 text">
            <strong>Our top recommendation for massage and lymphedema therapy in Boston:</strong>{" "}
            <a className="link" href="https://www.sacredhealingbodyworks.com/">Sacred Healing Bodyworks</a>.
          </p>
        </>
      )}
      <h2 id="lifestyle" className="text-l font-bold mb-4">
        Lifestyle
      </h2>
      <p className="mb-4 text">
        To maximize your fertility treatment outcomes, a great initial step is
        to assess your lifestyle habits and identify potential adjustments.
      </p>
      <Callout>
        <p className="mb-4 text">
          💡 <strong>Behavior Modifications to Enhance Fertility:</strong>
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li>
            <strong>Sleep:</strong> Aim for 6-8 hours per night.
          </li>
          <li>
            <strong>Diet:</strong> Follow a Mediterranean diet, which emphasizes
            fish, poultry, whole grains, fruits, vegetables, healthy fats, and
            minimal processed snacks.
          </li>
          <li>
            <strong>Exercise:</strong> Engage in moderate physical activity.
          </li>
          <li>
            <strong>Sun Exposure:</strong> Spend time outdoors to naturally
            boost vitamin D levels.
          </li>
        </ul>
        </Callout>
        <Callout>
        <p className="mb-4 text">
          💡 <strong>Lifestyle Factors to Avoid for Better Fertility:</strong>
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li>
            <strong>Substances:</strong> Avoid smoking, recreational drugs, THC,
            and alcohol.
          </li>
          <li>
            <strong>Beauty Products:</strong> Be cautious with injectables (like
            Botox), salicylic acid in skincare, retinoids, phthalates & parabens
            (found in perfumes, nail polish, and cosmetics), and formaldehyde in
            eyelash glue.
          </li>
          <li>
            <strong>Medications:</strong> SSRIs during pregnancy should be
            avoided unless no alternative exists—consult your doctor before
            making any changes to your medication plan.
          </li>
          <li>
            <strong>Heat Exposure:</strong> Stay away from saunas, hot tubs,
            devices with hot batteries (like laptops), keeping phones in
            pockets, heated car seats, and extensive cycling (especially for
            men!).
          </li>
          <li>
            <strong>Diet:</strong> Limit intake of soda and artificially
            sweetened beverages.
          </li>
          <li>
            <strong>Caffeine:</strong> Reduce excessive caffeine consumption.
          </li>
          <li>
            <strong>Steroids:</strong> Avoid steroid use.
          </li>
        </ul>
      </Callout>
          <h2 id="savingMoney" className="text-l font-bold mb-4">
            Saving Money
          </h2>
          <p className="mb-4 text">
            We hope these evidence-based suggestions have been useful in
            identifying ways to enhance your fertility. The journey toward
            preserving your fertility or trying to conceive should be filled
            with hope and empowerment, rather than being marred by the weight of
            decision-making and high costs.
          </p>
          <Callout>
            <p className="mb-4 text">
              💡{" "}
              <strong>Cost-Saving Tips from Women Who Have Been There:</strong>
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li>
                <strong>Tip 1: Compare medication prices</strong> - Some
                pharmacies specialize in specific fertility drugs and offer
                significant discounts. Pharmacies such as Mandell's, Kings,
                Alto, Freedom, Encompass, and Village Pharmacy are known for
                drugs like Gonal F and Cetrotide. Meanwhile, MDR and Apthorp are
                preferred for Follistim and Ganirelix. These drugs are
                therapeutic equivalents, and you have the freedom to compare
                prices across pharmacies. The cost difference can be
                substantial, with one pharmacy charging $7,000 and another
                nearby offering nearly half that price.
              </li>
              <li>
                <strong>
                  Tip 2: Avoid buying all your medications at once
                </strong>{" "}
                - Rather than purchasing all your medications upfront based on
                your provider's recommendations, take a more calculated
                approach. It's common for patients to end up with excess
                medication.
              </li>
              <li>
                <strong>Tip 3: Consider international pharmacies</strong> -
                You're entitled to fill your prescription at any pharmacy,
                including international pharmacies, regardless of your insurance
                company's preferred providers. Our top recommendation is{" "}
                <a className="link" href="https://www.ivfpharmacy.com/">IVF Pharmacy</a>, who has
                been in business the last 20 years selling medication at up to
                70% discount. These drugs come from Europe, where IVF drug
                prices are much cheaper than in the U.S, and all from brand name
                manufacturers.
              </li>
              {myPersona.goal === "ivf" && (
        
              <li>
                <strong>Tip 4: Research IVF add-ons</strong> -
                Despite the common application of ICSI (Intracytoplasmic Sperm
                Injection), research indicates that in situations lacking
                male-factor infertility, the fertilization rates with ICSI are
                similar to those without it. So, if ICSI is suggested in your
                treatment protocol, it's important to ask your healthcare
                provider about its necessity. Knowing why it's being recommended
                can assist you in making informed choices, possibly helping you
                avoid unnecessary costs.
              </li>)}
            </ul>
          </Callout>
    </section>
  );
};

export default NextSteps;
