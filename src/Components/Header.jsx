import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuEarth } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";

const Header = () => {
  return (
    <div className=" w-full flex items-center justify-between gap-3 px-10 py-5 border-b border-b-black/20">
      <div className="flex items-center justify-center gap-3">
        <p className=" text-3xl font-bold text-blue-600">
          Trip<span className=" text-amber-500">.</span>Com
        </p>
        <div className=" flex items-center justify-center p-1 rounded-sm border border-black/30 ml-10">
          <input
            className=" w-60 outline-none text-[12px] p-1"
            type="text"
            placeholder="Destination, hotel, etc"
          />
          <button className="p-1 rounded-sm bg-blue-600 text-white cursor-pointer transition-all duration-300">
            <IoSearch className=" w-6 h-6" />
          </button>
        </div>
      </div>

      <div className=" flex items-center justify-center gap-3">
        <button className=" flex items-center justify-center gap-1 p-2 px-3 rounded-sm hover:bg-black/10 cursor-pointer transition-all duration-300">
          <MdPhoneAndroid className=" w-6 h-6" />
          <span className=" text-[14px]">App</span>
        </button>

        <button className=" flex items-center justify-center gap-1 p-2 px-3 rounded-sm hover:bg-black/10 cursor-pointer transition-all duration-300">
          <span className=" text-[14px]">List your property</span>
        </button>

        <button className=" flex items-center justify-center gap-1 p-2 px-3 rounded-sm hover:bg-black/10 cursor-pointer transition-all duration-300">
          <LuEarth className=" w-6 h-6" />
          <span className=" text-[14px]">USD</span>
        </button>

        <button className=" flex items-center justify-center gap-1 p-2 px-3 rounded-sm hover:bg-black/10 cursor-pointer transition-all duration-300">
          <span className=" text-[14px]">Customer Support</span>
        </button>

        <button className=" flex items-center justify-center gap-1 p-2 px-3 rounded-sm hover:bg-black/10 cursor-pointer transition-all duration-300">
          <span className=" text-[14px]">Find Booking</span>
        </button>

        <button className=" flex items-center justify-center gap-1 p-2 px-3 rounded-sm bg-blue-600 text-white hover:bg-blue-500 cursor-pointer transition-all duration-300">
          <span className=" text-[14px]">Sign in/register</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
