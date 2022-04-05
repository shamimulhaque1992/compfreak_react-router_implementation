import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-center">404 not found</h1>
      <img
        src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png"
        alt=""
      />
      <Link
        className="no-underline bg-cyan-300 px-10 rounded-md py-2 mb-56"
        to="/"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Notfound;
