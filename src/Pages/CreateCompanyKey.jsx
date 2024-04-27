import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo_2 from "../assets/logo_2.png";
import { Connect } from "../Connect";
import { captableContract, getInstance } from "../utils/fhevm";
import { getReencryptPublicKey } from "../utils/RencryptPublicKey";


import { Buffer } from "buffer";
import CompanyKey from "./CompanyKey";
window.Buffer=Buffer
const CONTRACT_ADDRESS = "0xA4c5C4c33Bc4c55a0d73F3692311334546FEc78c";



export default function CreateCompanyKey() {
  const [companyName, setCompanyName] = useState("");
  const [registrationYear, setRegistrationYear] = useState("");
  let [key,setKey]=useState("")
  const [generating, setGenerating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  
  // Extracting companyName and registrationYear from URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const companyNameParam = searchParams.get("companyName");
    const registrationYearParam = searchParams.get("registrationYear");
    if (companyNameParam) {
      setCompanyName(companyNameParam);
    }
    if (registrationYearParam) {
      setRegistrationYear(registrationYearParam);
    }
  }, [location.search]);

  const handleClick=()=>{
    navigate('/alreadyOwner')
  }
  const handleGeneratekey = async (e) => {
    e.preventDefault();
    setGenerating(true)
    try {
      const instance = await getInstance();
      const reencrypt = await getReencryptPublicKey(CONTRACT_ADDRESS);
      console.log(reencrypt);
      console.log(await instance.hasKeypair(CONTRACT_ADDRESS));

      // const encrypted = await instance.encrypt32(companyName,registrationYear);
      // console.log("Encrypted", encrypted);
      const contractInstance = await captableContract();

       const tx=await contractInstance.createCompanykey(companyName,registrationYear)
       const receipt = await tx.wait();
       console.log("Transaction hash:", receipt);
       
       
      key=receipt.logs[0].data
      console.log(key)
      if(key>0){
       
        navigate(`/companyKey?companyKey=${key}`)
      }

    } catch (error) {
      console.error("Error sending transaction:", error);
      throw error;
    }
  };

  // useEffect(() => {
  //   if (key.length > 0) {
      
  //     navigate(`/companyKey`);
  //   }
  // }, [key, navigate]);
  

  return (
    <>
     {key.length>0&&<CompanyKey companyKey={key}/>}
      <div className="w-screen  h-screen flex flex-row items-center justify-between gap-[10%]">
        <div className="border rounded-[20px] w-[40%] ml-[10%] sm:ml-20 h-[60%] border-[#E8E8E8]">
          <form className="text-center mt-10">
            <div className="text-center mt-10">
              <h1 className="font-source-code-pro text-[30px] text-[#212427]">
                Create Company Key
              </h1>
              <h1 className="text-[#5B5B5D] mt-[2%] text-center font-source-code-pro">
                Your company details are:
              </h1>
            </div>

            <h1 className="font-medium font-source-code-pro mt-5 mb-2 text-sm text-[#212427] ">
              Company Name
            </h1>
            <input
              className="ml-5 w-[90%] h-[56px] font-source-code-pro focus:outline-[#3A74F2] border border-[#BDBDBD] rounded-xl px-2"
              type="text"
              value={companyName}
              readOnly
            />

            <h1 className="font-medium font-source-code-pro text-[15px] mt-5 mb-2 text-[#212427]">
              Registration Year
            </h1>
            <input
              className="ml-5 w-[90%] h-[56px] font-source-code-pro focus:outline-[#3A74F2] border border-[#BDBDBD] rounded-xl px-2"
              type="text"
              value={registrationYear}
              readOnly
            />

            {generating ? (
              <h1 className="ml-5 text-center w-[90%] font-source-code-pro cursor-pointer rounded-lg bg-[#3A74F2] px-[24px] py-[12px] mr-[10px] mt-[3.33%] text-[#FFFFFF]">
                Generating Company Key ...
              </h1>
              
            ) : (
              <button
                onClick={handleGeneratekey}
                className="ml-5 text-center w-[90%] font-source-code-pro cursor-pointer rounded-lg bg-[#3A74F2] px-[24px] py-[12px] mr-[10px] mt-[3.33%] text-[#FFFFFF]"
              >
                Generate Company Key
              </button>
            )}
          </form>
          
        </div>

        <div className="rounded-[10%] w-[45%] h-[90%] mr-4 md:mr-20 md:ml-0 sm:ml-4">
          <div className="rounded-[5%] h-[100%] w-[100%] bg-[#3A74F2] text-left">
            <img className="pt-5 w-[30%]" src={logo_2} alt="" />
            <div className="w-[90%] pt-20 pl-10">
              <h1 className="font-source-code-pro text-[#FFFFFF] text-[400%]">
                Private Captable
              </h1>

              <h1 className="font-source-code-pro text-[#FFFFFF] text-[400%]">
                Built on FHE
              </h1>

              <h1 className="font-source-code-pro mt-10 text-[#FFFFFF] text-[100%]">
                Allocate your token now privately.
              </h1>
            </div>

            <h1 onClick={handleClick} className=" font-source-code-pro mt-[30%] pl-10 pb-10 text-[#FFFFFF] text-[100%] flex gap-2 items-center hover:underline cursor-pointer">
              Already have a Company
              <svg
                width="15"
                height="15"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:underline"
              >
                <path
                  d="M1.5 16.5L16.5 1.5M16.5 1.5L5.25 1.5M16.5 1.5L16.5 12.75"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h1>
          </div>
        </div>
      </div>
      
    </>
  );
}
