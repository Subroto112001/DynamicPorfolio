import React, { useState } from "react";
import { HiOutlineBars3, HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobilenavView, setMobilenavView] = useState(false);
  const navitem = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About Me",
    },
    {
      id: 3,
      name: "Service",
    },
    {
      id: 4,
      name: "Portfolio",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];
  return (
    <div className="bg-[#131212] fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="py-4 flex flex-row items-center justify-between ">
          <Link to={"/"} className="text-xl font-bold  text-white">
            LOGO
          </Link>

          <div className="flex gap-20 items-center">
            <div className=" hidden sm:flex gap-10">
              {navitem.map((item) => (
                <Link
                  key={item.id}
                  to={"/"}
                  className="text-[#959595] font-medium text-[20px] hover:text-[#fd6f00] hover:scale-105   duration-400 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-5 items-center">
              <button className="text-white bg-[#fd6f00] border-2 border-[#fd6f00] hover:bg-white hover:text-[#fd6f00] transition-all duration-500 py-2 px-4 sm:py-3 sm:px-10 rounded-md cursor-pointer hover:scale-105 ">
                HIRE ME
              </button>
              <div
                className="text-[48px] text-white sm:hidden cursor-pointer"
                onClick={() => setMobilenavView(!mobilenavView)}
              >
                <HiOutlineBars3 />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`bg-gray-900 sm:hidden overflow-hidden justify-center items-center-safe flex flex-col gap-3  transition-all duration-500 ease-in-out ${
            mobilenavView ? "max-h-96 py-5" : "max-h-0 py-0"
          }`}
        >
          {navitem.map((item) => (
            <Link
              key={item.id}
              to={"/"}
              className={`text-[#959595] font-medium text-[20px] hover:text-[#fd6f00] hover:scale-105 duration-400 transition-all border-2 w-3/4 flex justify-center py-2 items-center text-center rounded-full transform ${
                mobilenavView
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
