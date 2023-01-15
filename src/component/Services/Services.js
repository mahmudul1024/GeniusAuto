import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genious-auto-server2.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div id="service" className="text-center mb-4">
        <p className="text-xl font-bold text-orange-600 ">Service</p>
        <p className=" font-bold  text-5xl">Our Service Area</p>
        <p className="text-xl w-3/4 mx-auto py-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className=" text-center my-14  ">
        <button className=" btn btn-outline  text-orange-600">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
