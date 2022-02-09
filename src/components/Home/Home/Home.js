import React from "react";
import AboutSigma from "../AboutSigma/AboutSigma";
import ChooseUs from "../ChooseUs/ChooseUs";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <AboutSigma />
      <ChooseUs/>
      <Services />
      <Doctors />
    </div>
  );
};

export default Home;
