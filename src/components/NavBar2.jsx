import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const NavBar2 = () => {
  const [connectedWallet, setConnectedWallet] = useState('abc');
  const [showFullAddress, setShowFullAddress] = useState(false);


  const handleConnectWallet = async () => {
null
  };

  const toggleShowFullAddress = () => {
    setShowFullAddress(!showFullAddress);
  };

  return (
    <div className="flex items-center justify-end border-b">
      {/* <img
        className="w-[11.42%] h-[3.33%] mt-[3.33%] ml-[1.67%] "
        src={logo}
        alt=""
      /> */}
      {connectedWallet.length > 0 ? (
        <div className="flex justify-end p-1">
          <div className="flex flex-col items-center">
            <h1 className="font-source-code-pro text-[#BDBDBD]">
              Linked Wallet
            </h1>
            <h1 className="font-source-code-pro">
              {showFullAddress ? connectedWallet : connectedWallet.substr(0, 10) + '...'}
            </h1>
          </div>
          <svg
            onClick={toggleShowFullAddress}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[1%] mb-[1%] cursor-pointer"
          >
            <path
              d="M15.88 9.29L12 13.17L8.11998 9.29C7.72998 8.9 7.09998 8.9 6.70998 9.29C6.31998 9.68 6.31998 10.31 6.70998 10.7L11.3 15.29C11.69 15.68 12.32 15.68 12.71 15.29L17.3 10.7C17.69 10.31 17.69 9.68 17.3 9.29C16.91 8.91 16.27 8.9 15.88 9.29Z"
              fill="#76787A"
            />
          </svg>
        </div>
      ) : (
        <h1 onClick={handleConnectWallet} className="font-source-code-pro cursor-pointer rounded-lg bg-[#3A74F2] px-[24px] py-[12px]  mt-[0.5%] mr-[2.5%] text-[#FFFFFF]  ">Connect Wallet</h1>
      )}
    </div>
  );
};

export default NavBar2;
