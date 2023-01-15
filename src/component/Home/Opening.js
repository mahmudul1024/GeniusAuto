import React from "react";
import { FcOvertime } from "react-icons/fc";

const Opening = () => {
  return (
    <div className=" grid lg:grid-cols-3  grid-cols-1   bg-black  text-white lg:mx-32 mx-4  rounded-lg my-20 ">
      <div className="lg:my-20 my-5 flex justify-start items-center   mx-5 ">
        <div>
          {/* icon */}
          <FcOvertime className="text-4xl  text-orange-600 mr-5 "></FcOvertime>
        </div>
        <div>
          <p>We are open monday-friday</p>
          <p className=" text-2xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="lg:my-20 my-5 flex  justify-start  items-center  mx-5">
        <div>
          {/* icon */}
          <FcOvertime className="text-4xl  text-orange-600 mr-5 "></FcOvertime>
        </div>
        <div className="  ">
          <p>Have Questions ?</p>
          <p className=" text-2xl font-bold">+4917630169377</p>
        </div>
      </div>
      <div className="lg:my-20 my-5 flex justify-start items-center  mx-5">
        <div>
          {/* icon */}
          <FcOvertime className="text-4xl  text-orange-600 mr-5 "></FcOvertime>
        </div>
        <div>
          <p>Need a repair? our address</p>
          <p className=" text-2xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Opening;
