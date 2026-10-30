import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";
import { RxPerson } from "react-icons/rx";
import { places } from "../assets/assets";
import { IoClose } from "react-icons/io5";

const HotelHomeSearch = () => {
  const [isWhereTo, setIsWhereTo] = useState(false);
  const [whereToValue, setWhereToValue] = useState("Where To ?");

  const handleWhereToOpen = () => {
    setIsWhereTo(true);
  };
  const handleSetWhereToValue = (value) => {
    setWhereToValue(value);
    setIsWhereTo(false);
  };
  const handleWhereToCancelSelected = () => {
    setWhereToValue("Where To ?");
    setIsWhereTo(true);
  };

  return (
    <div className=" relative w-full grid grid-cols-3 items-center justify-center gap-3 p-2 rounded-md border border-black/20 mt-5">
      <button
        onClick={handleWhereToOpen}
        className="flex items-center justify-start gap-2 bg-blue-100 p-3 rounded-sm"
      >
        <FaLocationDot className=" w-6 h-6 text-black/50" />
        <p className="text-[14px] flex items-center justify-start gap-2 text-black/80 w-full">
          {whereToValue}
          {whereToValue === "Where To ?" ? (
            ""
          ) : (
            <button
              onClick={handleWhereToCancelSelected}
              className=" rounded-sm p-1 text-black/60 hover:bg-blue-50 cursor-pointer transition-all duration-300"
            >
              <IoClose />
            </button>
          )}
        </p>
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

      {/* Where To Pop up  */}
      {isWhereTo && (
        <div className="w-100 h-120 absolute top-0 left-0 p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none">
          <p className=" text-[14px] font-semibold mb-3">Where To ?</p>
          <div className=" w-full flex flex-col gap-3">
            <button
              onClick={() => setIsWhereTo(false)}
              className=" absolute top-3 right-3 z-10 rounded-sm bg-blue-100 p-1 text-black/60 hover:bg-blue-50 cursor-pointer transition-all duration-300"
            >
              <IoClose />
            </button>
            {places.map((place) => {
              return (
                <div className="w-full flex flex-col gap-3" key={place.id}>
                  <p className=" text-[12px] text-black/40">{place.title}</p>
                  <div className="w-full grid grid-cols-3 gap-0">
                    {place.city.map((c) => {
                      return (
                        <button
                          key={c}
                          onClick={() => handleSetWhereToValue(c)}
                          className=" py-2 px-3 rounded-sm hover:bg-blue-100 text-[12px] text-left text-black/80 cursor-pointer transition-all duration-300"
                        >
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Schedule Pop up  */}
    </div>
  );
};

export default HotelHomeSearch;
