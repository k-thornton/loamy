import React from "react";

const Callout = ({ children }) => {
  return (
    <aside className="card bg-secondary p-4 mb-6 mx-3">{children}</aside>
  );
};

export default Callout;
