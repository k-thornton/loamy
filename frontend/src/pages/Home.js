// The home page
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    ><h1>Hello Loamy</h1>
      <Link to="/womenlikeme">
        <button>Go to Survey</button>
      </Link>
    </div>
  );
}

export default Home;
