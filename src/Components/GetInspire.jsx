import React, { useState } from "react";
import { inSpiredOptions } from "../assets/assets";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Anywhere from "./Anywhere";
import Battambong from "./Battambong";
import Chongqing from "./Chongqing";
import DaNang from "./DaNang";
import Dubai from "./Dubai";
import Melbourne from "./Melbourne";
import Paris from "./Paris";
import Shapporo from "./Shapporo";
import Shanghai from "./Shanghai";

const GetInspire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(1);

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className=" w-full flex flex-col gap-3 mt-5">
      <p className=" text-2xl font-semibold">Get inspired for your next trip</p>
      <div className="w-full h-34 flex items-center justify-start overflow-hidden relative transition-all duration-900">
        <div
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          className=" w-full h-full flex items-start justify-start gap-0 transform transition-all duration-900"
        >
          {inSpiredOptions.map((inspired) => {
            return (
              <article
                key={inspired.id}
                className={`w-[20%] ${selected === inspired.id ? "h-full" : "h-28"} shrink-0 transform transition-all duration-300  p-1`}
              >
                <button
                  onClick={() => setSelected(inspired.id)}
                  style={{ backgroundImage: `url(${inspired.inmageUrl})` }}
                  className=" w-full h-full bg-cover bg-center bg-no-repeat rounded-lg flex flex-col items-start justify-between p-3 cursor-pointer"
                >
                  <p className=" text-[10px] bg-white/80 p-1 rounded-sm">
                    {inspired.headTop}
                  </p>
                  <p className=" text-[20px] text-white font-bold p-1 rounded-sm">
                    {inspired.title}
                  </p>
                </button>
              </article>
            );
          })}
        </div>
        {/* BTN */}

        {currentIndex > 0 ? (
          <button
            onClick={handlePrev}
            className=" absolute left-0 translate-y-[-25%] flex items-center justify-center bg-white p-1 rounded-full cursor-pointer hover:scale-101 transition-all duration-300 shadow-md shadow-black/30"
          >
            <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
          </button>
        ) : (
          <span className=" opacity-0">.</span>
        )}
        {currentIndex < 4 ? (
          <button
            onClick={handleNext}
            className=" absolute right-0 translate-y-[-25%] flex items-center justify-center bg-white p-1 rounded-full cursor-pointer hover:scale-101 transition-all duration-300 shadow-md shadow-black/30"
          >
            <MdOutlineKeyboardArrowRight className="w-6 h-6" />
          </button>
        ) : (
          <span className=" opacity-0">.</span>
        )}
      </div>

      {/* Places Options */}
      {selected === 1 && <Anywhere />}
      {selected === 2 && <Battambong />}
      {selected === 3 && <Chongqing />}
      {selected === 4 && <DaNang />}
      {selected === 5 && <Dubai />}
      {selected === 6 && <Melbourne />}
      {selected === 7 && <Paris />}
      {selected === 8 && <Shapporo />}
      {selected === 9 && <Shanghai />}
    </div>
  );
};

export default GetInspire;
