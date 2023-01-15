import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Firebase/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logout } = useContext(authContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://genious-auto-server2.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: ` Bearer ${localStorage.getItem("genius-token")} `,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logout();
        }

        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to proceed?");
    if (proceed) {
      fetch(`https://genious-auto-server2.vercel.app/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: ` Bearer ${localStorage.getItem("genius-token")} `,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("dleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatus = (id) => {
    fetch(`https://genious-auto-server2.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: ` Bearer ${localStorage.getItem("genius-token")} `,
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approoving = orders.find((odr) => odr._id === id);
          approoving.status = "Approved";
          const newOrders = [approoving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl">you have ordered {orders.length} items</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatus={handleStatus}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
