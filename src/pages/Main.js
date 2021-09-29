import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutSection from "../components/aboutSection/AboutSection";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Main;
