import { BrowserProvider, AbiCoder, Contract } from "ethers";
import { initFhevm, createInstance } from "fhevmjs";

import captableAddress from "../JSON/EncryptedCapTable (6).json";
import captableData from "../JSON/CapTableData (4).json";
import vestingabi from "../JSON/Vesting (2).json"
export const init = async () => {
  await initFhevm();
};

const FHE_LIB_ADDRESS = "0x000000000000000000000000000000000000005d";
export const CAPTABLE_ADDRESS = "0x325996bC4d37e5626059a1205dfa683353744002";
export const CAPTABLE_DATA="0x70Cab6bd28045BD3cd7d0aef8aD729c0bB348B92";
export const VESTING_ADDRESS="0xb270f6E9e903e79508efed0e52982eBA063F6bc9"

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

export const captableContrac = async () => {
  await setSigner();
  return new Contract(CAPTABLE_ADDRESS, captableAddress.abi);
};

export const captableDataContract = async () => {
  await setSigner();
  return new Contract(CAPTABLE_DATA, captableData.abi, signer);
};

export const vestingContract=async()=>{
  await setSigner();
  return new Contract(VESTING_ADDRESS,vestingabi.abi,signer)
}



