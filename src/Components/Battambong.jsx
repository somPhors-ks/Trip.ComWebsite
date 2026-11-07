import BattambangHotels from "./BattambangHotels";
import BattambangTopSign from "./BattambangTopSign";
import BattambangTripMoment from "./BattambangTripMoment";

const Battambong = () => {
  return (
    <div className=" w-full flex flex-col gap-3">
      <BattambangTopSign />
      <BattambangTripMoment />
      <BattambangHotels />
    </div>
  );
};

export default Battambong;
