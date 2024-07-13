import moment from "moment";
import React, { useState } from "react";

const CustomCalendar = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateClick = (date) => {
    // Check if the clicked date is in the past
    if (date.getTime() < new Date().getTime()) {
      return;
    }
    setSelectedDate(date);
    setDate(moment(date).format("dddd, MMMM DD"));
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const startingDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();

    const days = [];

    // Fill in the empty slots for the days before the 1st day of the month
    for (let i = 0; i < startingDay; i++) {
      const prevMonthDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() - 1,
        daysInMonth - startingDay + i + 1
      );
      days.push(
        <div
          key={`prev-${i}`}
          className="date"
          onClick={() => handleDateClick(prevMonthDate)}
        >
          <p className="other-month">{prevMonthDate.getDate()}</p>
        </div>
      );
    }

    // Fill in the days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        day
      );
      days.push(
        <div
          key={`current-${day}`}
          className={`date `}
          onClick={() => handleDateClick(currentDate)}
        >
          <p
            className={` ${
              currentDate.getTime() === selectedDate.getTime()
                ? "selected-date"
                : ""
            }`}
          >
            {day}
          </p>
        </div>
      );
    }

    // Fill in the remaining days from the next month
    const remainingDays = 42 - days.length; // 42 is the total number of cells (6 rows x 7 columns)
    for (let i = 0; i < remainingDays; i++) {
      const nextMonthDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        i + 1
      );
      days.push(
        <div
          key={`next-${i}`}
          className="date other-month"
          onClick={() => handleDateClick(nextMonthDate)}
        >
          <p className="">{nextMonthDate.getDate()}</p>
        </div>
      );
    }

    return days;
  };

  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );
    setSelectedDate(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
  };

  const formatMonthYear = (date) => {
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  };

  return (
    <div className="calendar">
      <div className="header">
        <img
          src="/assets/icons/Prev.svg"
          alt="Prev"
          className="c_pointer"
          onClick={goToPreviousMonth}
        />
        <h2 className="CenterDate">{formatMonthYear(selectedDate)}</h2>
        <img
          src="/assets/icons/Next.svg"
          alt="Next"
          className="c_pointer"
          onClick={goToNextMonth}
        />
      </div>
      <div className="days">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
      </div>
      <div className="dates">{renderDays()}</div>
    </div>
  );
};

export default CustomCalendar;
