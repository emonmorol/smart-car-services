import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../Hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div className="flex justify-center flex-col pb-1/2">
      <h2 className="text-4xl font-bold text-center mt-20">
        You are booking{" "}
        <span className="text-teal-500 uppercase">{service.name}</span>
      </h2>
      <Link
        className="text-decoration-none mx-auto bg-black text-gray-200 font-medium py-2 uppercase px-5 rounded-xl"
        to={`/checkout/${serviceId}`}
      >
        Proceed Checkout
      </Link>
    </div>
  );
};

export default ServiceDetail;
