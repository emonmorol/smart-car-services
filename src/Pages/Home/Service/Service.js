import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, price, description, id } = service;
  const navigate = useNavigate();

  const handleServiceDetailNavigation = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="single-service m-3 lg:m-5 overflow-hidden rounded-lg">
      <div className="p-1">
        <img className="rounded-lg mx-auto w-full" src={img} alt="" />
        <div className="my-3 ml-2">
          <h1 className="text-2xl font-bold text-gray-700 mb-3 mt-1">{name}</h1>
          <p className="font-base">{description}</p>
          <p className="font-bold text-xl">PRICE : ${price}</p>
        </div>
      </div>
      <button
        onClick={() => handleServiceDetailNavigation(id)}
        className="bg-teal-300 py-2 font-medium w-full shadow-xl hover:bg-teal-400"
      >
        Book for Service
      </button>
    </div>
  );
};

export default Service;
