import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  {
    id: 1,
    name: "Labib Morol",
    img: expert1,
  },
  {
    id: 2,
    name: "Emon Morol",
    img: expert2,
  },
  {
    id: 3,
    name: "Rupom Morol",
    img: expert3,
  },
  {
    id: 4,
    name: "Rukon Morol",
    img: expert4,
  },
  {
    id: 5,
    name: "Kawsar Morol",
    img: expert5,
  },
  {
    id: 6,
    name: "Rimon Morol",
    img: expert6,
  },
];

const Experts = () => {
  return (
    <div id="experts">
      <h1 className="text-4xl font-bold text-center text-cyan-700">
        Our Experts
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
