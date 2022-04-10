import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="flex items-center m-5 p-4 shadow-md rounded-full">
      <div className=" ml-1 w-1/3 border-4 rounded-full overflow-hidden">
        <img className="w-full" src={img} alt="" />
      </div>
      <p className="ml-12 text-3xl font-bold">{name}</p>
    </div>
  );
};

export default Expert;
