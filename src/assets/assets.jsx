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
import { CiCircleMore } from "react-icons/ci";

import HomeCover1 from "./Images/homeCover.jpg";
import HomeCover2 from "./Images/Cover02.jpg";
import HomeCover3 from "./Images/Cover03.jpg";
import HomeCover4 from "./Images/Cover04.jpg";
import HomeCover5 from "./Images/Cover05.jpg";
import HomeCover6 from "./Images/Cover06.jpg";

import megaSalePoster from "./Images/11-11megasale.jpg";
import slide01 from "./Images/curousel01.jpg";
import slide02 from "./Images/curousel02.jpg";
import slide03 from "./Images/curousel03.jpg";
import slide04 from "./Images/curousel04.jpg";
import slide05 from "./Images/curousel05.jpg";

import inspiredOption1 from "./Images/inspiredEnywhere.jpg";
import inspiredOption2 from "./Images/inspiredBattambang.jpg";
import inspiredOption3 from "./Images/inspiredChongqing.jpg";
import inspiredOption4 from "./Images/inspiredDaNang.jpg";
import inspiredOption5 from "./Images/inspiredDubai.jpg";
import inspiredOption6 from "./Images/inspiredMelbourne.jpg";
import inspiredOption7 from "./Images/inspiredParis.jpg";
import inspiredOption8 from "./Images/inspiredSapporo.jpg";
import inspiredOption9 from "./Images/inspiredShanghai.jpg";

import angkorWat from "./Images/angkorwat.jpg";
import angkorPark from "./Images/AngkorArchaeologicalPark.jpg";
import phnomSompov from "./Images/PhnomSampowPagoda.jpg";
import somraongKnong from "./Images/WatSomraongKnong.jpg";
import ekPhnom from "./Images/EkPhnomPagoda.jpg";
import absara from "./Images/Absara.jpg";
import batt01 from "./Images/batr01.jpg";
import batt02 from "./Images/batr02.jpg";
import batt03 from "./Images/batr03.jpg";
import batt04 from "./Images/bat04.jpg";
import batt05 from "./Images/bat05.jpg";
import batt06 from "./Images/bat06.jpg";
import batt07 from "./Images/bat07.jpg";
import batt08 from "./Images/bat08.jpg";
import batt09 from "./Images/bat09.jpg";

import chongqing01 from "./Images/chongqing01.jpg";
import chongqing02 from "./Images/chongqing02.jpg";
import chongqing03 from "./Images/chongqing03.jpg";
import chongqing04 from "./Images/chongqing04.jpg";
import chongqing05 from "./Images/chongqing05.jpg";
import chongqing06 from "./Images/chongqing06.jpg";
import chongqing07 from "./Images/chongqing07.jpg";
import chongqing08 from "./Images/chongqing08.jpg";
import chongqing09 from "./Images/chongqing09.jpg";
import chongqing10 from "./Images/chongqing10.jpg";

import batHotel1 from "./Images/batHotel1.jpg";
import batHotel2 from "./Images/batHotel2.jpg";
import batHotel3 from "./Images/batHotel3.jpg";
import batHotel4 from "./Images/batHotel4.jpg";
import batHotel5 from "./Images/batHotel5.jpg";
import batHotel6 from "./Images/batHotel6.jpg";
import batHotel7 from "./Images/batHotel7.jpg";
import batHotel8 from "./Images/batHotel8.jpg";
import batHotel9 from "./Images/batHotel9.jpg";
import batHotel10 from "./Images/batHotel10.jpg";

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
  megaSale: megaSalePoster,
  curousel1: slide01,
  curousel2: slide02,
  curousel3: slide03,
  curousel4: slide04,
  curousel5: slide05,
};
export const curouselImage = [
  { id: 1, image: imageList.curousel1 },
  { id: 2, image: imageList.curousel2 },
  { id: 3, image: imageList.curousel3 },
  { id: 4, image: imageList.curousel4 },
  { id: 5, image: imageList.curousel5 },
];
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
export const cityStation = [
  {
    id: 1,
    titleName: "China",
    station: [
      "Shanghai (Any)",
      "Guangzhou (Any)",
      "Beijing (Any)",
      "Shenzhen (Any)",
      "Chongqing (Any)",
      "Chengdu (Any)",
      "Hangzhou (Any)",
      "Guangzhou",
      "Nanjing (Any)",
      "Shanghai Hongqiao",
    ],
  },
  {
    id: 2,
    titleName: "Japan",
    station: [
      "Tokyo (Any)",
      "Osaka (Any)",
      "Tokyo",
      "Kyoto (Any)",
      "Osaka",
      "Fukuoka (Any)",
      "Shin-Osaka",
      "Nagoya (Any)",
      "Kyoto",
      "Hakata",
    ],
  },
  {
    id: 3,
    titleName: "Vietnam",
    station: [
      "Hanoi (Any)",
      "Da Nang",
      "Hanoi",
      "Ho Chi Minh City",
      "Nha Trang",
      "Hue",
      "Laocai",
      "Khanh Hoa",
      "Nha Trang",
    ],
  },
  {
    id: 4,
    titleName: "France",
    station: [
      "Paris (Any)",
      "Paris Gare du Nord",
      "Lyon (Any)",
      "Marseille (Any)",
      "Lille (Any)",
      "Nice (Any)",
      "Lyon Part Dieu",
      "Marseille-St-Charles",
      "Lille Europe",
      "Paris - Gare de Lyon - Hall",
    ],
  },
  {
    id: 5,
    titleName: "Hong Kong, China",
    station: ["Hong Kong (Any)", "Hong Kong West Kowloon"],
  },
  {
    id: 6,
    titleName: "United Kingdom",
    station: [
      "London (Any)",
      "Manchester (Any)",
      "Birmingham (Any)",
      "Edinburgh (Any)",
      "London Euston",
      "London St. Pancras",
      "Birmingham New Street",
      "Manchester Piccadilly",
      "Glasgow (Any)",
      "London Kings Cross",
    ],
  },
  {
    id: 7,
    titleName: "South Korea",
    station: [
      "Seoul (Any)",
      "Seoul",
      "Busan (Any)",
      "Busan",
      "Daegu (Any)",
      "Pyeongtaek",
      "Daejeon",
      "Manchester Piccadilly",
      "Gyeongju",
      "Jeonju",
      "Suwon",
    ],
  },
  {
    id: 8,
    titleName: "Switzerland",
    station: [
      "Zurich",
      "Basel",
      "Geneva (Any)",
      "Busan",
      "Zürich HB",
      "Interlaken",
      "Basel SBB",
      "Lucerne/Luzern (Any)",
      "Lugano (any)",
      "Berne (Any)",
      "Geneva Cornavin",
    ],
  },
  {
    id: 9,
    titleName: "Italy",
    station: [
      "Milan (Any)",
      "Rome (Any)",
      "Milan Central",
      "Rome Termini",
      "Florence (Any)",
      "Bologna (Any)",
      "Naples (Any)",
      "Metropolitan (Any)",
      "Bologna Centrale",
      "Turin (Any)",
    ],
  },
  {
    id: 10,
    titleName: "Laos",
    station: [
      "Vientiane",
      "Luang Prabang",
      "Vang Vieng",
      "Boten",
      "Vientiane (Khamsavath)",
      "gaxi",
      "penghong",
      "namo",
      "menga",
      "Muang Xai",
    ],
  },
  {
    id: 11,
    titleName: "Germany",
    station: [
      "Cologne (Any)",
      "Frankfurt (Main) (Any)",
      "Berlin (Any)",
      "Köln Hbf",
      "Munich (Any)",
      "Hamburg (Any)",
      "München Hbf",
      "Düsseldorf (Any)",
      "Flughafen (Dus) (Any)",
      "Frankfurt (Main) Hbf",
    ],
  },
  {
    id: 12,
    titleName: "Spain",
    station: [
      "Madrid (Any)",
      "Barcelona (Any)",
      "Madrid-Puerta De Atocha",
      "Barcelona-Sants",
      "Madrid-Chamartín",
      "Zaragoza (Any)",
      "Valencia (Any)",
      "Seville (Any)",
      "Cordoba (Any)",
      "Zaragoza-Delicias",
    ],
  },
  {
    id: 13,
    titleName: "Netherlands",
    station: [
      "Amsterdam",
      "Amsterdam Centraal",
      "Rotterdam",
      "Rotterdam Centraal",
      "Schiphol Amsterdam Aeroport(any)",
      "Schiphol (Airport)",
      "Utrecht",
      "Amsterdam Bijlmer ArenA",
      "Utrecht Central Train Station",
      "Eindhoven",
    ],
  },
  {
    id: 14,
    titleName: "Europe (Other)",
    station: [
      "Brussels (Any)",
      "Sint-Gillis(any)",
      "Bruxelles Midi",
      "Antwerpen (Any)",
    ],
  },
];
export const exclusiveItems = [
  {
    id: 1,
    discount: 10,
    labelName: "Hotels & Homes",
    routerName: "",
    condition: [
      "Once claimed, promo codes are valid for 14 days.",
      "Promotion platform: Trip.com.",
      "To receive the discount, bookings must be paid for using the currency of the promo code.",
      "Promo codes cannot be used in conjunction with any other discounts.",
      "Promo codes can only used by users who haven't yet made a booking using the Trip.com. Only one new hotel guest promo code can be applied per user.",
      "Promo codes cannot be exchanged for cash or Trip Coins.",
      "If a booking which a promo code was applied to becomes invalid or is canceled, the promo code applied to the booking will be automatically returned to the user's account.",
      "Trip.com reserves all rights of final interpretation.",
      "Please note that the promo codes may not apply to all hotels or room types.",
      "When users access the Trip.com website and app through third-party channels (including but not limited to external links, advertisement pages, and partner apps/mobile websites), certain promotional products or services may not be eligible for the Trip.com promo code discount. Please check the product pages and the final checkout page for specific details.Promo codes are not applicable to booking fees incurred from certain upgrade rewards or purchasing additional items.",
      "Promo codes are not applicable to booking fees incurred from certain upgrade rewards or purchasing additional items.",
    ],
    btnTitle: "Use",
    mainIcon: <IoIosBed />,
    conditionIcon: <CiCircleMore />,
  },
  {
    id: 2,
    discount: 5,
    labelName: "EU trains",
    routerName: "",
    condition: [
      "Promotion platform: Trip.com app and website.",
      "Eligibility: This promo code can only be used to save 5% on your first Europe (Only apply for France, Germany, Italy and Spain) train ticket booking. Not applicable to cross-border routes. There are limitations on the maximum discount amount and the payment currency.",
      "Validity period: Once claimed, the promo code is valid for 30 days.",
      "Each user can only use the promo code once and the promo codes cannot be used together with other promotions. Only 1 promo code can be used per device, email address, or payment account.",
      "Each payment card is eligible for the discount only once. A single payment card cannot be used multiple times for the same promotion.",
      "If you cancel your booking after it is confirmed, the promo code will not be returned to you. If you cancel your booking before your ticket is issued or if we are unable to issue you a ticket, the promo code will be returned to your account.",
      "Trip.com reserves the right to cancel, immediately and without prior notification, any discounts or bookings of users who engage in improper behaviour. This includes but is not limited to creating fraudulent accounts or bookings, exploiting software vulnerabilities, and participating in the promotion through any other action that Trip.com considers improper.",

      "Trip.com reserves the right of final interpretation.",
    ],
    btnTitle: "Use",
    mainIcon: <FaTrainTram />,
    conditionIcon: <CiCircleMore />,
  },
  {
    id: 3,
    discount: 10,
    labelName: "Attractions & Tours",
    routerName: "",
    condition: [
      "The coupon code is valid for use within 3 days after receiving it, and will automatically expire after expiration.",
      "Activity platform: Trip.com desktop website, mobile app.",
      "Usage: Order designated attractions & tours products, select the designated coupon code on the booking page to get a 10% discount, with a maximum reduction of USD 4. The discount is applicable to reservations paid in certain currencies and to certain products.",
      "For multiple products purchased in the same order, only 1 coupon can be used. The coupons supported by different products may vary, and the final discount amount is subject to the amount shown in the order details.",
      "Each UID can only be used once.",
      "The number of coupon codes is limited, first come first served, while stocks last.",
      "If you cancel your reservation, the used coupon code will be automatically returned to the relevant Trip.com account and can be used again during the discount period.",
      "Trip.com reserves the final right of interpretation. Trip.com may make appropriate modifications/adjustments to the rules/terms of the coupon within the scope permitted by law.",
    ],
    btnTitle: "Use",
    mainIcon: <MdAttractions />,
    conditionIcon: <CiCircleMore />,
  },
  {
    id: 4,
    discount: 10,
    labelName: "Airport Transfers",
    routerName: "",
    condition: [
      "Scope of use: This promo code can be applied to an airport transfer booking prepaid online.",
      "Validity: Once claimed, the promo code is valid for 7 days. Once expired, it will be considered invalid.",
      "Discount: This promo code can be used to save 10% on airport transfer bookings (excluding add-ons, such as child seats and insurance).",
      "Usage restrictions: During the validity period there are no restrictions on the pick-up time. Each promo code can only be used once. It can only be used by the user to whom it was issued, and cannot be split, given as a gift, or used in conjunction with any other promo code. In the event that the value of the promo code is greater than the value of the booking, the excess will not be returned to the user. Promo codes cannot be redeemed for cash or Trip Coins. The promo code cannot be applied to a booking for which payment has already been completed.",
      "Cancellations: If the booking is canceled for free, payment times out, or the purchase fails, the promo code will be automatically returned to user's account if it is still valid. If the promo code is no longer valid, it will not be returned to the user's account. Once paid for, bookings cannot be modified. If the promo code has been applied to a booking that is later canceled and a cancellation fee is incurred, the promo code will not be returned as the discount has already been applied (or partially applied) to the booking.",
      "Disclaimer: a) In cases of malicious use (including but not limited to malicious bookings, malicious registration, or exploiting system vulnerabilities) Trip.com reserves the right to rescind any promo code and its related booking. b) Trip.com may amend or revise the terms and conditions of these promo codes to the extent permitted by all applicable laws.",
    ],
    btnTitle: "Use",
    mainIcon: <FaCarAlt />,
    conditionIcon: <CiCircleMore />,
  },
];
export const inSpiredOptions = [
  { id: 1, title: "Anywhere", headTop: "", inmageUrl: inspiredOption1 },
  {
    id: 2,
    title: "Battambang",
    headTop: "Short haul",
    inmageUrl: inspiredOption2,
  },
  {
    id: 3,
    title: "Chongqing",
    headTop: "Medium haul",
    inmageUrl: inspiredOption3,
  },
  {
    id: 4,
    title: "Da Nang",
    headTop: "Short haul",
    inmageUrl: inspiredOption4,
  },
  { id: 5, title: "Dubai", headTop: "Long haul", inmageUrl: inspiredOption5 },
  {
    id: 6,
    title: "Melbourne",
    headTop: "Long haul",
    inmageUrl: inspiredOption6,
  },
  { id: 7, title: "Paris", headTop: "Long haul", inmageUrl: inspiredOption7 },
  {
    id: 8,
    title: "Sapporo",
    headTop: "Medium haul",
    inmageUrl: inspiredOption8,
  },
  {
    id: 9,
    title: "Shanghai",
    headTop: "Medium haul",
    inmageUrl: inspiredOption9,
  },
];
export const battambangItemRow1 = [
  {
    id: 1,
    routerName: "",
    headTop: "Trip.Best",
    location: "Siem Reap",
    rate: "9.8",
    name: "Angkor Wat",
    viewers: 3585,
    startRating: "4.8/5",
    imgUrl: angkorWat,
  },
  {
    id: 2,
    routerName: "",
    headTop: "Trip.Best",
    location: "Siem Reap",
    rate: "9.2",
    name: "Angkor Archaeological Park",
    viewers: 2049,
    startRating: "4.5/5",
    imgUrl: angkorPark,
  },
  {
    id: 3,
    routerName: "",
    headTop: "",
    location: "Ek Phnom",
    rate: "8.6",
    name: "Ek Phnom Pagoda",
    viewers: 458,
    startRating: "4.3/5",
    imgUrl: ekPhnom,
  },
  {
    id: 4,
    routerName: "",
    headTop: "",
    location: "Phum Anh'Chanh",
    rate: "9.4",
    name: "Phare Ponleu Selpak",
    viewers: 3086,
    startRating: "4.8/5",
    imgUrl: absara,
  },
  {
    id: 5,
    routerName: "",
    headTop: "",
    location: "Banan",
    rate: "7.8",
    name: "Phnom Sampow Pagoda",
    viewers: 3495,
    startRating: "4.1/5",
    imgUrl: phnomSompov,
  },
  {
    id: 6,
    routerName: "",
    headTop: "",
    location: "Ek Phnom",
    rate: "9.8",
    name: "Wat Somraong Knong",
    viewers: 1085,
    startRating: "4.8/5",
    imgUrl: somraongKnong,
  },
];
export const battambangItemRow2 = [
  {
    id: 1,
    routerName: "",
    profileName: "Ratanak",
    profileimg: "",
    desc: "Battambang on a Budget: Free Culture & Cheap Things To Do",
    imgUrl: batt01,
  },
  {
    id: 2,
    routerName: "",
    profileName: "Chan Dara",
    profileimg: "",
    desc: "Walk around Battambang Old Town Start with a slow walk through the city centre",
    imgUrl: batt02,
  },
  {
    id: 3,
    routerName: "",
    profileName: "Chan Dara",
    profileimg: "",
    desc: "Walk around Battambang Old Town Start with a slow walk through the city centre",
    imgUrl: batt03,
  },
  {
    id: 4,
    routerName: "",
    profileName: "Chan Dara",
    profileimg: "",
    desc: "Walk around Battambang Old Town Start with a slow walk through the city centre",
    imgUrl: batt04,
  },
  {
    id: 5,
    routerName: "",
    profileName: "Chan Dara",
    profileimg: "",
    desc: "Walk around Battambang Old Town Start with a slow walk through the city centre",
    imgUrl: batt05,
  },
  {
    id: 6,
    routerName: "",
    profileName: "Chan Dara",
    profileimg: "",
    desc: "Walk around Battambang Old Town Start with a slow walk through the city centre",
    imgUrl: batt06,
  },
  {
    id: 7,
    routerName: "",
    profileName: "Chan Dara",
    profileimg: "",
    desc: "Walk around Battambang Old Town Start with a slow walk through the city centre",
    imgUrl: batt07,
  },
  {
    id: 8,
    routerName: "",
    profileName: "Chan Dara",
    profileimg: "",
    desc: "Walk around Battambang Old Town Start with a slow walk through the city centre",
    imgUrl: batt08,
  },
  {
    id: 9,
    routerName: "",
    profileName: "Chan Dara",
    profileimg: "",
    desc: "Walk around Battambang Old Town Start with a slow walk through the city centre",
    imgUrl: batt09,
  },
];
export const battambangHotel = [
  {
    id: 1,
    imageUrl: batHotel1,
    location: "Svay Por",
    name: "V V Hotel Battambang",
    star: 4,
    rating: 9,
    review: 89,
    fullPrice: 46,
    price: 44,
  },
  {
    id: 2,
    imageUrl: batHotel2,
    location: "Tuol Ta Ek",
    name: "Sky Palace Boutique Hotel",
    star: 4,
    rating: 8.2,
    review: 40,
    fullPrice: 21,
    price: 13,
  },
  {
    id: 3,
    imageUrl: batHotel3,
    location: "Rottanak",
    name: "Cambana La Riviere Hotel",
    star: 4,
    rating: 8.8,
    review: 70,
    fullPrice: 63,
    price: 204,
  },
  {
    id: 4,
    imageUrl: batHotel4,
    location: "Rottanak",
    name: "Emerald BB Battambang Hotel",
    star: 4,
    rating: 8.7,
    review: 89,
    fullPrice: 17,
    price: 15,
  },
  {
    id: 5,
    imageUrl: batHotel5,
    location: "Kdol Daun Teav",
    name: "The Sanctuary Homestay",
    star: 4,
    rating: 8.1,
    review: 25,
    fullPrice: 25,
    price: 16,
  },
  {
    id: 6,
    imageUrl: batHotel6,
    location: "Prek Preah Sdech",
    name: "Piseth Private Villa Hotel",
    star: 4,
    rating: 9.7,
    review: 8,
    fullPrice: 137,
    price: 46,
  },
  {
    id: 7,
    imageUrl: batHotel7,
    location: "Svay Por",
    name: "Angkor Comfort Hotel",
    star: 4,
    rating: 8.8,
    review: 17,
    fullPrice: null,
    price: 23,
  },
  {
    id: 8,
    imageUrl: batHotel8,
    location: "Chamkar Samraong",
    name: "STUNG SANGKE HOTEL",
    star: 4,
    rating: 7.8,
    review: 9,
    fullPrice: 32,
    price: 25,
  },
  {
    id: 9,
    imageUrl: batHotel9,
    location: "Voat Kor",
    name: "BTB Homestay",
    star: 4,
    rating: 10,
    review: 1,
    fullPrice: 77,
    price: 59,
  },
  {
    id: 10,
    imageUrl: batHotel10,
    location: "Voat Kor",
    name: "Maisons Wat Kor",
    star: 4,
    rating: 9.2,
    review: 76,
    fullPrice: 128,
    price: 116,
  },
];

export const chongqingItemRow1 = [
  {
    id: 1,
    routerName: "",
    headTop: "Trip.Best",
    location: "Chongqing",
    rate: "8.7",
    name: "Hongya Cave",
    viewers: 3585,
    startRating: "8,765 ",
    imgUrl: chongqing01,
  },
  {
    id: 2,
    routerName: "",
    headTop: "Trip.Best",
    location: "Chongqing",
    rate: "8.3",
    name: "Three Natural Bridges",
    viewers: 17375,
    startRating: "4.6/5",
    imgUrl: chongqing02,
  },
  {
    id: 3,
    routerName: "",
    headTop: "",
    location: "Chongqing",
    rate: "8.3",
    name: "Wulong Karst Tourism Area",
    viewers: 5226,
    startRating: "4.6/5",
    imgUrl: chongqing03,
  },
  {
    id: 4,
    routerName: "",
    headTop: "",
    location: "Chongqing",
    rate: "8.2",
    name: "Yangtze River Cableway",
    viewers: 18400,
    startRating: "4.2/5",
    imgUrl: chongqing04,
  },
  {
    id: 5,
    routerName: "",
    headTop: "",
    location: "Chongqing",
    rate: "8.2",
    name: "Chongqing Zoo",
    viewers: 16590,
    startRating: "4.7/5",
    imgUrl: chongqing05,
  },
  {
    id: 6,
    routerName: "",
    headTop: "",
    location: "Chongqing",
    rate: "7.9",
    name: "Jiefangbei Pedestrian Street",
    viewers: 5643,
    startRating: "4.7/5",
    imgUrl: chongqing06,
  },
  {
    id: 7,
    routerName: "",
    headTop: "",
    location: "Chongqing",
    rate: "7.8",
    name: "EYE IN THE CLOUDS",
    viewers: 7092,
    startRating: "4.8/5",
    imgUrl: chongqing07,
  },
  {
    id: 8,
    routerName: "",
    headTop: "",
    location: "Fengjie County",
    rate: "7.8",
    name: "White Emperor City Qutang Gorge Scenic Spot",
    viewers: 4040,
    startRating: "4.6/5",
    imgUrl: chongqing08,
  },
  {
    id: 9,
    routerName: "",
    headTop: "",
    location: "Chongqing",
    rate: "7.6",
    name: "Ciqikou Town",
    viewers: 14440,
    startRating: "4.6/5",
    imgUrl: chongqing09,
  },
  {
    id: 10,
    routerName: "",
    headTop: "",
    location: "Chongqing",
    rate: "7.5",
    name: "Dazu Rock Carvings",
    viewers: 8183,
    startRating: "4.6/5",
    imgUrl: chongqing10,
  },
];
