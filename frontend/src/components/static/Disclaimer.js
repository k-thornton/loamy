import React from 'react';

const Disclaimer = () => {
  return (
    <div className="text-neutral-700 p-4">
      <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
      <p className="mb-4 text">
        This tool is provided for <strong>educational and informational purposes only</strong> and does not constitute providing medical advice or professional services. The information you enter is used to estimate your chances of success. These estimates may not reflect your actual rates of success during treatment but represent an expectation of outcomes from women like you.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Important Consideration:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Estimates May Vary: The estimates provided are less reliable at certain ranges/values of age, diagnosis, Antral Follicle counts (AFC), and Anti-Mullerian Hormone (AMH) levels.</li>
        <li>Consult Professionals: It's crucial to <strong>see your doctor and/or healthcare provider</strong> for a personalized treatment plan that is best suited for you.</li>
      </ul>
    </div>
  );
};

export default Disclaimer;
