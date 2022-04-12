import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className="h-screen">
      <h2 className="text-4xl uppercase font-bold text-center mt-20">
        Welcome To Detail {serviceId}
      </h2>
    </div>
  );
};

export default ServiceDetail;
