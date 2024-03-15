import React from "react";

const Faq = ({ faqs }) => {
  return (
    <div className="space-y-2 max-w-xl">
      {faqs.map((faq, index) => (
        <div key={index} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-medium">
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
