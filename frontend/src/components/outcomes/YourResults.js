import ChartCards from "../ChartCards";

const YourResults = ({ myPersona }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold">Your Results</h2>
      <ChartCards myPersona={myPersona} />
      <p>
        These results may still be confusing. That’s why we’ve had conversations
        with reproductive endocrinologists (REI), Chief Medical Officers,
        researchers, international fertility drug pharmacies, acupuncturist,
        nutritionist, fertility and longevity supplement providers, and even a
        neurologic music therapist to make sense of it.
      </p>
    </section>
  );
};

export default YourResults;
