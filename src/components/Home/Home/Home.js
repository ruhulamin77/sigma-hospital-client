import React from "react";
import AboutSigma from "../AboutSigma/AboutSigma";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";
import Header from "../../Share/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutSigma />

      <Services />
      <Doctors />
      <Footer />
    </div>
  );
};

export default Home;
