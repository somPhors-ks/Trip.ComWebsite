import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { cityStation } from "../assets/assets";
import TrianDepartureTime from "./TrianDepartureTime";
import TrianReturnTime from "./TrianReturnTime";

const TrianSearch = () => {
  const [isFromStation, setIsFromStation] = useState(false);
  const [fromStationValue, setFromStationValue] = useState("City or Stations");

  const [isToStation, setIsToStation] = useState(false);
  const [toStationValue, setToStationValue] = useState("City or Stations");

  const [isDepartureOpen, setIsDepartureOpen] = useState(false);
  const [departureValuse, setDepatureValue] = useState("Add Departure");

  const [isReturnOpen, setIsReturnOpen] = useState(false);
  const [returnValus, setReturnValue] = useState("Add Return");

  const handleFromStationOpen = () => {
    setIsFromStation(true);
    setIsToStation(false);
    setIsDepartureOpen(false);
    setIsReturnOpen(false);
  };
  const handleSelectFromValue = (value) => {
    setFromStationValue(value);
    setIsFromStation(false);
  };

  const handleSelectToValue = () => {
    setIsToStation(true);
    setIsFromStation(false);
    setIsDepartureOpen(false);
    setIsReturnOpen(false);
  };
  const handleSelecttoValue = (value) => {
    setToStationValue(value);
    setIsToStation(false);
  };

  const handleDepartureOpen = () => {
    setIsDepartureOpen(true);
    setIsFromStation(false);
    setIsToStation(false);
    setIsReturnOpen(false);
  };
  const getDepatureDate = (date) => {
    setDepatureValue(date);
  };
  const getDepartureOpen = (data) => {
    setIsDepartureOpen(data);
  };

  const handleReturnOpen = () => {
    setIsReturnOpen(true);
    setIsDepartureOpen(false);
    setIsFromStation(false);
    setIsToStation(false);
  };
  const getReturnDate = (date) => {
    setReturnValue(date);
  };
  const getReturnOpen = (data) => {
    setIsReturnOpen(data);
  };
  return (
    <div className=" relative w-full flex flex-col gap-3 mt-5">
      <div className=" w-full grid grid-cols-2 gap-3 ">
        <div className="w-full grid grid-cols-2 gap-3">
          <button
            onClick={handleFromStationOpen}
            className=" w-full flex flex-col items-start gap-1 border border-black/20 p-3 rounded-md cursor-pointer"
          >
            <span className=" text-[12px] text-black/50">From</span>
            <p className=" text-[14px] font-semibold text-black/80">
              {fromStationValue}
            </p>
          </button>

          <button
            onClick={handleSelectToValue}
            className=" w-full flex flex-col items-start gap-1 border border-black/20 p-3 rounded-md cursor-pointer"
          >
            <span className=" text-[12px] text-black/50">To</span>
            <p className=" text-[14px] font-semibold text-black/80">
              {toStationValue}
            </p>
          </button>
        </div>

        <div className=" w-full grid grid-cols-2 gap-3 border border-black/20 p-0 rounded-md">
          <button
            onClick={handleDepartureOpen}
            className=" w-full flex flex-col items-start justify-center gap-1 p-1 px-3 rounded-sm cursor-pointer hover:bg-blue-50 transition-all duration-300"
          >
            <span className=" text-[12px] text-black/50">Departure time</span>
            <p className=" text-[14px] font-semibold text-black/80">
              {departureValuse}
            </p>
          </button>

          <button
            onClick={handleReturnOpen}
            className=" w-full flex flex-col items-start justify-center gap-1 p-1 px-3 rounded-sm cursor-pointer hover:bg-blue-50 transition-all duration-300"
          >
            <span className=" text-[12px] text-black/50">Retrun Time</span>
            <p className=" text-[16px] font-semibold text-black/60">
              {returnValus}
            </p>
          </button>
        </div>
      </div>
      <div className=" w-full flex items-center justify-end">
        <button className=" p-5 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-300 cursor-pointer">
          Search
        </button>
      </div>

      {/* From Pop up */}
      {isFromStation && (
        <div className="w-180 h-90 absolute top-0 left-0 p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none flex flex-col gap-3">
          <div className=" w-full flex items-center justify-between">
            <p className=" text-[16px]">From Station</p>
            <button
              onClick={() => setIsFromStation(false)}
              className=" p-1 rounded-sm hover:bg-blue-50 transition-all duration-300 cursor-pointer"
            >
              <RiCloseLine className=" w-6 h-6" />
            </button>
          </div>
          <hr className="text-black/20" />
          <div className=" w-full flex flex-col items-center justify-start gap-3">
            {cityStation.map((city) => {
              return (
                <div key={city.id} className="w-full flex flex-col gap-1">
                  <p className="w-full text-[14px] text-black/80 p-1 rounded-sm bg-blue-50">
                    {city.titleName}
                  </p>
                  <div className=" w-full grid grid-cols-4 gap-2">
                    {city.station.map((s) => {
                      return (
                        <button
                          onClick={() => handleSelectFromValue(s)}
                          className=" text-[12px] text-black/40 text-left p-1 rounded-sm hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                        >
                          {s}
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

      {/* To Pop up */}
      {isToStation && (
        <div className="w-180 h-90 absolute top-0 left-0 p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none flex flex-col gap-3">
          <div className=" w-full flex items-center justify-between">
            <p className=" text-[16px]">From Station</p>
            <button
              onClick={() => setIsToStation(false)}
              className=" p-1 rounded-sm hover:bg-blue-50 transition-all duration-300 cursor-pointer"
            >
              <RiCloseLine className=" w-6 h-6" />
            </button>
          </div>
          <hr className="text-black/20" />
          <div className=" w-full flex flex-col items-center justify-start gap-3">
            {cityStation.map((city) => {
              return (
                <div key={city.id} className="w-full flex flex-col gap-1">
                  <p className="w-full text-[14px] text-black/80 p-1 rounded-sm bg-blue-50">
                    {city.titleName}
                  </p>
                  <div className=" w-full grid grid-cols-4 gap-2">
                    {city.station.map((s) => {
                      return (
                        <button
                          onClick={() => handleSelecttoValue(s)}
                          className=" text-[12px] text-black/40 text-left p-1 rounded-sm hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                        >
                          {s}
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

      {/* Departure Time Pop up */}
      {isDepartureOpen && (
        <div className="w-[80%] absolute top-0 right-0 p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none flex flex-col gap-3">
          <TrianDepartureTime
            getNewDate={getDepatureDate}
            getIsSchedule={getDepartureOpen}
          />
        </div>
      )}

      {/* Return Time Pop up */}
      {isReturnOpen && (
        <div className="w-[80%] absolute top-0 right-0 p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none flex flex-col gap-3">
          <TrianReturnTime
            getNewDate={getReturnDate}
            getIsSchedule={getReturnOpen}
          />
        </div>
      )}
    </div>
  );
};

export default TrianSearch;
