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
      <div className="w-full h-full flex flex-row items-start justify-center gap-3 transition-all duration-300">
        <aside
          className={` sticky top-0 transition-all duration-300 ${isCollapsed ? "w-auto" : "w-[25%]"}`}
        >
          <LeftSideBar getCollapsed={getCollapsed} sendDataCol={isCollapsed} />
        </aside>

        <main className=" w-full">
          <HomeMain />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
