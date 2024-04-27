import React, { useState } from "react";

function ClickToViewContent() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      {isVisible == true ? (
        <div>
          <div className="ml-[20px] flex mt-[20px] border-[#76787A] border-[1px] justify-between rounded-lg w-[full] h-[120px] mr-[10px] ">
            <div className=" p-[16px] flex flex-col justify-between h-[120px]  border-r w-[282.5px] border-[#76787A]">
              <h4 className=" text-[16px] text-[#76787A] font-source-code-pro">Company Key</h4>
              <h1 className="text-[24px] font-source-code-pro font-light]">#1L...X71</h1>
            </div>

            <div className=" flex flex-col p-[16px] justify-between h-[120px] border-[#76787A] border-r w-[282.5px]">
              <h4 className="text-[16px] text-[#76787A] font-source-code-pro">Total Allocation</h4>
              <h1 className="text-[24px] font-light font-source-code-pro">10,000,000</h1>
            </div>

            <div className=" flex flex-col p-[16px] justify-between h-[120px]  border-r w-[282.5px] border-[#76787A]">
              <h4 className="text-[16px] text-[#76787A] font-source-code-pro">Total Unlocked</h4>
              <h1 className="text-[24px] font-light font-source-code-pro">10,000,000</h1>
            </div>

            <div className=" flex flex-col  p-[16px] justify-between h-[120px]  w-[282.5px] border-[#76787A]">
              <h4 className="text-[16px] text-[#76787A] font-source-code-pro">No. of Employees </h4>
              <h1 className="text-[24px] font-light font-source-code-pro">24</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-[20px] flex items-center justify-center mt-[20px] bg-[#f4f4f4]  rounded-lg w-[full] h-[120px] mr-[10px] ">
          <button
            onClick={handleClick}
            className=" font-source-code-pro flex justify-center items-center w-[20%] text-right text-white h-[40%] bg-[#3A74F2] rounded-[12px]"
          >
            <svg
              className="m-2"
              width="30"
              height="30"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.53589 12.322C2.46688 12.1146 2.46688 11.8904 2.53589 11.683C3.92289 7.51 7.85989 4.5 12.4999 4.5C17.1379 4.5 21.0729 7.507 22.4629 11.678C22.5329 11.885 22.5329 12.109 22.4629 12.317C21.0769 16.49 17.1399 19.5 12.4999 19.5C7.86189 19.5 3.92589 16.493 2.53589 12.322Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15C11.7044 15 10.9413 14.6839 10.3787 14.1213C9.81607 13.5587 9.5 12.7956 9.5 12C9.5 11.2044 9.81607 10.4413 10.3787 9.87868C10.9413 9.31607 11.7044 9 12.5 9C13.2956 9 14.0587 9.31607 14.6213 9.87868C15.1839 10.4413 15.5 11.2044 15.5 12Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Click to view
          </button>
        </div>
      )}
    </>
  );
}

export default ClickToViewContent;
