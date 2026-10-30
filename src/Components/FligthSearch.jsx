import React, { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { places } from "../assets/assets";
import { IoClose } from "react-icons/io5";

const FligthSearch = () => {
  const [isLeavingFrom, setIsLeavingFrom] = useState(false);
  const [leavingFromValue, setLeavingFromValue] = useState("Leaving From");

  const [isGoingTo, setIsGoingTo] = useState(false);
  const [goingToValue, setGoingToValue] = useState("Going To");

  const handleLeavingFromOpen = () => {
    setIsLeavingFrom(true);
    setIsGoingTo(false);
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
        {"|"}
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
          Sun, Nov 1 - Tue, Nov 3
        </button>
        <button className=" w-full flex items-center justify-start gap-3 p-3 py-4 rounded-md border border-black/20 text-[14px] text-black/80">
          <RxPerson className=" w-6 h-6 text-black/50" />1 adult · Economy
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
      </div>
    </div>
  );
};

export default FligthSearch;
