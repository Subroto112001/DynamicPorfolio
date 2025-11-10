import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import shadow1 from "../assets/Shadow1.png";
import profile from "../assets/Profile.png";
const SelfPresentation = () => {
  const iconItem = [
    {
      id: 1,
      icon: <FaFacebook />,
    },
    {
      id: 2,
      icon: <FaInstagramSquare />,
    },
    {
      id: 3,
      icon: <FaTwitter />,
    },
    {
      id: 4,
      icon: <FaGithub />,
    },
  ];
  return (
    <div className="bg-[#131212]">
      <div className="container">
        <div className="py-10 sm:py-[100px] relative">
          <div className=" flex flex-col-reverse sm:flex-row items-center justify-between relative z-10">
            <div className="flex flex-col gap-5 px-3">
              <h2 className="text-white font-bold text-[42px] sm:text-[56px] font-Syne">
                Let’s get know <br /> about{" "}
                <span className="text-[#fd6f00]">Me</span>{" "}
                <br className="sm:hidden" />
                closer
              </h2>
              <div className="flex flex-col gap-2">
                <p className="text-707070 font-semibold text-[24px]">Hi I am</p>
                <p className="font-bold text-[28px] text-959595 ">Jhon Doe</p>
                <p className="font-black font-Syne text-[38px] sm:text-[48px] text-[#fd6f00] ">
                  UI/UX DESIGNER
                </p>
              </div>

              <div className=" mt-5 sm:mt-10 flex gap-5">
                {iconItem.map((item) => (
                  <span
                    key={item.id}
                    className="text-white p-3 border border-gray-400 hover:border-[#fd6f00] rounded-md cursor-pointer hover:bg-[#fd6f00]  transition-all duration-500 hover:scale-115 "
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
              <div className="flex gap-10 mt-5 sm:mt-10 ">
                <button className="w-[156px] h-12 rounded flex items-center justify-center bg-transparent border border-white text-white font-bold text-[20px]  hover:bg-[#fd6f00] hover:border-[#fd6f00] duration-500 cursor-pointer hover:scale-105">
                  Hire Me
                </button>

                <button className="w-[156px] h-12 rounded flex items-center justify-center bg-transparent border border-white text-white font-bold text-[20px]  hover:bg-[#fd6f00] hover:border-[#fd6f00] duration-500 cursor-pointer hover:scale-105">
                  Download Cv
                </button>
              </div>

              <div className="bg-FFFFFF px-3 sm:px-6 py-[30px] rounded flex flex-row flex-wrap gap-[60px] justify-center items-center mt-20 shadow-2xl shadow-[#ffffff15] sm:hover:scale-105 duration-500">
                <div className="flex flex-col text-center sm:text-start gap-3 border-b sm:border-b-0 sm:border-r pb-[30px] sm:pb-0  sm:pr-[30px] border-gray-400">
                  <p className="text-[#FD6F00] text-[24px]  font-extrabold ">
                    5+
                  </p>
                  <p className="text-DFDFDF font-bold text-[20px]">
                    Experiences
                  </p>
                </div>
                <div className="flex flex-col text-center sm:text-start gap-3 border-b sm:border-b-0 sm:border-r pb-[30px] sm:pb-0 sm:pr-[30px] border-gray-400">
                  <p className="text-[#FD6F00] text-[24px]  font-extrabold ">
                    20+
                  </p>
                  <p className="text-DFDFDF font-bold text-[20px]">
                    Project done
                  </p>
                </div>
                <div className="flex flex-col text-center sm:text-start gap-3 border-b border-gray-400 sm:border-b-0 pb-[30px] sm:pb-0 ">
                  <p className="text-[#FD6F00] text-[24px]  font-extrabold ">
                    80+
                  </p>
                  <p className="text-DFDFDF font-bold text-[20px]">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-[30px] sm:mb-0 p-4 border-t-4 border-white border-l-4 border-r-4 border-r-[#fd6f00] border-b-4 border-b-[#fd6f00] hover:scale-105 duration-500 transition-all">
              <div className="w-[300px] sm:w-[354px]  rounded-xl">
                <img
                  src={profile}
                  alt="Profile"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-[155px] z-0">
            <picture>
              <img src={shadow1} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfPresentation;
