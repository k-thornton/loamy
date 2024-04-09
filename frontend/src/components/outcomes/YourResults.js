import ChartCards from "../ChartCards";

const YourResults = ({ myPersona }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Your Results</h2>
      <p className="mb-4 text">
      While a live birth technically only requires one normal embryo, your 
      chance of success is improved with a sufficient egg bank collected. 
      Only a fraction of eggs retrieved become mature eggs (60-80%), a 
      fraction of these fertilize (70-80%), a fraction become day 5 embryos 
      (30-50%), and only a fraction may be tested normal.  
      </p>
      <p className="mb-4 text">
      As a result, people tend to aim for 10-12 mature eggs per cycle in order to develop at 
      least one normal embryo for implementation. 
      </p>
      <p className="mb-4 text">
      Below we show the % of women like you with the following ranges of outcomes.
      </p>
      <ChartCards myPersona={myPersona} />
      <p className="mb-4 text">
        These results may still be confusing. That’s why we’ve had conversations
        with reproductive endocrinologists (REI), Chief Medical Officers,
        researchers, international fertility drug pharmacies, acupuncturist,
        nutritionist, fertility and longevity supplement providers, and even a
        neurologic music therapist to make sense of it.
      </p>
      <p className="mb-4 text">
      Continue reading for more context on your results or skip straight to <a className="link "href="#nextSteps">Your Next Steps</a> with recommendations 
      for products and services to optimize your journey.
      </p>
    </section>
  );
};

export default YourResults;
