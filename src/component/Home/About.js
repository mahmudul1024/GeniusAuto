import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className=" w-4/5 h-full rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="absolute top-1/2 right-5 h-3/5 border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="text-2xl text-orange-600 font-bold">About Us</p>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold my-5">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
