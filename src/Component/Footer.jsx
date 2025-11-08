import React from "react";
import { FaFacebook, FaGithub, FaInstagramSquare, FaPhone, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoMail, IoTimeSharp } from "react-icons/io5";

const Footer = () => {
  const footerItem = [
    {
      id: 1,
      name: "Home",
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
    <div className="bg-[#1B1B1B]">
      <div className="container">
        <div className="py-[100px]">
          <h3 className="text-[#fd6f00] font-bold text-[30px] text-center">
            LOGO
          </h3>

          <div className="mt-[50px]">
            <ul className="flex flex-wrap gap-5 sm:gap-[60px] justify-center items-center text-959595">
              {footerItem.map((item) => (
                <li
                  key={item.id}
                  className="text-[20px] font-medium hover:text-[#fd6f00] transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex gap-5 justify-center items-center">
            {iconItem.map((item) => (
              <span
                key={item.id}
                className="text-white p-3 border border-gray-400 hover:border-[#fd6f00] rounded-md cursor-pointer hover:bg-[#fd6f00]  transition-all duration-500 hover:scale-115 "
              >
                {item.icon}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center  gap-5 sm:gap-10 py-10 border-b border-959595">
            <p className="flex items-center  gap-3">
              <span className="text-[25px] text-959595">
                <IoMail />
              </span>
              <span className="text-959595 text-[20px] font-bold">
                example@mail.com
              </span>
            </p>
            <p className="flex items-center  gap-3">
              <span className="text-[25px] text-959595">
                <FaPhoneAlt />
              </span>
              <span className="text-959595 text-[20px] font-bold">
                +880 123 456 789
              </span>
            </p>
          </div>

          <div className="py-5">
            <p className="text-959595 text-center">
              Created by &nbsp;<span className="text-[#fd6f00]">Subroto</span>
              &nbsp;| Powered by{" "}
              <span className="text-[#fd6f00]">ranocoder Ltd</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
