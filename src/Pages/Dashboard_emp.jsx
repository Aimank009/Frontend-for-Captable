import React, { useState } from "react";
import SideBar2 from "../Components/SideBar2.jsx";
import { Connect } from "../Connect.jsx";
import ClaimToken from "../Components/ClaimToken.jsx";
import SteppedGraph from "../Components/MyChart.jsx";

export const claimed = {
  claim: "24",
};

export default function Dashboard_emp() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex h-[100vh]">
        <SideBar2 />
        <div className="flex-1 overflow-auto">
          <Connect>{(account, provider) => null}</Connect>
          {/* Manish verma navbar */}
          <div>
            {/* {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>} */}
            <div className=" flex justify-between items-center bg-white w-[100%] h-[80px]   border-b border-gray-300  mr-[10px] ">
              <h1 className="ml-[20px] text-2xl font-source-code-pro font-normal">
                Manish Verma
              </h1>

              <div className="flex gap-2">
                <button
                  onClick={handleClick}
                  className="text-[#3A74F2]  w-[161px] font-medium h-[48px] border rounded-[12px] border-[#3A74F2]"
                >
                  Claim Tokens
                </button>
                <button className="font-medium flex items-center text-[#3A74F2] w-[161px] gap-2 h-[48px] border rounded-[12px] border-[#3A74F2]">
                  <svg
                    className="pl-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0229 9.348H21.0149L17.8339 6.165C16.8098 5.14087 15.5341 4.40439 14.1351 4.02961C12.7361 3.65482 11.2631 3.65493 9.86416 4.02992C8.46522 4.40492 7.18965 5.14159 6.16569 6.16587C5.14172 7.19015 4.40545 8.46595 4.03089 9.865M2.98489 19.644V14.652M2.98489 14.652H7.97689M2.98489 14.652L6.16489 17.835C7.189 18.8591 8.46468 19.5956 9.86368 19.9704C11.2627 20.3452 12.7357 20.3451 14.1346 19.9701C15.5336 19.5951 16.8091 18.8584 17.8331 17.8341C18.8571 16.8099 19.5933 15.5341 19.9679 14.135M21.0149 4.356V9.346"
                      stroke="#3A74F2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* allocations div */}
            <div className="ml-[20px] flex mt-[20px] border-[#76787A] border-[1px] justify-between rounded-lg w-[full] h-[120px] mr-[10px] ">
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
                <h4 className="text-[16px] text-[#76787A]">Claimed </h4>
                <h1 className="text-[24px] font-[700]">{claimed.claim}</h1>
              </div>
            </div>
            <div className="mt-10 ml-[20px] mr-[10px]">
              <SteppedGraph/>
            </div>
          </div>
        </div>
      </div>
      {open && <ClaimToken onClose={handleClose} />}
    </>
  );
}
