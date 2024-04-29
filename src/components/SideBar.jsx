import React, { useState } from "react";
import bitPng from "../assets/bit.png";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
const SideBar = () => {
  const [activeHeading, setActiveHeading] = useState(null);
  const navigate=useNavigate()

  const handleClick = (heading) => {
    setActiveHeading(heading);
    navigate('/allocations')
  };

  const isHeadingActive = (heading) => {
    return heading === activeHeading;
  };

  return (
    <div className="w-full h-screen border border-[#E8E8E8] flex flex-col justify-between ">
      <div>
      <img className="m-5" src={logo} alt="" />
        <div className="flex flex-col">
        <h1 className="-mb-[25%] mt-[30%] ml-5">Menu</h1>
        <h1
          className={`text-[#212427] items-center rounded-xl p-2 mx-[10%] mt-20 flex gap-[10px] hover:bg-[#F4F4F4] ${
            isHeadingActive("Allocations") ? "bg-[#F4F4F4]" : "bg-white"
          }`}
          onClick={() => handleClick("Allocations")}

        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_57)">
              <path
                d="M9 4.5H6V1.5H4.5V4.5H1.5V6H4.5V9H6V6H9V4.5Z"
                fill="black"
              />
              <path
                d="M18 5H18.5V4.5V3.5H22V7H21H20.5V7.5V18V18.5H21H22V22H18.5V21V20.5H18H7.5H7V21V22H3.5V18.5H4.5H5V18V12.5H5.5V18V18.5H6H7V19.5V20H7.5H18H18.5V19.5V18.5H19.5H20V18V7.5V7H19.5H18.5V6V5.5H18H12.5V5H18ZM6 21.5H6.5V21V19.5V19H6H4.5H4V19.5V21V21.5H4.5H6ZM21 21.5H21.5V21V19.5V19H21H19.5H19V19.5V21V21.5H19.5H21ZM19.5 4H19V4.5V6V6.5H19.5H21H21.5V6V4.5V4H21H19.5Z"
                fill="black"
                stroke="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_57">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Allocations
        </h1>
        <h1
          className={`text-[#212427] mx-[10%] items-center rounded-lg p-2 m-2 flex gap-[10px] hover:bg-[#F4F4F4] ${
            isHeadingActive("Transaction") ? "bg-[#F4F4F4]" : "bg-white"
          }`}
          onClick={() => handleClick("Transaction")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 19L1 14.5M1 14.5L5.5 10M1 14.5H14.5M14.5 1L19 5.5M19 5.5L14.5 10M19 5.5H5.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Transaction
        </h1>
        </div>
      </div>
      <div className="w-[220px] h-[284px] ml-5  flex flex-col">
       
        <div className="w-[220px] h-[120px] flex mt-[50%] p-2 bg-[#E8E8E8] rounded-lg">
          <img
            src={bitPng}
            className="w-[114px]  h-[64px] -ml-7"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-4xl -ml-5">Bit</h1>
            <h1 className=" -ml-5 text-[#76787A]">1 company</h1>
          </div>
          <div className="m-6">
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M2 2.75C1.80109 2.75 1.61032 2.67098 1.46967 2.53033C1.32902 2.38968 1.25 2.19891 1.25 2C1.25 1.80109 1.32902 1.61032 1.46967 1.46967C1.61032 1.32902 1.80109 1.25 2 1.25C2.19891 1.25 2.38968 1.32902 2.53033 1.46967C2.67098 1.61032 2.75 1.80109 2.75 2C2.75 2.19891 2.67098 2.38968 2.53033 2.53033C2.38968 2.67098 2.19891 2.75 2 2.75ZM2 8.75C1.80109 8.75 1.61032 8.67098 1.46967 8.53033C1.32902 8.38968 1.25 8.19891 1.25 8C1.25 7.80109 1.32902 7.61032 1.46967 7.46967C1.61032 7.32902 1.80109 7.25 2 7.25C2.19891 7.25 2.38968 7.32902 2.53033 7.46967C2.67098 7.61032 2.75 7.80109 2.75 8C2.75 8.19891 2.67098 8.38968 2.53033 8.53033C2.38968 8.67098 2.19891 8.75 2 8.75ZM2 14.75C1.80109 14.75 1.61032 14.671 1.46967 14.5303C1.32902 14.3897 1.25 14.1989 1.25 14C1.25 13.8011 1.32902 13.6103 1.46967 13.4697C1.61032 13.329 1.80109 13.25 2 13.25C2.19891 13.25 2.38968 13.329 2.53033 13.4697C2.67098 13.6103 2.75 13.8011 2.75 14C2.75 14.1989 2.67098 14.3897 2.53033 14.5303C2.38968 14.671 2.19891 14.75 2 14.75Z"
                stroke="#212427"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;