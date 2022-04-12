import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="single-expert flex items-center m-5 p-4 shadow-md rounded-full bg-white">
      <div className=" ml-1 w-1/3 border-4 rounded-full overflow-hidden">
        <img className="w-full" src={img} alt="" />
      </div>
      <p className="ml-12 text-3xl font-bold">{name}</p>
    </div>
  );
};

export default Expert;
