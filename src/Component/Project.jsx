import React from "react";
import Project1 from "../assets/Website.png";
import shadhow1 from "../assets/Shadow1.png";
const Project = () => {
  const projectName = [
    {
      id: 1,
      name: "Mobile App Design",
    },
    {
      id: 2,
      name: "Web App Design",
    },
    {
      id: 3,
      name: "Apple App Design",
    },
    {
      id: 4,
      name: "APP Design",
    },
  ];

  const projectItem = [
    {
      id: 1,
      image: Project1,
      name: "Example Project 1",
      desc: " A web app for visualizing personalized Spotify data.View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
    {
      id: 2,
      image: Project1,
      name: "Example Project 2",
      desc: " A web app for visualizing personalized Spotify data.View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
    {
      id: 3,
      image: Project1,
      name: "Example Project 3",
      desc: " A web app for visualizing personalized Spotify data.View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
  ];
  return (
    <div className="bg-[#131212]">
      <div className="container">
        <div className="py-[100px] flex flex-col ">
          <h3 className="font-Syne text-[64px] font-bold text-white text-center">
            Work
          </h3>
          <div className="flex flex-col">
            <div className="mt-10 flex flex-col sm:flex-row justify-between ">
              <h3 className=" text-[24px] sm:text-[38px] text-white font-semibold sm:leading-[58px] text-center sm:text-start hover:scale-105 transition-all duration-500">
                Here My Beautiful <br />{" "}
                <span className="text-[#fd6f00]">Works</span>
              </h3>
              <div className=" flex flex-col sm:flex-row gap-5 items-center sm:items-start sm:gap-5 mt-[30px] sm:mt-0">
                <button className=" border border-white hover:border-[#fd6f00] text-[#C6C6C6] w-[170px] sm:w-[100px] h-[54px] flex justify-center items-center rounded bg-FFFFFF hover:bg-[#fd6f00] hover:text-white transition-all duration-500 cursor-pointer hover:scale-105 ">
                  ALL
                </button>

                <div className="flex  flex-wrap gap-5  max-w-[450px] justify-center items-center">
                  {projectName.map((item) => (
                    <button
                      key={item.id}
                      className="border border-white hover:border-[#fd6f00] text-[#C6C6C6] w-[170px] sm:w-[210px] flex justify-center items-center h-[54px] rounded bg-FFFFFF hover:bg-[#fd6f00] hover:text-white transition-all duration-500 cursor-pointer hover:scale-105 "
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[100px]">
              <div className="flex flex-col gap-10">
                {projectItem.map((item) => (
                  <div className="flex flex-col relative " key={item.id}>
                    <p className="font-semibold text-[34px] text-white ">
                      {item.name}
                    </p>
                    <div
                      className={`z-10 flex  justify-between items-center ${
                        item.id % 2 === 0
                          ? " flex-col-reverse sm:flex-row-reverse"
                          : "flex-col-reverse sm:flex-row"
                      }`}
                    >
                      <div className="relative max-w-3xl sm:hover:scale-105 transition-all duration-500">
                        <div className="backdrop-blur-xl bg-white/10 rounded-md mt-8 p-12 shadow-2xl border border-white/20">
                          <p className="text-white text-lg leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div>
                        <img
                          src={item.image}
                          alt=""
                          className="w-[400px] sm:hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    </div>
                    <div
                      className={` absolute z-0 ${
                        item.id % 2 === 0
                          ? "top-[-50px] left-20"
                          : "top-[-50px] right-20"
                      }`}
                    >
                      <img className="w-[610px]" src={shadhow1} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
