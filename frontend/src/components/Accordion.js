import React from "react";

const Accordion = ({ items, accordionName }) => {
  return (
    <div className="mx-auto max-w-xl w-full">
      {items.map((item, index) => (
        <div key={index} className={`collapse collapse-arrow bg-base-200 ${index < items.length - 1 ? 'mb-4' : ''}`}>
          <input
            type="radio"
            name={accordionName}
            defaultChecked={item.defaultChecked}
          />
          <div className="collapse-title text-xl font-medium">{item.title}</div>
          <div className="collapse-content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
