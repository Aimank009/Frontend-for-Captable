import React,{useState} from "react";
import Add from './Add'
export default function AllocationsDashboard() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
    {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>}
      <div className="  flex items-center gap-4 bg-white w-[full] h-[80px] ml-[260px]  border-b border-gray-300  ">
        <h1 className="ml-[20px] text-2xl font-semibold">Allocations</h1>

        <button className=" flex items-center  w-[161px] gap-2 h-[48px] border rounded-[12px] border-[#2B5A9D]"
        onClick={handleClick}>
          <svg
            className="ml-2"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0.75V13.25M13.25 7H0.75"
              stroke="#2B5A9D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Add Employee
        </button>
      </div>
      {open && <Add onClose={handleClose} />}
    </>
  );
}
