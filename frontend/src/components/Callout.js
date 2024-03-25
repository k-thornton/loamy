import React from "react";

const Callout = ({ children }) => {
  return (
    <aside className="card bg-secondary p-4 mb-6 ml-3 mr-5">{children}</aside>
  );
};

export default Callout;
