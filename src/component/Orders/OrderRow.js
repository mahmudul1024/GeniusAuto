import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatus }) => {
  const { _id, serviceName, price, service, customer, phone, message, status } =
    order;
  const [serviceOrder, setServiceOrder] = useState({});

  useEffect(() => {
    fetch(`https://genious-auto-server2.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceOrder(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {serviceOrder?.img && (
                <img
                  src={serviceOrder.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{message}</td>
      <th>
        <button
          onClick={() => handleStatus(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
