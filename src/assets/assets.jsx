import { FaCarAlt } from "react-icons/fa";
import { FcPlanner } from "react-icons/fc";
import { GiIsland, GiSchoolBag } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { IoIosBed } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import {
  MdAttractions,
  MdOutlineFlight,
  MdOutlineLightbulb,
  MdOutlineModeOfTravel,
  MdPhoneAndroid,
} from "react-icons/md";
import { SiMentorcruise } from "react-icons/si";

import HomeCover from "./Images/homeCover.jpg";

export const menuLists = [
  {
    id: 1,
    labelName: "Hotels & Home",
    icon: <IoIosBed />,
  },
  {
    id: 2,
    labelName: "Flights",
    icon: <MdOutlineFlight />,
  },
  {
    id: 3,
    labelName: "Cars",
    icon: <FaCarAlt />,
  },
  {
    id: 4,
    labelName: "Attractions & Tours",
    icon: <MdAttractions />,
  },
  {
    id: 5,
    labelName: "Flight + Hotel",
    icon: <LuHotel />,
  },
  {
    id: 6,
    labelName: "Private Tours",
    icon: <GiSchoolBag />,
  },
  {
    id: 7,
    labelName: "Group Tours",
    icon: <GiIsland />,
  },
  {
    id: 8,
    labelName: "Cruises",
    icon: <SiMentorcruise />,
  },
  {
    id: 9,
    labelName: "Trip Planner",
    icon: <FcPlanner />,
  },
  {
    id: 10,
    labelName: "Travel Inspiration",
    icon: <MdOutlineLightbulb />,
  },
  {
    id: 11,
    labelName: "Map",
    icon: <GrMapLocation />,
  },
  {
    id: 12,
    labelName: "Deals",
    icon: <IoTicket />,
  },
  {
    id: 13,
    labelName: "Trip.com Rewards",
    icon: <MdOutlineModeOfTravel />,
  },
  {
    id: 14,
    labelName: "App",
    icon: <MdPhoneAndroid />,
  },
];

export const imageList = {
  coverHome: HomeCover,
};
