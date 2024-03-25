import React from "react";

const Callout = ({ children }) => {
  return (
    <aside className="card bg-secondary p-4 my-10 ml-3 mr-5 shadow-xl">{children}</aside>
  );
};

export default Callout;
