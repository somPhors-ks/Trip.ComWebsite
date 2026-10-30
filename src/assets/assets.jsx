import { FaCarAlt } from "react-icons/fa";
import { FcPlanner } from "react-icons/fc";
import { GiIsland, GiSchoolBag } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { IoIosBed } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import { FaTrainTram } from "react-icons/fa6";
import {
  MdAttractions,
  MdOutlineFlight,
  MdOutlineLightbulb,
  MdOutlineModeOfTravel,
  MdPhoneAndroid,
} from "react-icons/md";
import { SiMentorcruise } from "react-icons/si";

import HomeCover1 from "./Images/homeCover.jpg";
import HomeCover2 from "./Images/Cover02.jpg";
import HomeCover3 from "./Images/Cover03.jpg";
import HomeCover4 from "./Images/Cover04.jpg";
import HomeCover5 from "./Images/Cover05.jpg";
import HomeCover6 from "./Images/Cover06.jpg";

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
    labelName: "Trains",
    icon: <FaTrainTram />,
  },
  {
    id: 4,
    labelName: "Cars",
    icon: <FaCarAlt />,
  },
  {
    id: 5,
    labelName: "Attractions & Tours",
    icon: <MdAttractions />,
  },
  {
    id: 6,
    labelName: "Flight + Hotel",
    icon: <LuHotel />,
  },
  {
    id: 7,
    labelName: "Private Tours",
    icon: <GiSchoolBag />,
  },
  {
    id: 8,
    labelName: "Group Tours",
    icon: <GiIsland />,
  },
  {
    id: 9,
    labelName: "Cruises",
    icon: <SiMentorcruise />,
  },
  {
    id: 10,
    labelName: "Trip Planner",
    icon: <FcPlanner />,
  },
  {
    id: 11,
    labelName: "Travel Inspiration",
    icon: <MdOutlineLightbulb />,
  },
  {
    id: 12,
    labelName: "Map",
    icon: <GrMapLocation />,
  },
  {
    id: 13,
    labelName: "Deals",
    icon: <IoTicket />,
  },
  {
    id: 14,
    labelName: "Trip.com Rewards",
    icon: <MdOutlineModeOfTravel />,
  },
  {
    id: 15,
    labelName: "App",
    icon: <MdPhoneAndroid />,
  },
];

export const imageList = {
  coverHome1: HomeCover1,
  coverHome2: HomeCover2,
  coverHome3: HomeCover3,
  coverHome4: HomeCover4,
  coverHome5: HomeCover5,
  coverHome6: HomeCover6,
};

export const places = [
  {
    id: 1,
    title: "Popular Cities",
    city: ["Tokyo", "Hong Kong", "Phnom Penh", "Seuol", "Taipei", "Shanghai"],
  },
  {
    id: 2,
    title: "Asia",
    city: ["Shanghai", "Beijing", "Chengdu", "Guangzhou", "Shenzhen", "Sanya"],
  },
  {
    id: 3,
    title: "Europe",
    city: ["London", "Barcelona", "Moscow", "Milan", "Reykjavik", "Paris"],
  },
  {
    id: 4,
    title: "North America",
    city: [
      "Los Angeles",
      "New York",
      "San Francisco",
      "Vancouver",
      "Toronto",
      "Mexico City",
    ],
  },
  {
    id: 5,
    title: "South America",
    city: ["Sao Paulo", "Rio de Janeiro", "Santiago", "Lima", "Bogota"],
  },
  {
    id: 6,
    title: "America",
    city: [
      "Cairo",
      "Casablanca",
      "Johannesburg",
      "Dar es salaam",
      "Nairobi",
      "Addis Ababa",
    ],
  },
  {
    id: 7,
    title: "Oceania",
    city: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Auckland",
      "Christchurch",
    ],
  },
];

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
