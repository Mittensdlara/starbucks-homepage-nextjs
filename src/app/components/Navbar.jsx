import React from "react";
import Image from "next/image";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="mx-5">
      <div className="navbar bg-base-100 p-4 border-b-2 shadow-b shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 font-bold z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>MENU</a>
              </li>
              <li>
                <a>REWARDS</a>
              </li>
              <li>
                <a>GIFT CARDS</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image src={logo} alt="logo" className="w-full h-full " />
          </a>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <a>MENU</a>
            </li>
            <li>
              <a>REWARDS</a>
            </li>
            <li>
              <a>GIFT CARDS</a>
            </li>
          </ul>
        </div>
        <div className="navbar-center space-x-8 hidden lg:flex">
          <a className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
             Find a store
          </a>

          <a href="/signin" className="btn btn-outline">Sign In</a>
          <a className="btn btn-neutral">Join Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
