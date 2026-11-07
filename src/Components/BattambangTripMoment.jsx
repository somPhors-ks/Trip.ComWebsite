import React, { useState } from "react";
import { battambangItemRow1, battambangItemRow2 } from "../assets/assets";
import { IoHeartSharp } from "react-icons/io5";
import { FaGripfire } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const BattambangTripMoment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedItems, setLikedItems] = useState({});

  return (
    <div className=" w-full flex flex-col gap-3 mt-5">
      <p className=" text-xl font-semibold">
        Unforgettable trip moments in Battambang
      </p>
      <div className="w-full h-auto flex items-center justify-start overflow-hidden relative transition-all duration-900">
        <div
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          className=" w-full h-auto flex items-start justify-start gap-0 transform transition-all duration-900"
        >
          {battambangItemRow2.map((bat) => {
            return (
              <article
                key={bat.id}
                className="w-[25%] shrink-0 transform transition-all duration-300 p-1.5"
              >
                <div
                  style={{ backgroundImage: `url(${bat.imgUrl})` }}
                  className="w-full h-100 overflow-hidden flex flex-col items-center justify-between gap-3 p-3 rounded-xl bg-cover bg-center bg-no-repeat cursor-pointer hover:drop-shadow transition-all duration-300"
                >
                  <div className=" w-full flex items-center justify-end gap-3">
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
                  <div className=" w-full flex flex-col gap-3">
                    <p className="text-[14px] text-white">{bat.desc}</p>
                    <div className=" w-full flex items-center justify-start gap-2">
                      <div className=" bg-white rounded-full w-8 h-8 overflow-hidden"></div>
                      <p className=" text-[14px] text-white font-semibold">
                        {bat.profileName}
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
        {currentIndex < 5 ? (
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

export default BattambangTripMoment;
