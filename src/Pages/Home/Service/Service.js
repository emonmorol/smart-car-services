import React from "react";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="m-5 overflow-hidden rounded-lg bg-teal-50 shadow-lg">
      <div className="p-3">
        <img className="rounded-lg mx-auto w-full" src={img} alt="" />
        <div className="my-3 ml-2">
          <h1 className="text-2xl font-bold text-gray-700 mb-3 mt-1">{name}</h1>
          <p className="font-base">{description}</p>
          <p className="font-bold text-xl">PRICE : ${price}</p>
        </div>
      </div>
      <button className="bg-teal-300 py-2 font-medium w-full shadow-xl hover:bg-teal-400">
        Book for Service
      </button>
    </div>
  );
};

export default Service;
