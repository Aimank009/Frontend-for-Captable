import React, { useState } from "react";
import bitPng from "./bit.png";
import { useNavigate } from "react-router-dom";

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
    <div className="w-[260px] h-screen border border-[#E8E8E8] flex flex-col justify-between ">
      <div className="m-5">
        <h1
          className={`text-[#212427] items-center rounded-xl p-2 mx-2 mt-20 flex gap-[10px] hover:bg-[#F4F4F4] ${
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
          className={`text-[#212427] items-center rounded-lg p-2 m-2 flex gap-[10px] hover:bg-[#F4F4F4] ${
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

      <div className="w-[220px] h-[284px] m-5  flex flex-col">
        <h1 className="text-[#5B5B5D]">Account</h1>
        <div className="m-5 flex flex-col gap-[10px]">
        <h1
            className={`flex items-center gap-[10px] rounded-lg p-2 hover:bg-[#F4F4F4] text-[#212427] ${
              isHeadingActive("Teams") ? "bg-[#F4F4F4]" : "bg-white"
            }`}
            onClick={() => handleClick("Teams")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 6.125V0.5H15.5V6.125H8.625ZM0.5 8.625V0.5H7.375V8.625H0.5ZM8.625 15.5V7.375H15.5V15.5H8.625ZM0.5 15.5V9.875H7.375V15.5H0.5ZM1.75 7.375H6.125V1.75H1.75V7.375ZM9.875 14.25H14.25V8.625H9.875V14.25ZM9.875 4.875H14.25V1.75H9.875V4.875ZM1.75 14.25H6.125V11.125H1.75V14.25Z"
                fill="#212427"
              />
            </svg>
            Teams
          </h1>
          <h1
            className={`  flex items-center gap-[10px] rounded-lg p-2 hover:bg-[#F4F4F4] text-[#212427] ${
              isHeadingActive("Stakeholders") ? "bg-[#F4F4F4]" : "bg-white"
            }`}
            onClick={() => handleClick("Stakeholders")}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00004 6.97916C6.08337 6.97916 5.33337 6.68749 4.75004 6.10416C4.16671 5.52082 3.87504 4.77082 3.87504 3.85416C3.87504 2.93749 4.16671 2.18749 4.75004 1.60416C5.33337 1.02082 6.08337 0.729156 7.00004 0.729156C7.91671 0.729156 8.66671 1.02082 9.25004 1.60416C9.83337 2.18749 10.125 2.93749 10.125 3.85416C10.125 4.77082 9.83337 5.52082 9.25004 6.10416C8.66671 6.68749 7.91671 6.97916 7.00004 6.97916ZM0.333374 13.6667V11.7083C0.333374 11.1805 0.465318 10.7292 0.729207 10.3542C0.993096 9.97916 1.33337 9.69443 1.75004 9.49999C2.6806 9.08332 3.57296 8.77082 4.42712 8.56249C5.28129 8.35416 6.13893 8.24999 7.00004 8.24999C7.86115 8.24999 8.71532 8.35763 9.56254 8.57291C10.4098 8.78818 11.2981 9.09856 12.2276 9.50403C12.6623 9.70023 13.0108 9.98471 13.2732 10.3575C13.5355 10.7303 13.6667 11.1805 13.6667 11.7083V13.6667H0.333374ZM1.58337 12.4167H12.4167V11.7083C12.4167 11.4861 12.3507 11.2743 12.2188 11.0729C12.0868 10.8715 11.9237 10.7222 11.7292 10.625C10.8403 10.1944 10.0278 9.8993 9.29171 9.73957C8.5556 9.57985 7.79171 9.49999 7.00004 9.49999C6.20837 9.49999 5.43754 9.57985 4.68754 9.73957C3.93754 9.8993 3.12504 10.1944 2.25004 10.625C2.0556 10.7222 1.89587 10.8715 1.77087 11.0729C1.64587 11.2743 1.58337 11.4861 1.58337 11.7083V12.4167ZM7.00004 5.72916C7.54171 5.72916 7.98962 5.55207 8.34379 5.19791C8.69796 4.84374 8.87504 4.39582 8.87504 3.85416C8.87504 3.31249 8.69796 2.86457 8.34379 2.51041C7.98962 2.15624 7.54171 1.97916 7.00004 1.97916C6.45837 1.97916 6.01046 2.15624 5.65629 2.51041C5.30212 2.86457 5.12504 3.31249 5.12504 3.85416C5.12504 4.39582 5.30212 4.84374 5.65629 5.19791C6.01046 5.55207 6.45837 5.72916 7.00004 5.72916Z"
                fill="black"
              />
            </svg>
            Stakeholders
          </h1>
        </div>

        <div className="w-[220px] h-[120px] flex mt-5 p-2 bg-[#E8E8E8] rounded-lg">
          <img
            src={bitPng}
            className="w-[114px] border h-[64px] -ml-7"
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
