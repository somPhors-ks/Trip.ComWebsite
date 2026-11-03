import React, { useState } from "react";
import { curouselImage, imageList } from "../assets/assets";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const MegaSale = () => {
  const [slideID, setSlideID] = useState(0);

  const handlePrevSlide = () => {
    setSlideID((id) => (id === 0 ? 4 : id - 1));
    console.log(slideID);
  };

  const handleNextSlide = () => {
    setSlideID((id) => (id === 4 ? 0 : id + 1));
    console.log(slideID);
  };

  return (
    <div className="w-full flex items-center justify-center gap-3 mt-10">
      <div className="w-[63%] h-50 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={imageList.megaSale}
          className="w-full h-full hover:scale-103 transition-all duration-300 cursor-pointer"
        />
      </div>
      <div className="relative w-[37%] h-50 flex items-center justify-start overflow-hidden rounded-xl">
        <div
          style={{
            transform: `translateX(-${slideID * 100}%)`,
          }}
          className={`w-auto flex items-center justify-start gap-0 transform transition-all duration-900`}
        >
          {curouselImage.map((img) => {
            return (
              <img
                key={img.id}
                src={img.image}
                className=" w-full h-full stroke-0 hover:scale-103 transition-all duration-300 cursor-pointer"
              />
            );
          })}
        </div>
        <div className=" absolute top-[50%] translate-y-[-50%] w-full flex items-center justify-between gap-3">
          <button
            onClick={handlePrevSlide}
            className=" flex items-center justify-center bg-white p-1 rounded-r-full cursor-pointer hover:scale-101 transition-all duration-300"
          >
            <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextSlide}
            className=" flex items-center justify-center bg-white p-1 rounded-l-full cursor-pointer hover:scale-101 transition-all duration-300"
          >
            <MdOutlineKeyboardArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MegaSale;
