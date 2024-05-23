import { BrowserProvider, AbiCoder, Contract } from "ethers";
import { initFhevm, createInstance } from "fhevmjs";

import captableAddress from "../JSON/EncryptedCapTable (2) (1).json";
import captableData from "../JSON/CapTableData (11).json";
import vestingabi from "../JSON/Vesting (1).json"
export const init = async () => {
  await initFhevm();
};

const FHE_LIB_ADDRESS = "0x000000000000000000000000000000000000005d";
export const CAPTABLE_ADDRESS = "0xc1972C85b58E2c14E5B2c2071C9AfCbdCD352Fb0";
export const CAPTABLE_DATA="0xe78d8b68823c5914c5ebA54421351425e3d512d7";
export const VESTING_ADDRESS="0xe5dDe0926255FEB9a082a6bf0683CFC38e5ee5b5"

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

export const captableContrac = async () => {
  await setSigner();
  return new Contract(CAPTABLE_ADDRESS, captableAddress.abi);
};


