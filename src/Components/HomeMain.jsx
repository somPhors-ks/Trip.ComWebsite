import React from "react";
import Cover from "./Cover";
import MegaSale from "./MegaSale";
import NewUseExclusive from "./NewUseExclusive";
import GetInspire from "./GetInspire";

const HomeMain = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-10 p-5 px-10">
      <Cover />
      <MegaSale />
      <NewUseExclusive />
      <GetInspire />
    </div>
  );
};

export default HomeMain;
