import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navitem = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "About Me"
        },
        {
            id: 3,
            name: "Service"
        },
        {
            id: 4,
            name: "Portfolio"
        },
        {
            id: 5,
            name: "Contact"
        }
    ]
    return (
      <div className="bg-[#131212]">
        <div className="container">
          <div className="py-4 flex flex-row items-center justify-between">
            <Link to={"/"} className="text-xl font-bold  text-white">LOGO</Link>

            <div className="flex gap-20 items-center">
              <div className="flex gap-10">
                {navitem.map((item) => (
                  <Link
                    to={"/"}
                    className="text-959595 font-medium text-[20px] hover:text-[#fd6f00] hover:scale-105   duration-400 transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <button className="text-white bg-[#fd6f00] border-2 border-[#fd6f00] hover:bg-white hover:text-[#fd6f00] transition-all duration-500 py-3 px-10 rounded-md cursor-pointer hover:scale-105 ">
                HIRE ME
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar