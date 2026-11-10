import React, { useState } from "react";
import { battambangHotel } from "../assets/assets";
import { VscStarFull } from "react-icons/vsc";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const BattambangHotels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className=" w-full flex flex-col gap-3 mt-5">
      <p className=" text-xl font-semibold">
        Unwind in our selected hotels in Battambang
      </p>
      <div className="w-full h-auto flex items-center justify-start overflow-hidden relative transition-all duration-900">
        <div
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          className=" w-full h-auto flex items-start justify-start gap-0 transform transition-all duration-900"
        >
          {battambangHotel.map((item) => {
            return (
              <article
                key={item.id}
                className="w-[25%] shrink-0 transform transition-all duration-300 p-1.5"
              >
                <div className=" relative w-full flex flex-col items-center justify-center gap-3 border border-black/20 overflow-hidden rounded-xl">
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className=" w-full h-55 bg-cover bg-center bg-no-repeat"
                  ></div>
                  <div className=" w-full h-40 flex flex-col items-start justify-between gap-3 p-3 pt-0">
                    <div className="w-full">
                      <p className=" text-[12px] text-black/50">
                        {item.location}
                      </p>
                      <p className=" text-[16px] font-semibold">{item.name}</p>
                      <div className=" flex items-center justify-start gap-1">
                        {Array.from({ length: item.star }).map((_, index) => {
                          return (
                            <VscStarFull className=" text-amber-400 w-4 h-4" />
                          );
                        })}
                      </div>
                      <div className=" flex items-center justify-start gap-3 mt-2">
                        <div className="bg-blue-600 text-white text-[12px] px-2 py-1 rouded-shap">
                          {item.rating}/10
                        </div>
                        <p className=" text-[12px] text-black/50">
                          {item.review} Review
                        </p>
                      </div>
                    </div>
                    <p className=" text-[14px] text-black/80">
                      From USD ${item.price}{" "}
                      <s className=" text-black/30">
                        {item.fullPrice === null
                          ? ""
                          : `USD $${item.fullPrice}`}
                      </s>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
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
        {currentIndex < 6 ? (
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

export default BattambangHotels;
