import { BrowserProvider, AbiCoder, Contract } from "ethers";
import { initFhevm, createInstance } from "fhevmjs";

import ectABI from "../EncryptedCapTable (3).json";

export const init = async () => {
  await initFhevm();
};

const FHE_LIB_ADDRESS = "0x000000000000000000000000000000000000005d";
const CONTRACT_ADDRESS = "0xA4c5C4c33Bc4c55a0d73F3692311334546FEc78c";

export const provider = new BrowserProvider(window.ethereum);

let instance; // declare instance here so it's accessible globally

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
  const signer = await provider.getSigner();
  return new Contract(CONTRACT_ADDRESS, ectABI.abi, signer);
};
