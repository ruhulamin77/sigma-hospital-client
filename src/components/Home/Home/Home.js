import React from "react";
import AboutSigma from "../AboutSigma/AboutSigma";
import Footer from "../Footer/Footer";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <AboutSigma />
      
      <Services />
      <Doctors />
      <Footer />
    </div>
  );
};

export default Home;
