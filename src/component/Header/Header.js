import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { authContext } from "../Firebase/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(authContext);

  const handleLogOut = () => {
    logout().then().catch();
  };

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      {user?.email ? (
        <>
          <li className=" font-semibold">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="font-semibold">
            <Link onClick={handleLogOut} to="/">
              Logout
            </Link>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar sticky top-0 left-0 z-10 bg-slate-500  text-white     font-googleFont2">
      <div className="navbar-start  text-slate-700">
        <div className="dropdown ">
          <label
            onClick={() => setIsOpen(!isOpen)}
            tabIndex={isOpen === true ? "" : "1"}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="  normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appontment</button>{" "}
      </div>
    </div>
  );
};

export default Header;
