import React, { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { places } from "../assets/assets";
import { IoClose } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuCircleMinus } from "react-icons/lu";

const FligthSearch = () => {
  const [isLeavingFrom, setIsLeavingFrom] = useState(false);
  const [leavingFromValue, setLeavingFromValue] = useState("Leaving From");

  const [isGoingTo, setIsGoingTo] = useState(false);
  const [goingToValue, setGoingToValue] = useState("Going To");

  const [isPassenger, setIsPassenger] = useState(false);
  const [passengerValue, setPassengerValue] = useState(1);
  const [adultValue, setAdultValue] = useState(1);
  const [childrenValue, setChildrenValue] = useState(0);
  const [infantsValue, setInfantsValue] = useState(0);

  const handleLeavingFromOpen = () => {
    setIsLeavingFrom(true);
    setIsGoingTo(false);
    setIsPassenger(false);
  };
  const handleLeavingSelected = (value) => {
    setIsLeavingFrom(false);
    setLeavingFromValue(value);
  };
  const handleLeavingCancelSelected = () => {
    setIsLeavingFrom(true);
    setLeavingFromValue("Leaving From");
  };

  const handleGoingToOpen = () => {
    setIsLeavingFrom(false);
    setIsPassenger(false);
    setIsGoingTo(true);
  };
  const handleGoingToSelected = (value) => {
    setIsGoingTo(false);
    setGoingToValue(value);
  };
  const handleGoingToCancelSelected = () => {
    setGoingToValue("Going To");
    setIsGoingTo(true);
  };

  const handlePassengerOpen = () => {
    setIsLeavingFrom(false);
    setIsGoingTo(false);
    setIsPassenger(true);
  };
  const handlePassengerDone = () => {
    setIsPassenger(false);
    setPassengerValue(adultValue + childrenValue + infantsValue);
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center gap-3">
      <div className=" w-full p-2 flex gap-5">
        <div className=" flex items-center justify-center gap-2">
          <input type="radio" id="roundTrip" name="radioChoice" />{" "}
          <label for="roundTrip" className=" text-[14px] text-black/80">
            Round-trip
          </label>
        </div>
        <div className=" flex items-center justify-center gap-2">
          <input type="radio" id="oneway" name="radioChoice" />{" "}
          <label for="oneway" className=" text-[14px] text-black/80">
            One-Way
          </label>
        </div>
        <div className=" flex items-center justify-center gap-2">
          <input type="radio" id="multyCity" name="radioChoice" />{" "}
          <label for="multyCity" className=" text-[14px] text-black/80">
            Multi-City
          </label>
        </div>
        <span className="text-[14px] text-black/20">|</span>
        <div className=" flex items-center justify-center gap-2">
          <input type="checkbox" id="nonStop" />{" "}
          <label for="nonStop" className=" text-[14px] text-black/80">
            Nonstop
          </label>
        </div>
      </div>

      {/*  */}
      <div className=" w-full grid grid-cols-4 gap-2 relative">
        <button
          onClick={handleLeavingFromOpen}
          className=" w-full flex items-center justify-start gap-2 p-3 py-4 rounded-md border border-black/20 text-[14px] text-black/80"
        >
          {leavingFromValue}
          {leavingFromValue === "Leaving From" ? (
            ""
          ) : (
            <button
              onClick={handleLeavingCancelSelected}
              className=" rounded-sm p-1 text-black/60 hover:bg-blue-50 cursor-pointer transition-all duration-300"
            >
              <IoClose />
            </button>
          )}
        </button>
        <button
          onClick={handleGoingToOpen}
          className=" w-full flex items-center justify-start p-3 py-4 rounded-md border border-black/20 text-[14px] text-black/80"
        >
          {goingToValue}
          {goingToValue === "Going To" ? (
            ""
          ) : (
            <button
              onClick={handleGoingToCancelSelected}
              className=" rounded-sm p-1 text-black/60 hover:bg-blue-50 cursor-pointer transition-all duration-300"
            >
              <IoClose />
            </button>
          )}
        </button>
        <button className=" w-full flex items-center justify-start p-3 py-4 rounded-md border border-black/20 text-[14px] text-black/80">
          Select Date
        </button>
        <button
          onClick={handlePassengerOpen}
          className=" w-full flex items-center justify-start gap-3 p-3 py-4 rounded-md border border-black/20 text-[14px] text-black/80"
        >
          <RxPerson className=" w-6 h-6 text-black/50" /> {passengerValue}{" "}
          Passenger · Economy
        </button>

        {/* Leaving From Pop up */}
        {isLeavingFrom && (
          <div className="w-100 h-120 absolute top-0 left-0 p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none">
            <p className=" text-[14px] font-semibold mb-3">Leaving From</p>
            <div className=" w-full flex flex-col gap-3">
              <button
                onClick={() => setIsLeavingFrom(false)}
                className=" absolute top-3 right-3 z-10 rounded-sm bg-blue-100 p-1 text-black/60 hover:bg-blue-50 cursor-pointer transition-all duration-300"
              >
                <IoClose />
              </button>
              {places.map((place) => {
                return (
                  <div className="w-full flex flex-col gap-3">
                    <p className=" text-[12px] text-black/40">{place.title}</p>
                    <div className="w-full grid grid-cols-3 gap-0">
                      {place.city.map((c) => {
                        return (
                          <button
                            onClick={() => handleLeavingSelected(c)}
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

        {/* Going to Pop up */}
        {isGoingTo && (
          <div className="w-100 h-120 absolute top-0 left-[20%] p-3 rounded-md shadow bg-white overflow-scroll scrollbar-none">
            <p className=" text-[14px] font-semibold mb-3">Going To</p>
            <div className=" w-full flex flex-col gap-3">
              <button
                onClick={() => setIsGoingTo(false)}
                className=" absolute top-3 right-3 z-10 rounded-sm bg-blue-100 p-1 text-black/60 hover:bg-blue-50 cursor-pointer transition-all duration-300"
              >
                <IoClose />
              </button>
              {places.map((place) => {
                return (
                  <div className="w-full flex flex-col gap-3">
                    <p className=" text-[12px] text-black/40">{place.title}</p>
                    <div className="w-full grid grid-cols-3 gap-0">
                      {place.city.map((c) => {
                        return (
                          <button
                            onClick={() => handleGoingToSelected(c)}
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

        {/* Passenger Pop up */}
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
                    <p className="text-[12px] text-black/30">
                      2 - 11 years old
                    </p>
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
                    <p className="text-[12px] text-black/30">
                      Under 2 years old
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() =>
                        infantsValue <= 0
                          ? 0
                          : setInfantsValue(infantsValue - 1)
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

      {/* btn Search */}
      <div className=" w-full flex items-center justify-end gap-3">
        <button className=" p-5 px-6 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md transition-all duration-300 cursor-pointer border border-blue-600">
          Flight + Hotels
        </button>
        <button className=" p-5 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-all duration-300 cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};

export default FligthSearch;
