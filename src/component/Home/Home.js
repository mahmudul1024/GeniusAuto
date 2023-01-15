import React from "react";
import Services from "../Services/Services";
import About from "./About";
import Banner from "./Banner";
import FindUs from "./FindUs";
import Opening from "./Opening";

const Home = () => {
  return (
    <div className="font-googleFont2 ">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <FindUs></FindUs>
      <Opening></Opening>
    </div>
  );
};

export default Home;
