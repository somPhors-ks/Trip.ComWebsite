import React, { useState } from "react";
import { imageList, menuLists } from "../assets/assets";
import { LuHandHeart } from "react-icons/lu";
import { HiCalendarDateRange } from "react-icons/hi2";
import { IoIosBed } from "react-icons/io";
import HotelHomeSearch from "./HotelHomeSearch";
import FligthSearch from "./FligthSearch";

const Cover = () => {
  const menuFilter = menuLists.filter((m) => m.id <= 5);
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="w-full px-10 transition-all duration-300">
      <div
        className="w-full h-100 bg-cover bg-center bg-no-repeat rounded-2xl relative"
        style={{ backgroundImage: `url(${imageList.coverHome})` }}
      >
        <div className=" absolute top-0 left-0 w-full h-full bg-blue-600/70 flex flex-col items-center justify-start gap-4 p-6 pt-20 text-white rounded-2xl">
          <p className=" text-4xl font-semibold">
            Every check-in is a new beginning
          </p>
          <div className=" flex items-center justify-center gap-3">
            <p className=" text-[12px] flex items-center justify-center gap-2">
              <LuHandHeart className=" w-6 h-6 text-white/70" />
              <span>We price match</span>
            </p>
            {"|"}
            <p className=" text-[12px] flex items-center justify-center gap-2">
              <HiCalendarDateRange className=" w-6 h-6 text-white/70" />
              <span>Hotel booking guarantee</span>
            </p>
            {"|"}
            <p className=" text-[12px] flex items-center justify-center gap-2">
              <IoIosBed className=" w-6 h-6 text-white/70" />
              <span>Hotel stay guarantee</span>
            </p>
          </div>
        </div>
        <div className=" absolute w-[95%] top-[65%] left-[50%] translate-x-[-50%] bg-white flex flex-col items-center justify-center gap-3 p-3 rounded-xl drop-shadow-2xl">
          <div className="grid grid-cols-5 items-center justify-center gap-10 px-10">
            {menuFilter.map((menu) => {
              return (
                <button
                  onClick={() => setIsActive(menu.id)}
                  key={menu.id}
                  className={`${isActive === menu.id ? "text-blue-600" : ""} flex flex-col justify-center items-center gap-2 text-black/30 hover:text-blue-500 transition-all duration-300 cursor-pointer`}
                >
                  <span className=" text-[32px]">{menu.icon}</span>
                  <span className=" text-[12px]">{menu.labelName}</span>
                </button>
              );
            })}
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            {isActive === 1 && <HotelHomeSearch />}
            {isActive === 2 && <FligthSearch />}
            <div className="w-full flex flex-col gap-3 mt-10">
              <hr className=" text-black/20" />
              <p className="flex items-center justify-end text-[14px]">
                <button className=" text-blue-600 mr-1 cursor-pointer hover:text-blue-500 transition-all duration-300">
                  Sign in or register
                </button>
                to unlock exclusive coupons & rewards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
