import React from "react";
import AboutSigma from "../AboutSigma/AboutSigma";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Doctors from "../Doctors/Doctors";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Header from "../../Share/Header/Header";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSigma />
      <ChooseUs/>
      <Services />
      <Doctors />
    </div>
  );
};

export default Home;
