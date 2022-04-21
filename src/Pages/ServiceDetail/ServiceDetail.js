import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="h-screen">
      <h2 className="text-4xl font-bold text-center mt-20">
        You are booking{" "}
        <span className="text-teal-500 uppercase">{service.name}</span>
      </h2>
    </div>
  );
};

export default ServiceDetail;
