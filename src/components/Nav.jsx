import React, { useState } from "react";
import { RiNotification3Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoTriangle } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropdown] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <nav className=" bg-gray-800 shadow-md shadow-gray-700">
      {dropDown && (
        <button
          className="absolute top-0 left-0 w-full h-full bg-black opacity-5"
          onClick={() => setDropdown(false)}
        ></button>
      )}
      <div className="container mx-auto px-3 lg:px-0">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center justify-start space-x-8">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4 items-center">
                {/* movies link  */}
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <div className="relative group h-14 flex items-center ">
                  <Link
                    to={"/movies"}
                    className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium "
                  >
                    {" "}
                    Movies
                  </Link>
                  <IoTriangle className="hidden absolute text-white text-xs top-11 left-7 group-hover:block " />
                  <div className=" hidden group-hover:flex absolute top-12 left-[-14px] flex-col p-2 space-y-1 mt-1 rounded-md bg-white w-40 ">
                    <Link
                      to={"/movies/popular"}
                      className="text-gray-600 hover:bg-gray-200 hover:text-black rounded-md px-5 py-2 text-sm font-medium"
                    >
                      Popular
                    </Link>
                    <Link
                      to={"/movies/upcoming"}
                      className="text-gray-600 hover:bg-gray-200 hover:text-black rounded-md px-5 py-2 text-sm font-medium"
                    >
                      Upcoming
                    </Link>
                    <Link
                      to={"/movies/top-rated"}
                      className="text-gray-600 hover:bg-gray-200 hover:text-black rounded-md px-5 py-2 text-sm font-medium"
                    >
                      Top Rated
                    </Link>
                  </div>
                </div>
                {/* tv series link  */}
                <div className="relative group h-14 flex items-center ">
                  <Link
                    to={"/tv-series"}
                    className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium "
                  >
                    {" "}
                    TV Series
                  </Link>
                  <IoTriangle className="hidden absolute text-white text-xs top-11 left-9 group-hover:block " />
                  <div className=" hidden group-hover:flex absolute top-12 left-[-14px] flex-col p-2 space-y-1 mt-1 rounded-md bg-white w-40 ">
                    <Link
                      to={"/tv-series/popular"}
                      className="text-gray-600 hover:bg-gray-200 hover:text-black rounded-md px-5 py-2 text-sm font-medium"
                    >
                      Popular
                    </Link>
                    <Link
                      to={"/tv-series/upcoming"}
                      className="text-gray-600 hover:bg-gray-200 hover:text-black rounded-md px-5 py-2 text-sm font-medium"
                    >
                      Upcoming
                    </Link>
                    <Link
                      to={"/tv-series/top-rated"}
                      className="text-gray-600 hover:bg-gray-200 hover:text-black rounded-md px-5 py-2 text-sm font-medium"
                    >
                      Top Rated
                    </Link>
                  </div>
                </div>
                {/* people link  */}
                <Link
                  to={"/people"}
                  className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium "
                >
                  People
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <form action="">
              <div className="relative">
                <CiSearch className="absolute mt-[9px] ml-3 text-gray-500 text-xl font-extrabold inline-block " />
                <input
                  type="search"
                  value={search}
                  className=" py-2 pl-10 pr-3 bg-gray-700 text-sm 
                   rounded-lg focus:outline-none focus:bg-white w-32 sm:w-80 md:w-96"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
            <button className="hidden lg:block relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <RiNotification3Line className=" h-6 w-6" />
              <span className=" absolute ml-2 -mt-9 bg-violet-600 text-sm text-gray-100 font-semibold px-1 rounded-lg inline-block">
                10
              </span>
            </button>
            <div className="relative hidden lg:block">
              <button
                className=" rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setDropdown(!dropDown)}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
              {dropDown && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-semibold"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-semibold"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-semibold"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
          <button
            className="p-2 rounded-lg text-gray-300 text-2xl lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="container mx-auto divide-y divide-gray-100">
          <div className="space-y-1 px-2 sm:px-0 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"           */}
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </a>
          </div>

          <div className=" pt-3">
            <div className="flex items-center justify-between px-3 py-1">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className=" px-3">
                  <h4 className=" text-base text-gray-200 font-semibold">
                    Tim Cook
                  </h4>
                  <p className=" text-gray-400 text-sm">tom@gmail.com</p>
                </div>
              </div>
              <button className=" relative rounded-full bg-gray-800 p-1 pr-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <RiNotification3Line className=" h-6 w-6" />
                <span className=" absolute ml-2 -mt-9 bg-violet-600 text-sm text-gray-100 font-semibold px-1 rounded-lg inline-block">
                  10
                </span>
              </button>
            </div>
            <div className="space-y-1 px-2 sm:px-0 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"           */}
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
