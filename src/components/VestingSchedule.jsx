import React, { useState } from "react";
import { captableContract, captableDataContract, getInstance, vestingContract } from "../utils/fhevm";
import { getReencryptPublicKey } from "../utils/RencryptPublicKey";
import moment from "moment"
import { Buffer } from "buffer";
const CAPTABLE_ADDRESS = "0x13D6c7652EaD49b377c9e7E5021D11FfaF032342";
const CAPTABLE_DATA="0x765f69182281d43E1692629303C0456743F09369";
const VESTING_ADDRESS="0xc803d26f2199d8DE7545b32976ad4763b47B692c"

const VestingSchedule = ({ onClose }) => {
  const [scheduleData, setScheduleData] = useState({
    startDate: "",
    endDate: "",
    startPercentage: "",
    linearPercentageAfterCliff: "",
    cliff: "",
    cliffPercentage:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScheduleData({
      ...scheduleData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {

     const sd=scheduleData.startDate;
     const ed=scheduleData.endDate;
     const sp=scheduleData.startPercentage;
     const lpac=scheduleData.linearPercentageAfterCliff;
     const c=scheduleData.cliff;
     const cp=scheduleData.cliffPercentage

     const so=moment(sd, "DD/MM/YYYY")
     const su=so.unix();
     console.log(su)

     const eo=moment(ed, "DD/MM/YYYY")
     const eu=eo.unix();
     console.log(eu)

     const co=moment().set('day',c)
     const cu=co.unix();
     console.log(cu)
      
     const totalVestingDuration=eu-su;


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

      
      const totalAmount =await contractDataInstance.viewCompanytotalFund(key,reencrypt.publicKey, reencrypt.signature)
      console.log("TX",totalAmount);
      const ta=await instance.decrypt(CAPTABLE_DATA,totalAmount);

      const se=await instance.encrypt32((+su));
      // const ee=await instance.encrypt32(eu);
      const tvde=await instance.encrypt32((+totalVestingDuration));
      const ce=await instance.encrypt32((cu));
      const tae=await instance.encrypt32(ta)
      const lpace=await instance.encrypt32((+lpac));
      const spe=await instance.encrypt32((+sp));
      const cpe=await instance.encrypt32((+cp));

      console.log("se",se);
      console.log("tvde",tvde);
      console.log("ce",ce);
      console.log("ta",tae)
      
      console.log("lpace",lpace);
      console.log("spe",spe);
      console.log("cpe",cpe);

      const vestingInstance=await vestingContract();
      
      const vestingParams={
        startTimestamp:se,
        cliffDurationInSeconds:ce,
        totalVestingDurationInSeconds:tvde,
        totalAmount:tae,
        EreleaseAtStartPercentage:spe,
        EreleaseAtCliffPercentage:cpe,
        ElinearReleasePercentage:lpace
      }
     

      const vr=await vestingInstance.addVestingSchedule(
        key,{
          startTimestamp:se,
          cliffDurationInSeconds:ce,
          totalVestingDurationInSeconds:tvde,
          totalAmount:t,
          EreleaseAtStartPercentage:spe,
          EreleaseAtCliffPercentage:cpe,
          ElinearReleasePercentage:lpace
        }
        )

      console.log("HEllo",vr)

      
    } catch (error) {
      console.log("Error",error)
      
    }
   
      
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end z-50 bg-black bg-opacity-50">
      <div className="lg:w-[40%] w-auto h-screen border-l bg-white border-[#BDBDBD] ">
        <div className="flex justify-between w-[100%] h-[10%] items-center border-b border-[#F4F4F4] p-5">
          <h1 className="font-source-code-pro text-xl font-semibold">
            Vesting Schedule
          </h1>
          <svg
          onClose={onClose}
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
        <form onSubmit={handleSubmit}>
          <div className="m-5 flex flex-col gap-10 w-[85%] h-[60%] ">
            <div className="flex space-x-[90px] mt-10 ">
              <div className="">
                <h1 className="font-source-code-pro text-sm text-[#212427]">
                  Start date
                </h1>
                <input
                  className=" font-source-code-pro w-[100%] p-2 focus:outline-none border border-[#BDBDBD] rounded-lg "
                  type="text"
                  name="startDate"
                  value={scheduleData.startDate}
                  onChange={handleChange}
                  placeholder="DD/MM/YYYY"
                />
              </div>
              <div className="w-[44%]">
                <h1 className="font-source-code-pro text-sm text-[#212427]">
                  End date
                </h1>
                <input
                  className="font-source-code-pro w-[100%] p-2 focus:outline-none border border-[#BDBDBD] rounded-lg "
                  type="text"
                  name="endDate"
                  value={scheduleData.endDate}
                  onChange={handleChange}
                  placeholder="DD/MM/YYYY"
                />
              </div>
            </div>

            <div className="flex justify-between mt-5 gap-5">
              <div className="">
                <h1 className="font-source-code-pro text-sm text-[#212427]">
                  Start Percentage
                </h1>
                <input
                  className="font-source-code-pro w-[94%] p-2 focus:outline-none border border-[#BDBDBD] rounded-lg "
                  type="text"
                  name="startPercentage"
                  value={scheduleData.startPercentage}
                  onChange={handleChange}
                  placeholder="Enter %"
                />
              </div>
              <div className="">
                <h1 className="font-source-code-pro  ml-2 text-sm text-[#212427]">
                  Linear Percentage after cliff
                </h1>
                <input
                  className="font-source-code-pro w-[83%] ml-[18%] p-2 focus:outline-none border border-[#BDBDBD] rounded-lg "
                  type="text"
                  name="linearPercentageAfterCliff"
                  value={scheduleData.linearPercentageAfterCliff}
                  onChange={handleChange}
                  placeholder="Enter %"
                />
              </div>
            </div>

            <div className="flex space-x-[62px] mt-10">
              <div>
                <h1 className="font-source-code-pro text-sm text-[#212427]">
                  Cliff
                </h1>
                <div className="flex items-center justify-between pr-2  w-[88%] focus:outline-none border border-[#BDBDBD] rounded-lg ">
                  <input
                    className="font-source-code-pro  ml-1 w-[100%] focus:outline-none p-2 "
                    type="text"
                    name="cliff"
                    value={scheduleData.cliff}
                    onChange={handleChange}
                    placeholder="5 Days "
                  />
                  <svg
                    className="cursor-pointer"
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 1.25L8.5 8.75L1 1.25"
                      stroke="#BDBDBD"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-[44%]">
                <h1 className="font-source-code-pro text-sm text-[#212427]">
                  Cliff Percentage
                </h1>
                <input
                  className="font-source-code-pro w-[100%] p-2 focus:outline-none border border-[#BDBDBD] rounded-lg "
                  type="text"
                  name="cliffPercentage"
                  value={scheduleData.cliffPercentage}
                  onChange={handleChange}
                  placeholder="Enter %"
                />
              </div>
            </div>  
              <div className="flex justify-between w-[100%] p-2 focus:outline-dashed border border-dashed border-[#3A74F2] rounded-lg ">
                <h1 className="text-[#3A74F2] text-sm font-source-code-pro p-1 ">
                  Next Cliff in:
                </h1>
                <h1 className="text-[#3A74F2] text-sm font-source-code-pro p-1 ">
                  DD/MM/YY
                </h1>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="font-source-code-pro text-lg bg-[#3A74F2] px-3 rounded-lg text-[#FFFFFF] cursor-pointer p-1"
                >
                  Add Schedule
                </button>
              </div>
          </div>
        </form>
      </div>
      </div>
      );
};

export default VestingSchedule;
