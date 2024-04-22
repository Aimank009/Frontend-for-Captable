import React from "react";
import Navbar from "../components/Navbar";
import AllocationsDashboard from "../components/AllocationsDashboard";
import SideBar from "../components/SideBar";
import DataCard from "../components/DataCard";

export default function Dashboard() {
  return (
    <div className="h-screen w-full">
      <Navbar />

      <AllocationsDashboard />
      {/* company details */}
      <div className=" flex mt-[20px] border-[#76787A] border-[1px] justify-between rounded-lg w-[full] h-[120px] ml-[278px] mr-[10px] ">
        <div className=" p-[16px] flex flex-col justify-between h-[120px]  border-r w-[282.5px] border-[#76787A]">
          <h4 className=" text-[16px] text-[#76787A]">Company Key</h4>
          <h1 className="text-[24px] font-[700]">#1L...X71</h1>
        </div>

        <div className=" flex flex-col p-[16px] justify-between h-[120px] border-[#76787A] border-r w-[282.5px]">
          <h4 className="text-[16px] text-[#76787A]">Total Allocation</h4>
          <h1 className="text-[24px] font-[700]">10,000,000</h1>
        </div>

        <div className=" flex flex-col p-[16px] justify-between h-[120px]  border-r w-[282.5px] border-[#76787A]">
          <h4 className="text-[16px] text-[#76787A]">Total Unlocked</h4>
          <h1 className="text-[24px] font-[700]">10,000,000</h1>
        </div>

        <div className=" flex flex-col  p-[16px] justify-between h-[120px]  w-[282.5px] border-[#76787A]">
          <h4 className="text-[16px] text-[#76787A]">No. of Employees </h4>
          <h1 className="text-[24px] font-[700]">24</h1>
        </div>
      </div>
      {/* search */}
      <div className=" flex mt-[10px] ml-[278px] border-white border-[1px] justify-between items-center rounded-lg w-[full] h-[80px]  ">
        <form action="POST" >
        <label htmlFor="search" className="relative">
  <input
    id="search"
    className="ml-2 border-[#76787A] bg-[#F4F4F4] w-[400px] h-[40px] mr-[10px] rounded-[12px] pl-[30px] placeholder-gray-400"
    type="text"
    placeholder="Search using Keyword"
  />
  <svg
    className="absolute left-3 top-[50%] transform -translate-y-1/2 w-5 h-5 fill-current text-gray-400"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9167 9.66667H10.2584L10.025 9.44167C11.025 8.275 11.5417 6.68334 11.2584 4.99167C10.8667 2.675 8.93337 0.825003 6.60003 0.541669C3.07503 0.108336 0.108366 3.075 0.5417 6.6C0.825033 8.93334 2.67503 10.8667 4.9917 11.2583C6.68337 11.5417 8.27503 11.025 9.4417 10.025L9.6667 10.2583V10.9167L13.2084 14.4583C13.55 14.8 14.1084 14.8 14.45 14.4583C14.7917 14.1167 14.7917 13.5583 14.45 13.2167L10.9167 9.66667ZM5.9167 9.66667C3.8417 9.66667 2.1667 7.99167 2.1667 5.91667C2.1667 3.84167 3.8417 2.16667 5.9167 2.16667C7.9917 2.16667 9.6667 3.84167 9.6667 5.91667C9.6667 7.99167 7.9917 9.66667 5.9167 9.66667Z"
      fill="#AFAFB1"
    />
  </svg>
</label>

        </form>

        {/* <input className='border-[#76787A] bg-[#F4F4F4] w-[400px] h-[40px]  rounded-[12px] ' type="text"  /> */}
        <button className=" w-[161px] justify-center h-[40px] border rounded-[12px] border-[#2B5A9D] flex gap-2 items-center mr-[10px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12.175L3.175 7.35L4.25 6.275L7.25 9.275V0H8.75V9.275L11.75 6.275L12.825 7.35L8 12.175ZM1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V10.925H1.5V14.5H14.5V10.925H16V14.5C16 14.9 15.85 15.25 15.55 15.55C15.25 15.85 14.9 16 14.5 16H1.5Z"
              fill="#2B5A9D"
            />
          </svg>
          Export CSV
        </button>
      </div>
      {/* Actual Dashboard */}

      <div className=" flex  mt-[10px] ml-[278px]  bg-[#F4F4F4]">
        <div className=" flex items-center p-5 w-[280px] h-[44px]">
          Stakeholder
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14L5 11L5.73333 10.2667L8 12.5333L10.2667 10.2667L11 11L8 14ZM5.73333 5.79998L5 5.06665L8 2.06665L11 5.06665L10.2667 5.79998L8 3.53332L5.73333 5.79998Z"
              fill="#76787A"
            />
          </svg>
        </div>

        <div className=" flex items-center p-5 w-[280px] h-[44px]">
          Total Allocation
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14L5 11L5.73333 10.2667L8 12.5333L10.2667 10.2667L11 11L8 14ZM5.73333 5.79998L5 5.06665L8 2.06665L11 5.06665L10.2667 5.79998L8 3.53332L5.73333 5.79998Z"
              fill="#76787A"
            />
          </svg>
        </div>

        <div className=" flex items-center p-5 w-[280px] h-[44px]">
          Unlocked Token
        </div>

        <div className=" flex items-center p-5 w-[280px] h-[44px]">Claimed</div>

        <div className=" flex items-center p-5 w-[280px] h-[44px]">Wallet</div>

        <div className=" flex items-center  p-5 w-[280px] h-[44px]">Status</div>
      </div>

      <DataCard />
      <div className="-mt-[55.5rem] fixed">
        <SideBar />
      </div>
    </div>
  );
}
