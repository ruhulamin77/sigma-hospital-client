import React from "react";
import AboutSigma from "../AboutSigma/AboutSigma";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSigma />
      <ChooseUs/>
      <Services />
      <Doctors />
      <Testimonial />
    </div>
  );
};

export default Home;
