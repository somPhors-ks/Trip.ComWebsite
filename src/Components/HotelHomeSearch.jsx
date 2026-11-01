import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";
import { RxPerson } from "react-icons/rx";
import { places } from "../assets/assets";
import { IoClose } from "react-icons/io5";
import ScheduleHotelHome from "./ScheduleHotelHome";
import { LuCircleMinus } from "react-icons/lu";
import { IoMdAddCircleOutline } from "react-icons/io";

const HotelHomeSearch = () => {
  const [isWhereTo, setIsWhereTo] = useState(false);
  const [whereToValue, setWhereToValue] = useState("Where To ?");

  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [dateValue, setDateValue] = useState("Select the date.");

  const [isPassenger, setIsPassenger] = useState(false);
  const [passengerValue, setPassengerValue] = useState(1);
  const [adultValue, setAdultValue] = useState(1);
  const [childrenValue, setChildrenValue] = useState(0);
  const [infantsValue, setInfantsValue] = useState(0);

  const handleWhereToOpen = () => {
    setIsWhereTo(true);
    setIsPassenger(false);
    setIsScheduleOpen(false);
  };
  const handleSetWhereToValue = (value) => {
    setWhereToValue(value);
    setIsWhereTo(false);
  };
  const handleWhereToCancelSelected = () => {
    setWhereToValue("Where To ?");
    setIsWhereTo(true);
  };

  const handleCalenderOpen = () => {
    setIsScheduleOpen(true);
    setIsPassenger(false);
    setIsWhereTo(false);
  };
  const getNewDate = (date) => {
    setDateValue(date);
  };
  const getIsSchedule = (value) => {
    setIsScheduleOpen(value);
  };

  const handlePassengerOpen = () => {
    setIsPassenger(true);
    setIsWhereTo(false);
    setIsScheduleOpen(false);
  };
  const handlePassengerDone = () => {
    setIsPassenger(false);
    setPassengerValue(adultValue + childrenValue + infantsValue);
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

      <button
        onClick={handleCalenderOpen}
        className="flex items-center justify-start gap-2 bg-blue-100 p-3 rounded-sm"
      >
        <FcPlanner className=" w-6 h-6 text-black/50" />
        <p className=" text-[14px]">{dateValue}</p>
      </button>

      <div className="flex items-center justify-between gap-2">
        <button
          onClick={handlePassengerOpen}
          className=" w-full flex items-center justify-start gap-2 bg-blue-100 p-3 rounded-sm"
        >
          <RxPerson className=" w-6 h-6 text-black/50" />
          <p className=" text-[14px]">{passengerValue + " Passengers."}</p>
        </button>
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
      {isScheduleOpen && (
        <div className="w-[80%] absolute top-0 right-0 p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none">
          <ScheduleHotelHome
            getNewDate={getNewDate}
            getIsSchedule={getIsSchedule}
          />
        </div>
      )}

      {/* Passenger Pop up  */}
      {isPassenger && (
        <div className="w-100 absolute top-0 right-0 p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none">
          <div className=" w-full flex flex-col gap-3">
            <p className=" text-[14px] text-right">{`${adultValue} adult, ${childrenValue} children, ${infantsValue} infant`}</p>
            <hr className="w-full text-black/20" />
            <p className=" text-[12px] text-black/50">
              Please select the exact number of passengers to view the best
              prices.
            </p>
            {/* Add Passenger */}
            <div className=" w-full flex flex-col items-center justify-center gap-5 mt-3">
              <div className=" w-full flex items-center justify-between gap-3">
                <div className=" flex flex-col gap-0">
                  <p className="text-[14px] font-semibold">Adult</p>
                  <p className="text-[12px] text-black/30">12 years +</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() =>
                      adultValue <= 1 ? 1 : setAdultValue(adultValue - 1)
                    }
                    className={` flex items-center justify-center ${adultValue === 1 ? " text-black/20" : "text-blue-600 hover:text-blue-500"} cursor-pointer transition-all duration-300`}
                  >
                    <LuCircleMinus className=" w-6 h-6" />
                  </button>
                  <p className=" w-10 text-center text-[14px] bg-blue-50 rounded-sm">
                    {adultValue}
                  </p>
                  <button
                    onClick={() =>
                      adultValue >= 10 ? 10 : setAdultValue(adultValue + 1)
                    }
                    className=" flex items-center justify-center text-blue-600 cursor-pointer hover:text-blue-500 transition-all duration-300"
                  >
                    <IoMdAddCircleOutline className=" w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className=" w-full flex items-center justify-between gap-3">
                <div className=" flex flex-col gap-0">
                  <p className="text-[14px] font-semibold">Children</p>
                  <p className="text-[12px] text-black/30">2 - 11 years old</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() =>
                      childrenValue <= 0
                        ? 0
                        : setChildrenValue(childrenValue - 1)
                    }
                    className={` flex items-center justify-center ${childrenValue === 0 ? " text-black/20" : "text-blue-600 hover:text-blue-500"} cursor-pointer transition-all duration-300`}
                  >
                    <LuCircleMinus className=" w-6 h-6" />
                  </button>
                  <p className=" w-10 text-center text-[14px] bg-blue-50 rounded-sm">
                    {childrenValue}
                  </p>
                  <button
                    onClick={() =>
                      childrenValue >= 10
                        ? 10
                        : setChildrenValue(childrenValue + 1)
                    }
                    className=" flex items-center justify-center text-blue-600 cursor-pointer hover:text-blue-500 transition-all duration-300"
                  >
                    <IoMdAddCircleOutline className=" w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className=" w-full flex items-center justify-between gap-3">
                <div className=" flex flex-col gap-0">
                  <p className="text-[14px] font-semibold">Infants on lap</p>
                  <p className="text-[12px] text-black/30">Under 2 years old</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() =>
                      infantsValue <= 0 ? 0 : setInfantsValue(infantsValue - 1)
                    }
                    className={` flex items-center justify-center ${infantsValue === 0 ? " text-black/20" : "text-blue-600 hover:text-blue-500"} cursor-pointer transition-all duration-300`}
                  >
                    <LuCircleMinus className=" w-6 h-6" />
                  </button>
                  <p className=" w-10 text-center text-[14px] bg-blue-50 rounded-sm">
                    {infantsValue}
                  </p>
                  <button
                    onClick={() =>
                      infantsValue >= 10
                        ? 10
                        : setInfantsValue(infantsValue + 1)
                    }
                    className=" flex items-center justify-center text-blue-600 cursor-pointer hover:text-blue-500 transition-all duration-300"
                  >
                    <IoMdAddCircleOutline className=" w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex items-center justify-end mt-10">
            <button
              onClick={handlePassengerDone}
              className=" py-2 px-4 rounded-md bg-blue-600 text-white text-[14px] cursor-pointer hover:bg-blue-500 transition-all duration-300"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelHomeSearch;
