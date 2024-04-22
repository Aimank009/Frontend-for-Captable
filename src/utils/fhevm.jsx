import { BrowserProvider, AbiCoder,Contract } from "ethers";
import { initFhevm, createInstance } from "fhevmjs";
import ectABI from "./EncryptedCapTable.json"


export const init = async () => {
  await initFhevm();
};

// TFHE.sol contract address
// From https://github.com/zama-ai/fhevmjs/blob/c4b8a80a8783ef965973283362221e365a193b76/bin/fhevm.js#L9
const FHE_LIB_ADDRESS = "0x000000000000000000000000000000000000005d";
// 0x213f4e126ff71c86CE91103AE91049c4D849C773
export const provider = new BrowserProvider(window.ethereum);

let instance;

export const createFhevmInstance = async () => {
  const network = await provider.getNetwork();
  const chainId = +network.chainId.toString();
  const signer=provider.getSigner()


  const contract=new Contract(CONTRACT_ADDRESS,ectABI,signer)
  console.log(contract.addEmp)

  // Get blockchain public key
  const ret = await provider.call({
    to: FHE_LIB_ADDRESS,
    // first four bytes of keccak256('fhePubKey(bytes1)') + 1 byte for library
    
    data: "0xd9d47bb001",
  });
  const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
  const publicKey = decoded[0];
  instance = await createInstance({ chainId, publicKey });
};

export const getInstance = async () => {
  await init();
  await createFhevmInstance();
  return instance;
};



const CONTRACT_ADDRESS ="0x213f4e126ff71c86CE91103AE91049c4D849C773";



