import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { cityStation } from "../assets/assets";

const TrianSearch = () => {
  return (
    <div className=" relative w-full flex flex-col gap-3">
      <div className=" w-full grid grid-cols-2 gap-3 mt-5">
        <div className="w-full grid grid-cols-2 gap-3">
          <button className=" w-full flex flex-col items-start gap-1 border border-black/20 p-3 rounded-md">
            <span className=" text-[12px] text-black/50">From</span>
            <p className=" text-[16px] font-semibold text-black/60">
              City or Stations
            </p>
          </button>

          <button className=" w-full flex flex-col items-start gap-1 border border-black/20 p-3 rounded-md">
            <span className=" text-[12px] text-black/50">From</span>
            <p className=" text-[16px] font-semibold text-black/60">
              City or Stations
            </p>
          </button>
        </div>

        <div className=" w-full grid grid-cols-2 gap-3 border border-black/20 p-3 rounded-md">
          <button className=" w-full flex flex-col items-start gap-1">
            <span className=" text-[12px] text-black/50">Departure time</span>
            <p className=" text-[16px] font-semibold text-black/60">
              Sun, Nov 1
            </p>
          </button>

          <button className=" w-full flex flex-col items-start gap-1">
            <span className=" text-[12px] text-black/50">Retrun Time</span>
            <p className=" text-[16px] font-semibold text-black/60">
              Add return
            </p>
          </button>
        </div>
      </div>
      <div className=" w-full flex items-center justify-end">
        <button className=" p-5 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-300">
          Search
        </button>
      </div>

      {/* From Pop up */}
      <div className="w-180 h-90 absolute top-0 left-0 p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none flex flex-col gap-3">
        <div className=" w-full flex items-center justify-between">
          <p className=" text-[16px]">From Station</p>
          <button className=" p-1 rounded-sm hover:bg-blue-50 transition-all duration-300">
            <RiCloseLine className=" w-6 h-6" />
          </button>
        </div>
        <hr className="text-black/20" />
        <div className=" w-full flex flex-col items-center justify-start gap-3">
          {cityStation.map((city) => {
            return (
              <div key={city.id} className="w-full flex flex-col gap-1">
                <p className="w-full text-[14px] text-black/40 p-1 rounded-sm bg-blue-50">
                  {city.titleName}
                </p>
                <div className=" w-full grid grid-cols-5 gap-2">
                  {city.station.map((s) => {
                    return (
                      <span className=" text-[12px] text-black/40 p-1 rounded-sm hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrianSearch;
