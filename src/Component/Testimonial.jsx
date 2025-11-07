import React from "react";
import quote from"../assets/Quote.png"
const Testimonial = () => {
  return (
    <div className="bg-[#131212]">
      <div className="container">
        <div className=" pb-[100px] relative">
          <div>
            <h3 className="text-[64px] font-Syne font-bold text-white text-center">
              {" "}
              Testimonial
            </h3>

            <p className="max-w-[878px] text-white text-center mx-auto">
              “Aaronn was fantastic to work with from start to finish. We were
              looking for a simple, stand-out logo and he delivered. I tried
              designing the logo myself thinking I wouldn’t need to pay the
              money for a professional graphic designer but I was very wrong.
              Working with Aaronn was worth every penny and was surprisingly
              affordable! I remember him saying simplicity is key to a
              successful logo and boy he was right. I can’t thank Aaronn enough
              for his effort and professionalism. I would recommend him to
              anyone looking for a design!”
            </p>
            <p className=" text-white text-center text-xl mt-5 font-bold">
              -John Moris
            </p>
          </div>
          <div className="absolute top-0 right-0">
            <img src={quote} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
