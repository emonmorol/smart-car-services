import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="h-screen">
      <Helmet>
        <title>About - Smart Car Services</title>
      </Helmet>
      <h1 className="text-5xl font-extrabold text-center text-indigo-500">
        This Page Contains About Info
      </h1>
    </div>
  );
};

export default About;
