import React, { useState } from "react";
import NavBar2 from "../Components/NavBar2";
import SideBar from "../Components/SideBar";
import cvImage from "../assets/cvImage.png";
import AddEmployee from "../Components/AddEmployee";
import AllocationsTable from "./AllocationsTable";
import data from "../data/data.json"
import SearchField from "../Components/SearchField";
import ActualDashboard from "../Components/ActualDashboard";
import DataView from "../Components/DataView";
import NavBar from "../Components/NavBar";
import { Connect } from "../Connect";
const Allocations = ({ children }) => {
    const [open, setOpen] = useState(false);
    const handleClose=()=>{
        setOpen(false);
    };
    const handleClick = () => {
      setOpen(true);
    };
  return (
    <>
   
    <div className="flex h-[100vh] ">
      <SideBar />
      <div className="flex-1 w-[70%]">
        <div className="border-b mt-[1%]">
        <Connect>{(account, provider) => null}</Connect> 
        </div>
      
        {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>}
        
            <AllocationsTable/>
            {data.length>0 ? 
        <div className="flex flex-col w-[100%] ">
          <SearchField/>
          <ActualDashboard/>
          <DataView />
          </div>
          :
          <div className="flex flex-col gap-5 -ml-15 justify-center items-center h-[60%]">
          <img src={cvImage} alt="" />
          <div className="flex flex-col">
            <h1 className="font-source-code-pro text-[130%]">
              Looks pretty empty here !!
            </h1>
            <h1 className="font-source-code-pro text-[130%]">
              Try adding{" "}
              <span className="font-source-code-pro text-[#3A74F2]">
                your employees
              </span>
            </h1>
          </div>
          <button onClick={handleClick} 
          className=" cursor-pointer w-[20%] flex items-center justify-center gap-2 font-source-code-pro border border-[#3A74F2] rounded-lg text-[#3A74F2] p-4">
            Add Employee
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M11 1L3.5 0.999999M11 1L11 8.5"
                stroke="#3A74F2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          
        </div>
        }
        
        
      </div>
     
    </div>
    {open && <AddEmployee onClose={handleClose} />}
    </>
  );
};

export default Allocations;