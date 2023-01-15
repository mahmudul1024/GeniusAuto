import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card  shadow-xl bg-orange-100 ">
      <figure className="">
        <img
          src={img}
          style={{
            height: "200px",
            borderRadius: "12px",
            margin: "10px",
            width: "100%",
          }}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p>{title}</p>
        <p className="text-2xl font-semibold text-orange-600">${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
