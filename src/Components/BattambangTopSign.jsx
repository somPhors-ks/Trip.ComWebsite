import React, { useState } from "react";
import { battambangItemRow1 } from "../assets/assets";
import { IoHeartSharp } from "react-icons/io5";
import { FaGripfire } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const BattambangTopSign = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedItems, setLikedItems] = useState({});
  return (
    <div className=" w-full flex flex-col gap-3 mt-5">
      <p className=" text-xl font-semibold">
        Top sights you can't miss in Battambang
      </p>
      <div className="w-full h-auto flex items-center justify-start overflow-hidden relative transition-all duration-900">
        <div
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          className=" w-full h-auto flex items-start justify-start gap-0 transform transition-all duration-900"
        >
          {battambangItemRow1.map((bat) => {
            return (
              <article
                key={bat.id}
                className="w-[25%] shrink-0 transform transition-all duration-300 p-1.5"
              >
                <div
                  style={{ backgroundImage: `url(${bat.imgUrl})` }}
                  className="w-full h-100 overflow-hidden flex flex-col items-center justify-between gap-3 p-3 rounded-xl bg-cover bg-center bg-no-repeat cursor-pointer hover:drop-shadow transition-all duration-300"
                >
                  <div className=" w-full flex items-center justify-between gap-3">
                    <p className=" text-[12px] text-black/70 font-semibold p-1 bg-white rounded-md">
                      {bat.headTop}
                    </p>
                    <button
                      onClick={() =>
                        setLikedItems((prev) => ({
                          ...prev,
                          [bat.id]: !prev[bat.id],
                        }))
                      }
                      className="flex items-center justify-center p-1 rounded-full  hover:bg-white/70 transition-all duration-300 cursor-pointer"
                    >
                      <IoHeartSharp
                        className={` w-6 h-6 transition-colors ${likedItems[bat.id] ? "text-red-600" : "text-black/30"}`}
                      />
                    </button>
                  </div>
                  <div className=" w-full flex flex-col gap-1">
                    <div className="w-full flex gap-3">
                      <p className=" text-[12px] text-black/70 font-semibold p-1 bg-white rounded-md">
                        {bat.location}
                      </p>
                      <p className=" text-[12px] text-black/70 font-semibold p-1 bg-white rounded-md flex items-center justify-center gap-2">
                        <FaGripfire className="w-3 h-3 text-red-600" />
                        {bat.rate}
                      </p>
                    </div>
                    <p className=" text-[16px] font-bold text-white">
                      {bat.name}
                    </p>
                    <div className=" flex items-center justify-start ga-2">
                      <p className="text-[12px] text-white/70">
                        {bat.startRating}
                      </p>
                      <p className="text-[12px] text-white/70">
                        {bat.viewers} Viewers
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {/*  */}
        {currentIndex > 0 ? (
          <button
            onClick={() => setCurrentIndex((index) => index - 1)}
            className=" absolute left-0 translate-y-[-25%] flex items-center justify-center bg-white p-1 rounded-full cursor-pointer hover:scale-101 transition-all duration-300 shadow-md"
          >
            <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
          </button>
        ) : (
          <span className=" opacity-0">.</span>
        )}
        {currentIndex < 2 ? (
          <button
            onClick={() => setCurrentIndex((index) => index + 1)}
            className=" absolute right-0 translate-y-[-25%] flex items-center justify-center bg-white p-1 rounded-full cursor-pointer hover:scale-101 transition-all duration-300 shadow-md"
          >
            <MdOutlineKeyboardArrowRight className="w-6 h-6" />
          </button>
        ) : (
          <span className=" opacity-0">.</span>
        )}
      </div>
    </div>
  );
};

export default BattambangTopSign;
