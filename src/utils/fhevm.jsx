import { BrowserProvider, AbiCoder, Contract } from "ethers";
import { initFhevm, createInstance } from "fhevmjs";

import captableAddress from "../JSON/EncryptedCapTable (4).json";
import captableData from "../JSON/CapTableData (2).json";
import vestingabi from "../JSON/Vesting (1).json"
export const init = async () => {
  await initFhevm();
};

const FHE_LIB_ADDRESS = "0x000000000000000000000000000000000000005d";
const CAPTABLE_ADDRESS = "0x13D6c7652EaD49b377c9e7E5021D11FfaF032342";
const CAPTABLE_DATA="0x765f69182281d43E1692629303C0456743F09369";
const VESTING_ADDRESS="0xc803d26f2199d8DE7545b32976ad4763b47B692c"

export const provider = new BrowserProvider(window.ethereum);
export let signer;
let instance; 

export const setSigner = async () => {
  signer = await provider.getSigner();
};


export const createFhevmInstance = async () => {
  const network = await provider.getNetwork();
  const chainId = +network.chainId.toString();

  // Get blockchain public key
  const ret = await provider.call({
    to: FHE_LIB_ADDRESS,
    data: "0xd9d47bb001",
  });
  const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
  const publicKey = decoded[0];
  instance = await createInstance({ chainId, publicKey }); // initialize instance here
  return instance; // return instance
};

export const getInstance = async () => {
  await init();
  return instance || (await createFhevmInstance()); // return the created instance
};

export const captableContract = async () => {
  await setSigner();
  return new Contract(CAPTABLE_ADDRESS, captableAddress.abi, signer);
};

export const captableDataContract = async () => {
  await setSigner();
  return new Contract(CAPTABLE_DATA, captableData.abi, signer);
};

export const vestingContract=async()=>{
  await setSigner();
  return new Contract(VESTING_ADDRESS,vestingabi.abi,signer)
}
