import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [allServices] = useServices();
  // console.log(allServices);

  return (
    <div id="services">
      <p className="text-4xl font-bold text-center text-cyan-700 mt-14">
        Our Services
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allServices.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
