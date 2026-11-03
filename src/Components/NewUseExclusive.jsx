import { CiCircleMore } from "react-icons/ci";
import { exclusiveItems } from "../assets/assets";
import TermAndConditions from "./TermAndConditions";
import { useState } from "react";

const NewUseExclusive = () => {
  const [condition, setCondition] = useState([]);
  const [isConOpen, setIsConOpen] = useState(false);

  const handleSetCondition = (con) => {
    setCondition(con);
    setIsConOpen(true);
  };
  const getCloseData = (data) => {
    setIsConOpen(data);
  };

  return (
    <div className="w-full flex flex-col gap-3 mt-5">
      <p className=" text-2xl font-semibold">New user exclusive</p>
      <div className="w-full grid grid-cols-4 gap-3">
        {exclusiveItems.map((ex) => {
          return (
            <article
              key={ex.id}
              className=" relative flex items-center justify-between gap-0 p-3 rounded-lg border border-red-400"
            >
              <div className=" flex flex-col gap-1">
                <p className=" text-xl font-semibold">
                  {ex.discount}% Discount
                </p>
                <div className=" flex items-center justify-start gap-1">
                  <p className=" text-[16px] text-black/60">{ex.labelName}</p>
                  <button
                    onClick={() => handleSetCondition(ex.condition)}
                    className=" flex items-center justify-center p-1 rounded-sm cursor-pointer hover:bg-blue-50 transition-all duration-300"
                  >
                    <CiCircleMore className="w-4 h-4 text-black" />
                  </button>
                </div>
                <button className=" w-20 p-2 rounded-md bg-blue-600 text-white mt-10 cursor-pointer hover:bg-blue-500 transition-all duration-300">
                  {ex.btnTitle}
                </button>
              </div>
              <div className=" w-auto h-full flex items-center justify-center gap-3 ">
                <div className=" border border-red-400 border-dashed w-0 h-full"></div>
                <span className="w-8 h-8 text-4xl text-red-400">
                  {ex.mainIcon}
                </span>
              </div>
              {/* Absolute Item */}
              <div className=" absolute top-0 right-8.25 h-full flex flex-col justify-between translate-x-[-50%] gap-3">
                <div className=" w-6 h-4 bg-white border border-t-0 border-red-400 rounded-b-full -mt-px"></div>
                <div className=" w-6 h-4 bg-white border border-b-0 border-red-400 rounded-t-full -mb-px"></div>
              </div>
            </article>
          );
        })}

        {isConOpen && (
          <div className=" fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/60">
            <TermAndConditions
              conData={condition}
              getCloseData={getCloseData}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewUseExclusive;
