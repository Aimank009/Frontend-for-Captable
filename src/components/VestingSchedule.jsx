import React, { useState } from "react";
import { captableContract, getInstance } from "../utils/fhevm";
import { getReencryptPublicKey } from "../utils/RencryptPublicKey";
import moment from "moment"
const CONTRACT_ADDRESS = "0xA4c5C4c33Bc4c55a0d73F3692311334546FEc78c";

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
    const instance = await getInstance();
      const reencrypt = await getReencryptPublicKey(CONTRACT_ADDRESS);
      console.log(reencrypt);
      console.log(await instance.hasKeypair(CONTRACT_ADDRESS));

      const contractInstance = await captableContract();
      

      const startDate=scheduleData.startDate
      const endDate=scheduleData.endDate
      const startPercentage=scheduleData.startPercentage
      const linearPercentageAfterCliff=scheduleData.linearPercentageAfterCliff
      const cliff=scheduleData.cliff
      const cliffPercentage=scheduleData.cliffPercentage
      
      const amount=await instance.totalAllocation
      
      
      
      const startDateUnix=moment(startDate,"D/M/YYYY");
      const startunixTime = startDateUnix.unix();
      console.log(startunixTime)

      const endDateUnix=moment(endDate,"D/M/YYYY");
      const endunixTime = endDateUnix.unix();
      console.log(endunixTime)

      const totalVestingDuration=startunixTime+endunixTime

      const cliffUnix=moment(cliff);
      const cliffunixTime = cliffUnix.unix();
      console.log(cliffunixTime)
      
      const startCipher=await instance.encrypt32(startunixTime)
      const endCipher=await instance.encrypt32(endunixTime)
      const startPercentageCipher=await instance.encrypt32(startPercentage)
      const linearPercentageAfterCliffCipher=await instance.encrypt32(linearPercentageAfterCliff)
      const cliffPercentageCipher=await instance.encrypt32(cliffPercentage)
      const totalVestingDurationCipher=await instance.encrypt32(totalVestingDuration)
      const cliffCipher=await instance.encrypt32(cliffunixTime)




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
            <div className="flex justify-between mt-10 gap-5">
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
              <div>
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
                  className="font-source-code-pro w-[100%] p-2 focus:outline-none border border-[#BDBDBD] rounded-lg "
                  type="text"
                  name="startPercentage"
                  value={scheduleData.startPercentage}
                  onChange={handleChange}
                  placeholder="Enter %"
                />
              </div>
              <div className="border ml-[10%]">
                <h1 className="font-source-code-pro  text-sm text-[#212427]">
                  Linear Percentage after cliff
                </h1>
                <input
                  className="font-source-code-pro w-[100%] p-2 focus:outline-none border border-[#BDBDBD] rounded-lg "
                  type="text"
                  name="endPercentage"
                  value={scheduleData.linearPercentageAfterCliff}
                  onChange={handleChange}
                  placeholder="Enter %"
                />
              </div>
            </div>

            <div className="flex  gap-5">
              <div>
                <h1 className="font-source-code-pro text-sm text-[#212427]">
                  Cliff
                </h1>
                <div className="flex items-center justify-between pr-2  w-[85%] focus:outline-none border border-[#BDBDBD] rounded-lg ">
                  <input
                    className="font-source-code-pro  ml-1 w-[46%] p-2 "
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
              <div className="">
                <h1 className="font-source-code-pro text-sm text-[#212427]">
                  Cliff Percentage
                </h1>
                <input
                  className="font-source-code-pro w-[100%] p-2 focus:outline-none border border-[#BDBDBD] rounded-lg "
                  type="text"
                  name="startPercentage"
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
