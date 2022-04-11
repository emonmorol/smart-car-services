import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  // console.log(services);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <p className="text-4xl font-bold text-center text-cyan-700 mt-14">
        Our Services
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
