import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo_2 from "../assets/logo_2.png";
import {
  captableContract,
  getInstance,
  CAPTABLE_ADDRESS,
} from "../utils/fhevm.jsx";
import { getReencryptPublicKey } from "../utils/RencryptPublicKey.jsx";

import { Buffer } from "buffer";
import Loader from "../Components/Loader.jsx";
window.Buffer = Buffer;

export default function CreateCompanyKey() {
  const [tokenName, setTokenName] = useState("");
  const [generating, setGenerating] = useState(false);
  const navigate = useNavigate();


  const handleGenerateToken = async (e) => {
    e.preventDefault();
    setGenerating(true);
    try {
        const instance = await getInstance();
        const constactInstanceMain = await captableContract();
  
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        const key = await constactInstanceMain.adminKey(accounts[0]);
        console.log(key);
        console.log(tokenName);
        const createToken= await constactInstanceMain.create(tokenName,key);
        console.log(createToken);
        if(createToken){
            navigate('/allocations')
        }
        else{
            alert(`Token Name ${tokenName} not created`)
        }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      
      <div className="w-screen h-screen flex flex-row  items-center  justify-between">
        <div className=" border rounded-[30px] w-[35%] mx-[10%]  h-[330px] border-[#E8E8E8]">
          <form className="">
            <div className=" text-center pt-5">
              <h1 className="font-source-code-pro text-[30px] text-[#212427]">
                Create Token
              </h1>
              <h1 className="text-[#5B5B5D] pt-[2%] text-center font-source-code-pro">
                Please enter your token name and
              </h1>
              <h1 className="text-[#5B5B5D] text-center font-source-code-pro">
                confirm it
              </h1>
            </div>

            <h1 className="font-medium p-1 ml-9 font-source-code-pro text-sm    text-[#212427] ">
              Token Name
            </h1>
            <input
              className="ml-9 w-[85%] h-[56px] font-source-code-pro focus:outline-[#3A74F2] border border-[#BDBDBD] rounded-xl px-2"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
            />

            {generating ? (
              <div>
                <h1 className="ml-9 text-center w-[85%] font-source-code-pro cursor-pointer rounded-lg bg-[#3A74F2] px-[24px] py-[12px] mr-[10px] mt-[8%] text-[#FFFFFF]">
                  Creating Token...
                </h1>
                <Loader />
              </div>
            ) : (
              <button
                onClick={handleGenerateToken}
                className="focus:ring-4 shadow-lg transform active:scale-75 transition-transform ml-9 text-center w-[85%] font-source-code-pro cursor-pointer rounded-lg bg-[#3A74F2] px-[24px] py-[12px] mr-[10px] mt-[8%] text-[#FFFFFF]"
              >
               Next
              </button>
            )}
          </form>
        </div>

        <div className="rounded-[10%] w-[42%] h-[90%] mr-10">
          <div className="rounded-[5%] flex flex-col justify-between  h-[100%] w-[100%] bg-[#3A74F2] text-left">
            <div>
              <img className="pt-10 w-[30%] pl-5 " src={logo_2} alt="" />
              <div className="w-[80%] pt-5 pl-10">
                <h1 className="font-source-code-pro text-[#FFFFFF] text-[55px]">
                  Private Captable
                </h1>

                <h1 className="font-source-code-pro text-[#FFFFFF] text-[55px]">
                  Built on INCO
                </h1>

                <h1 className="font-source-code-pro mt-10 text-[#FFFFFF] text-[18px]">
                  Allocate your token now privately.
                </h1>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
}
