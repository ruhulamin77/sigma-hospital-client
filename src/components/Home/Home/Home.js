import React from "react";
import AboutSigma from "../AboutSigma/AboutSigma";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSigma />

      <Services />
      <Doctors />
      <Footer />
    </div>
  );
};

export default Home;
