import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Experts from "../Experts/Experts";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Banner />
      <Services />
      <Experts />
    </div>
  );
};

export default Home;
