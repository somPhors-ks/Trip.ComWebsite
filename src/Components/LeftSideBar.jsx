import { menuLists } from "../assets/assets";
import { IoClose } from "react-icons/io5";
import { FiSidebar } from "react-icons/fi";

const LeftSideBar = ({ getCollapsed, sendDataCol }) => {
  const menu = menuLists;
  return (
    <div className=" w-full h-full overflow-y-scroll scrollbar-none flex flex-col gap-3 p-0 py-3 pl-3 border-r border-r-black/20">
      <div
        className={`flex items-center ${sendDataCol ? "justify-center" : "justify-between"}`}
      >
        {!sendDataCol && (
          <p className=" text-xl font-semibold text-blue-600">
            Trip<span className=" text-amber-500">.</span>Com Menu
          </p>
        )}
        {!sendDataCol && (
          <button
            onClick={() => getCollapsed(true)}
            className=" flex items-center justify-center gap-3 p-2 rounded-sm hover:bg-black/10 cursor-pointer transition-all duration-300"
          >
            <IoClose className=" w-6 h-6" />
          </button>
        )}

        {sendDataCol && (
          <button
            onClick={() => getCollapsed(false)}
            className=" flex items-center justify-center gap-3 p-2 rounded-sm hover:bg-black/10 cursor-pointer transition-all duration-300"
          >
            <FiSidebar className=" w-6 h-6" />
          </button>
        )}
      </div>
      <ul className="w-ful flex flex-col gap-2">
        {menu.map((menu) => {
          return (
            <div key={menu.id}>
              <li
                className={`w-full flex items-center ${sendDataCol ? "justify-center gap-0" : "justify-start gap-5"}  p-2 rounded-md hover:bg-black/10 cursor-pointer transition-all duration-300`}
              >
                <span className=" w-6 h-6 text-black/60 flex items-center justify-center">
                  {menu.icon}
                </span>
                <a className=" text-[14px]">
                  {sendDataCol ? "" : menu.labelName}
                </a>
              </li>
              {menu.id === 6 ? <hr className=" text-black/20" /> : ""}
              {menu.id === 9 ? <hr className=" text-black/20" /> : ""}
              {menu.id === 13 ? <hr className=" text-black/20" /> : ""}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
