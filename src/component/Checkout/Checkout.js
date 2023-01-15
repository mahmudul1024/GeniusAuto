import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Firebase/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(authContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstname.value} ${form.lastname.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("https://genious-auto-server2.vercel.app/orders", {
      method: "POST",

      headers: {
        "content-type": "application/json",
        authorization: ` Bearer ${localStorage.getItem("genius-token")} `,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("order received");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  //   if(phone.length>10){
  //     alert('Phone number should be 10 character or longer')

  //   }
  //   else{

  //   }

  return (
    <form onSubmit={handleOrder}>
      <h2 className="text-4xl">You are about to order : {title}</h2>
      <h4 className="3xl">Price : {price}</h4>
      <div className="grid  lg:grid-cols-2 grid-cols-1 gap-4">
        <input
          name="firstname"
          type="text"
          placeholder="First name "
          className="input input-ghost w-full  input-bordered"
        />
        <input
          name="lastname"
          type="text"
          placeholder="your last name"
          className="input input-ghost w-full input-bordered "
        />
        <input
          name="email"
          type="email"
          placeholder="your email"
          defaultValue={user?.email}
          readOnly
          className="input input-ghost w-full input-bordered"
        />
        <input
          name="phone"
          type="tel"
          placeholder="your phone"
          required
          className="input input-ghost w-full  input-bordered"
        />
      </div>
      <textarea
        name="message"
        required
        className="textarea textarea-warning h-24 w-full"
        placeholder="Your message"
      ></textarea>
      <input className="btn" type="submit" value="Place your Order" />
    </form>
  );
};

export default Checkout;
