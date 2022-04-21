import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="single-expert">
      <div className="p-2 w-1/3 overflow-hidden">
        <img className="w-full" src={img} alt="" />
      </div>
      <p className=" ml-3 text-3xl font-bold">{name}</p>
    </div>
  );
};

export default Expert;
