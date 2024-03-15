import React from "react";

const Faq = ({ faqs }) => {
  return (
    <div className="space-y-2 max-w-3xl mb-8">
      {faqs.map((faq, index) => (
        <div key={index} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-small">
            {faq.title}
          </div>
          <div className="collapse-content"> 
            <p>{faq.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
