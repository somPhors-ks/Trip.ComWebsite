import React from "react";
import { IoClose } from "react-icons/io5";

const TermAndConditions = ({ conData, getCloseData }) => {
  return (
    <div className=" relative w-[45%] bg-white rounded-xl p-5 flex flex-col gap-2">
      <p className=" text-xl font-semibold mb-5">Term And Conditions</p>
      {conData.map((con, index) => (
        <p key={index} className=" text-[12px] text-black">
          {index + 1 + ". " + con}
        </p>
      ))}
      <button
        onClick={() => getCloseData(false)}
        className=" absolute top-3 right-3 cursor-pointer p-1 rounded-md hover:bg-blue-50 transition-all duration-300"
      >
        <IoClose className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TermAndConditions;
