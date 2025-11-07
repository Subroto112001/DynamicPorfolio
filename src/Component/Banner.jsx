import React from "react";
import shadow1 from "../assets/Shadow1.png";

const Banner = () => {
  return (
    <div className="bg-[#131212]">
      <div className="container">
        <div className="py-[191px] relative flex items-center justify-between flex-col">
          <h1 className="text-white font-bold text-[72px] text-center font-Syne relative z-10">
            {" "}
            {/* Added relative z-10 */}
            Adaptive UI/UX Design <br /> for Your Brand
          </h1>

          <button className="text-white font-bold mt-[93px] bg-[#fd6f00] hover:bg-white hover:text-[#fd6f00] px-10 py-6 rounded-full cursor-pointer relative z-10 duration-500 border-2 border-[#fd6f00] hover:scale-105">
            {" "}
            {/* Added relative z-10 */}
            EXPLORE WORK
          </button>

          <div className="absolute top-0 left-[-155px] z-0">
            {" "}
            {/* Added z-0 */}
            <picture> 
              <img src={shadow1} alt={shadow1} />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
