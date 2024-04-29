import React, { useState } from "react";
import { captableContract, captableDataContract, getInstance } from "../utils/fhevm";
import { getReencryptPublicKey } from "../utils/RencryptPublicKey";


const CAPTABLE_ADDRESS = "0x13D6c7652EaD49b377c9e7E5021D11FfaF032342";
const CAPTABLE_DATA="0x765f69182281d43E1692629303C0456743F09369";

function ClickToViewContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [allocations,setAllocations]=useState(0)
  const [unlocked,setUnlocked]=useState(0)
  const [employee,setEmployee]=useState(0)
  const handleClick =async () => {
    setIsVisible(true);
    try{
      const instance = await getInstance();
      const reencrypt = await getReencryptPublicKey(CAPTABLE_DATA);
      console.log(reencrypt);
      console.log(await instance.hasKeypair(CAPTABLE_DATA));
      const contractInstance=await captableContract();


      const contractDataInstance = await captableDataContract();

      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      console.log(accounts)
      const key=await contractInstance.adminKey(accounts[0]);
      console.log(key)

       const companyEmploys =await contractDataInstance.viewCompanyemploys(key,reencrypt.publicKey, reencrypt.signature)
       console.log("TX",companyEmploys);
       const employee=await instance.decrypt(CAPTABLE_DATA,companyEmploys)
       setEmployee(employee.toString())
       console.log(employee);

       const companyTotalFunds =await contractDataInstance.viewCompanytotalFund(key,reencrypt.publicKey, reencrypt.signature)
       console.log("TX",companyTotalFunds);
       const alloc=await instance.decrypt(CAPTABLE_DATA,companyTotalFunds)
       setAllocations(alloc.toString())
       console.log(allocations);

       const companyTotalLocked =await contractDataInstance.viewCompanytotalLocked(key,reencrypt.publicKey, reencrypt.signature)
       console.log("TX",companyTotalLocked);
       const unlock=await instance.decrypt(CAPTABLE_DATA,companyTotalLocked)
       setUnlocked(unlock.toString())
       console.log(unlocked);
       
      //  const companyEmploys =await contractDataInstance.viewCompanyemploys(key,reencrypt.publicKey, reencrypt.signature)
      //  console.log("TX",companyEmploys);
    }
    catch(error){
      console.log("Error",error)
    }
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
              <h1 className="text-[24px] font-light font-source-code-pro">{allocations}</h1>
            </div>

            <div className=" flex flex-col p-[16px] justify-between h-[120px]  border-r w-[282.5px] border-[#76787A]">
              <h4 className="text-[16px] text-[#76787A] font-source-code-pro">Total Unlocked</h4>
              <h1 className="text-[24px] font-light font-source-code-pro">{unlocked}</h1>
            </div>

            <div className=" flex flex-col  p-[16px] justify-between h-[120px]  w-[282.5px] border-[#76787A]">
              <h4 className="text-[16px] text-[#76787A] font-source-code-pro">No. of Employees </h4>
              <h1 className="text-[24px] font-light font-source-code-pro">{employee}</h1>
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
