import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import img from "./main.png";
import Add from "../components/Add";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      
        {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>} {/* Black overlay when Add component is open */}
        <div className="flex flex-col justify-center items-center w-[456px] h-[456px] mt-[200px] ml-[622px]">
          <img src={img} alt="" />
          <h1>Looks pretty empty here!!</h1>
          <h1>Try adding your employees</h1>
          <button
            className="flex mt-4 items-center gap-2 border-[2px] border-[#2B5A9D] p-3 rounded-xl "
            onClick={handleClick}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0.75V13.25M13.25 7H0.75"
                stroke="#2B5A9D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add Employee
          </button>
        </div>
      <div className="-mt-[50%]">
      <SideBar />
      </div>
      
      {open && <Add onClose={handleClose} />} {/* Render Add component if 'open' state is true */}
    </>
  );
};

export default Home;
