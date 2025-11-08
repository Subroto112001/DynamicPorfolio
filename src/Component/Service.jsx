import React from "react";
import { FaApple, FaAppStoreIos } from "react-icons/fa";
import { MdOutlineWeb, MdTabletAndroid } from "react-icons/md";

import { SiTaichigraphics } from "react-icons/si";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
const Service = () => {
  const serviceItem = [
    {
      id: 1,
      name: "Android App Design",
      icon: <MdTabletAndroid />,
      desc: "Crafting intuitive, visually appealing, and user-centered digital experiences that enhance usability and elevate brand identity.",
    },
    {
      id: 2,
      name: "Web App Design",
      icon: <MdOutlineWeb />,
      desc: "Crafting intuitive, visually appealing, and user-centered digital experiences that enhance usability and elevate brand identity.",
    },
    {
      id: 3,
      name: "Apple App Design",
      icon: <FaApple />,
      desc: "Crafting intuitive, visually appealing, and user-centered digital experiences that enhance usability and elevate brand identity.",
    },
    {
      id: 4,
      name: "APP Design",
      icon: <FaAppStoreIos />,
      desc: "Crafting intuitive, visually appealing, and user-centered digital experiences that enhance usability and elevate brand identity.",
    },
    {
      id: 5,
      name: "Graphics Design",
      icon: <SiTaichigraphics />,
      desc: "Crafting intuitive, visually appealing, and user-centered digital experiences that enhance usability and elevate brand identity.",
    },
  ];

  return (
    <div className="bg-[#131212]">
      <div className="container">
        <div className="py-[100px] ">
          <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="font-Syne text-[64px] font-bold text-white text-center">
              SERVICE
            </h1>
            <p className="text-[20px] text-center font-medium text-707070">
              Crafting intuitive, visually appealing, and user-centered digital
              experiences that enhance usability and elevate brand identity.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-20 justify-center items-center">
            {serviceItem.map((item) => (
              <div className="w-[350px] h-[300px] bg-[#1B1B1B] flex flex-col items-center justify-center hover:scale-105 group  transition-all duration-500 relative">
                <div className="flex flex-col gap-3 items-center justify-center">
                  <span className="text-[#fd6f00] text-[48px]">
                    {item.icon}
                  </span>
                  <Link className=" text-[24px] font-bold text-white text-center mt-4 group-hover:text-[#fd6f00] duration-500 transition-all">
                    {item.name}
                  </Link>
                  <p className="text-[18px] font-medium text-707070 px-[30px] text-center">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute top-4 left-3">
                  <img width={70} src={Vector} alt="" />
                </div>
                <div className="absolute top-15 left-2.5">
                  <img width={23} src={Vector2} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
