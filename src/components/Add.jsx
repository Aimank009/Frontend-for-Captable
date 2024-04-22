import React, { useState } from "react";
import { getInstance } from "../../../fhevmjs-react-example/src/utils/fhevm";
import { toHexString } from "../utils/utils";

const Add = ({ onClose }) => {


  const [amountUint8, setAmountUint8] = useState(0);
  const [eamountUint8, setEamountUint8] = useState(0);


  const [formData, setFormData] = useState({
    name: "",
    walletAddress: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    // Get fhevm instance
    let _instance = getInstance();
    // console.log(_instance)
    _instance.then((instance) => {
         setEamountUint8(toHexString(instance.encrypt8(+formData.amount)));
        });
        console.log("En",eamountUint8)
    // await addEmp(eamountUint8)
    // console.log("Employee added Sucessfully");  
    
    
    
  };



  return (
    <div className="w-[573px] h-screen ml-[56.5rem] z-50 bg-white fixed inset-0">
      <div className="w-[513px] h-[36px] mt-[22px] ml-[40px] flex justify-between items-center">
        <h1 className="text-[28px] font-bold text-[#212427]">New Employee</h1>
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClose} // Add onClick event to close the Add component
          className="w-6 h-6 cursor-pointer hover:bg-gray-400 hover:text-white rounded-lg p-1 "
         
        >
          <path
            d="M1 13L13 1M1 1L13 13"
            stroke="#76787A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-[100px] ml-[40px] gap-[8px]">
          <h1 className="text-[14px] mb-[8px]">Name</h1>
          <input
            className="bg-[#F4F4F4] w-[513px] h-[56px] rounded-lg caret-blink"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <h1 className="text-[14px] mb-[8px]">Wallet Address</h1>
          <input
            className="bg-[#F4F4F4] w-[513px] h-[56px] rounded-lg caret-blink"
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
          />
          <h1 className="text-[14px] mb-[8px]">Amount</h1>
          <div className="flex gap-[24px]">
            <input
              className="bg-[#F4F4F4] w-[513px] h-[56px] rounded-lg caret-blink"
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            <button className="border border-[#76787A] p-[5px] w-[100px] h-[56px] rounded-[12px] mr-[17px]">
              One Time
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
