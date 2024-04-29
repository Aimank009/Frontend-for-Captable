import React from 'react'
import data from "../DATA/data.json"

export default function DataView() {



  
  return (
    <>
        {data.map((i) => (
        <div key={i.id} className={`flex h-[100px] mt-[10px]   bg-[${getbackgroundColor(i.id)}]`}>
          <div className='px-6 w-[280px] py-6'>
            <h1 className='font-[500] text-[14px]'>{i.stakeholder_name}</h1>
            <h1 className='font-[500] text-[#76787A] text-[12px]'>{i.hashNo}</h1>
          </div>
          <div className='w-[280px] h-[100px] px-6 py-6'>
            <h1 className='text-[14px] font-[500]'>{i.total_allocation}</h1>
          </div>
          <div className='w-[280px] h-[100px] px-6 py-6'>
            <h1 className='text-[14px] font-[500]'>{i.unlocked_token}</h1>
          </div>
          <div className='w-[280px] h-[100px] px-6 py-6'>
            <h1 className='text-[14px] font-[500]'>{i.claimed}</h1>
          </div>
          <div className='w-[280px] h-[100px] px-6 py-6'>
            <h1 className={ ` text-[14px] font-[500]'  ${getwalletcolor(i.wallet.balance)}`}>{i.wallet.balance}</h1>
          </div> 
          <div className='w-[280px]  h-[100px] px-6 py-6'>
            <h1 className={`text-[14px]  text-center font-[500] ${getStatusTextStyle(i.status)}`}>{i.status}</h1>
          </div>
        </div>
      ))}
   </>
  )
}function getwalletcolor(wallet) {
    switch (wallet) {
      case "Add a Wallet":
        return "font-semibold text-blue-600"
      default:
        return 'text-black';
    }
  }
 
 function getbackgroundColor(id) {
    console.log(id)
    if(id%2==0){
       return  "#F9F9F9"
    } else {
       return "#000000"
    
 }
   
 
 }
 
   
 
 
 // Function to get the text style based on status
 function getStatusTextStyle(status) {
   switch (status ) {
       
     case "Up to Date":
       return 'text-green-600  border w-[112px] rounded-xl  bg-[#F0F8F0]'; // Green text color
     case 'Missing Wallet':
       return 'text-red-600 border w-[112px] rounded-xl bg-[#FFEBEB]' ; // Red text color
     case 'Claim available':
       return 'text-orange-600 border w-[112px] rounded-xl bg-[#FDF2E0] ' ; // Orange text color
     default:
       return ''; // Default text color
   }
   
 }