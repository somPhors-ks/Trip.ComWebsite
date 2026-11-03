import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { monthNames, weekdays } from "../assets/assets";

const TrianReturnTime = ({ getNewDate, getIsSchedule }) => {
  const [currentMonth, setCurrentMonth] = useState(10);
  const [currentYear, setCurrentYear] = useState(2026);

  const [selectedDate, setSelectedDate] = useState({
    day: 3,
    month: 10,
    year: 2026,
  });

  // Get number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDay = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Previous month
  const goPrevious = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Next month
  const goNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Select date
  const selectDate = (day, month, year) => {
    setSelectedDate({
      day,
      month,
      year,
    });
  };

  // Render calendar month
  const renderMonth = (month, year) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDay(year, month);
    const days = [];
    // Empty spaces before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    // Days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return (
      <div className="flex-1">
        {/* Month */}
        <h2 className="mb-6 text-center text-[16px] font-semibold">
          {monthNames[month]} {year}
        </h2>

        {/* Weekdays */}
        <div className="mb-2 grid grid-cols-7">
          {weekdays.map((day, index) => (
            <div
              key={day}
              className={`text-center text-[12px] ${
                index === 0 || index === 6 ? "text-blue-700" : "text-slate-800"
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-3">
          {days.map((day, index) => {
            if (day === null) {
              return <div key={index} className="h-12" />;
            }
            const dayOfWeek = index % 7;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isSelected =
              selectedDate.day === day &&
              selectedDate.month === month &&
              selectedDate.year === year;
            return (
              <button
                key={index}
                onClick={() => selectDate(day, month, year)}
                className={`
                  relative mx-auto flex py-2 px-3 items-center justify-center rounded-md font-semibold transition 
                  ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : isWeekend
                        ? "text-blue-700 hover:bg-blue-50"
                        : "text-slate-800 hover:bg-slate-100"
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  // Selected date
  const selectedDateObject = new Date(
    selectedDate.year,
    selectedDate.month,
    selectedDate.day,
  );
  const formattedDate = selectedDateObject.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const handleConfirm = () => {
    getNewDate(formattedDate.toString());
    getIsSchedule(false);
  };

  return (
    <div className="w-full bg-white p-6 flex flex-col gap-3">
      {/* Calendar */}
      <div className=" flex items-start justify-center gap-3">
        {/* Previous */}
        <button onClick={goPrevious} className=" hover:text-blue-600">
          <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
        </button>

        {/* Two months */}
        <div className="flex flex-1 gap-20">
          {renderMonth(currentMonth, currentYear)}

          {renderMonth(
            currentMonth === 11 ? 0 : currentMonth + 1,
            currentMonth === 11 ? currentYear + 1 : currentYear,
          )}
        </div>

        {/* Next */}
        <button onClick={goNext} className=" hover:text-blue-600">
          <MdOutlineKeyboardArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end border-t border-slate-200 pt-6">
        <div className="text-right">
          <p>
            Depart: <strong>{formattedDate}</strong>
          </p>

          <p className="mt-1 text-sm text-slate-400">
            All dates are in local time
          </p>

          <button
            onClick={() => handleConfirm()}
            className="mt-4 rounded-md bg-blue-600 px-5 py-3 text-lg font-semibold text-white hover:bg-blue-700"
          >
            Confirm return date
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrianReturnTime;
