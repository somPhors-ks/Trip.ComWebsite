import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";
import { RxPerson } from "react-icons/rx";

const HotelHomeSearch = () => {
  return (
    <div className=" w-full grid grid-cols-3 items-center justify-center gap-3 p-2 rounded-md border border-black/20">
      <button className="flex items-center justify-start gap-2 bg-blue-100 p-3 rounded-sm">
        <FaLocationDot className=" w-6 h-6 text-black/50" />
        <input
          type="text"
          placeholder="Where to ?"
          className="text-[14px] outline-none w-full"
        />
      </button>

      <div className="flex items-center justify-start gap-2 bg-blue-100 p-3 rounded-sm">
        <FcPlanner className=" w-6 h-6 text-black/50" />
        <p className=" text-[14px]">Fri, Oct 30 - Sat, Nov 28</p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className=" w-full flex items-center justify-start gap-2 bg-blue-100 p-3 rounded-sm">
          <RxPerson className=" w-6 h-6 text-black/50" />
          <p className=" text-[14px]">1 room, 2 adults, 0 children</p>
        </div>
        <button className="flex items-center justify-center gap-3 bg-blue-600 p-3 rounded-sm text-white cursor-pointer hover:bg-blue-500 transition-all duration-300">
          Search
        </button>
      </div>
    </div>
  );
};

export default HotelHomeSearch;
