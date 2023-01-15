import React from "react";
import "./Banner.css";

const BannerItem = ({ slide }) => {
  const { image, prev, next, id } = slide;
  const takeToPage = () => {
    const element = document.getElementById("service");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full  ">
      <div className="img-gradient">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className=" absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
        <h2 className="text-2xl lg:text-6xl md:text-3xl  font-bold text-white ">
          Affordable <br />
          price for Servicing
        </h2>
      </div>
      <div className="border absolute lg:w-1/2  flex justify-end transform -translate-y-1/2 left-24  top-1/2  ">
        <p className="text-sm lg:text-lg  text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>

      <div className="absolute w-3/4  flex justify-start transform -translate-y-1/2 left-24  top-3/4   ">
        <button
          onClick={takeToPage}
          className=" mr-5 btn btn-outline btn-warning"
        >
          SERVICES
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
