import React, { useState } from "react";
import { imageList, menuLists } from "../assets/assets";
import { LuHandHeart } from "react-icons/lu";
import { HiCalendarDateRange } from "react-icons/hi2";
import { IoIosBed } from "react-icons/io";
import HotelHomeSearch from "./HotelHomeSearch";
import FligthSearch from "./FligthSearch";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import TrianSearch from "./TrianSearch";

const Cover = () => {
  const menuFilter = menuLists.filter((m) => m.id <= 6);
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="w-full transition-all duration-300 z-100">
      <div
        className="w-full h-auto bg-cover bg-center bg-no-repeat rounded-2xl transform"
        style={{
          backgroundImage: `url(${isActive === 1 ? imageList.coverHome1 : isActive === 2 ? imageList.coverHome2 : isActive === 3 ? imageList.coverHome3 : isActive === 4 ? imageList.coverHome4 : isActive === 5 ? imageList.coverHome5 : imageList.coverHome6})`,
        }}
      >
        <div className=" w-full h-full bg-blue-600/70 flex flex-col items-center justify-start gap-4 p-6 pt-20 text-white rounded-2xl">
          <p className=" text-4xl font-semibold">
            {isActive === 1 && <span>Every check-in is a new beginning</span>}
            {isActive === 2 && <span>Your next take-off awaits</span>}
            {isActive === 3 && <span>Explore Europe & Asia by rail</span>}
            {isActive === 4 && <span>Book your ride for the road</span>}
            {isActive === 5 && <span>Discover places and things to do</span>}
            {isActive === 6 && <span>Save more, travel more</span>}
          </p>
          <div className=" flex items-center justify-center gap-3">
            {isActive === 1 && (
              <p className=" text-[12px] flex items-center justify-center gap-2">
                <LuHandHeart className=" w-6 h-6 text-green-400" />
                <span>We price match</span>
              </p>
            )}
            {isActive === 2 && (
              <p className=" text-[12px] flex items-center justify-center gap-2">
                <LuHandHeart className=" w-6 h-6 text-green-400" />
                <span>Join 300M+ travelers</span>
              </p>
            )}
            {isActive === 3 && (
              <p className=" text-[12px] flex items-center justify-center gap-2">
                <BiSolidOffer className=" w-6 h-6 text-green-400" />
                <span>Official partner of global rail operators</span>
              </p>
            )}
            {isActive === 4 && (
              <p className=" text-[12px] flex items-center justify-center gap-2">
                <MdLocalOffer className=" w-6 h-6 text-green-400" />
                <span>Flyer/hotel guest exclusive offers</span>
              </p>
            )}
            {isActive === 5 && (
              <p className=" text-[12px] flex items-center justify-center gap-2">
                <LuHandHeart className=" w-6 h-6 text-green-400" />
                <span>Reliable support</span>
              </p>
            )}
            {isActive === 6 && (
              <p className=" text-[12px] flex items-center justify-center gap-2">
                <MdLocalOffer className=" w-6 h-6 text-green-400" />
                {isActive === 1 && <span>Exclusive package discount</span>}
              </p>
            )}
            {"|"}
            <p className=" text-[12px] flex items-center justify-center gap-2">
              <HiCalendarDateRange className=" w-6 h-6 text-green-400" />
              {isActive === 1 && <span>Hotel booking guarantee</span>}
              {isActive === 2 && <span>Train booking guarantee</span>}
              {isActive === 3 && <span>Price promise</span>}
              {isActive === 4 && <span>Transport booking guarantee</span>}
              {isActive === 5 && <span>Booking guarantee</span>}
              {isActive === 6 && <span>Flight & Hotel booking guarantee</span>}
            </p>
            {"|"}
            <p className=" text-[12px] flex items-center justify-center gap-2">
              {isActive === 1 && (
                <IoIosBed className=" w-6 h-6 text-green-400" />
              )}
              {isActive === 2 && (
                <BiSolidOffer className=" w-6 h-6 text-green-400" />
              )}
              {isActive === 3 && (
                <BiSolidOffer className=" w-6 h-6 text-green-400" />
              )}
              {isActive === 4 && (
                <BsLightningChargeFill className=" w-6 h-6 text-green-400" />
              )}
              {isActive === 5 && (
                <MdLocalOffer className=" w-6 h-6 text-green-400" />
              )}
              {isActive === 6 && (
                <MdLocalOffer className=" w-6 h-6 text-green-400" />
              )}
              {isActive === 1 && <span>Hotel stay guarantee</span>}
              {isActive === 2 && <span>Award-winning service</span>}
              {isActive === 3 && <span>Price promise</span>}
              {isActive === 4 && <span>Rapid customer support</span>}
              {isActive === 5 && <span>Great savings</span>}
              {isActive === 6 && <span>Get rewarded for traveling</span>}
            </p>
          </div>
          <div className=" w-full bg-white flex flex-col items-center justify-center gap-3 p-3 rounded-xl drop-shadow-2xl">
            <div className="grid grid-cols-6 items-center justify-center gap-10 px-10">
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

            <div className="w-full flex flex-col items-center justify-center text-black transform">
              {isActive === 1 && <HotelHomeSearch />}
              {isActive === 2 && <FligthSearch />}
              {isActive === 3 && <TrianSearch />}
              <div className="w-full flex flex-col gap-3 mt-8">
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
    </div>
  );
};

export default Cover;
