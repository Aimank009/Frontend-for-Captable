import React, { useState } from 'react';

const ClaimToken = ({ onClose }) => {
  const [claimAmount, setClaimAmount] = useState('');

  const handleChange = (e) => {
    setClaimAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use `claimAmount` for further processing, such as submitting the claim request.
    console.log('Claiming tokens:', claimAmount);
    // Reset the input field after submission
    setClaimAmount('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end z-50 bg-black bg-opacity-50">
      <div className="lg:w-[40%] w-auto h-screen border-l border-[#F4F4F4] bg-white">
        <div className="flex justify-between w-[100%] h-[10%] items-center border-b border-[#F4F4F4] p-5">
          <h1 className="font-source-code-pro text-xl font-semibold">
            Claim Token
          </h1>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={onClose}
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
        <div className="border border-dashed border-[#3A74F2] rounded-lg flex justify-between ml-[5%] mt-5 items-center w-[80%]">
          <h1 className="text-[#3A74F2] font-source-code-pro font-semilight text-sm p-3">
            Tokens ready to be Claimed:
          </h1>
          <h2 className="text-[#3A74F2] font-source-code-pro font-semilight text-sm p-3">
            10,000,000
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="mt-[5%] font-source-code-pro text-sm ml-[5%]">
              Claim Tokens
            </h1>
            <input
              type="text"
              className="border p-3 font-source-code-pro  border-[#BDBDBD] rounded-lg flex justify-between ml-[5%] mt-2 focus:outline-none items-center w-[80%]"
              placeholder="Enter Amount"
              value={claimAmount}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-[#3A74F2] p-3 font-source-code-pro cursor-pointer w-[25%] mt-[5%] rounded-lg ml-[5%] text-white"
          >
            Claim Tokens
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClaimToken;
