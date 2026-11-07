import React, { useState } from "react";
import Header from "../Components/Header";
import HomeMain from "../Components/HomeMain";
import LeftSideBar from "../Components/LeftSideBar";

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getCollapsed = (data) => {
    setIsCollapsed(data);
  };

  return (
    <div className=" w-full flex flex-col">
      <div className=" w-full bg-white">
        <Header />
      </div>
      <div className="w-full h-full flex flex-row items-start justify-start gap-0 transition-all duration-300">
        <div
          className={` sticky top-0 transition-all duration-300 ${isCollapsed ? "w-[3%]" : "w-[20%]"}`}
        >
          <LeftSideBar getCollapsed={getCollapsed} sendDataCol={isCollapsed} />
        </div>

        <main className={`${isCollapsed ? "w-[97%]" : "w-[80%]"}`}>
          <HomeMain />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
