import { useState } from "react";
import { Calendar } from "../../components/Calendar/Calendar";
import { formatDate } from "../../services/functions";
import { Header } from "../../components/Header/Header";
import s from "./CalendarPage.module.css"

export const CalendarPage = () => {
  const [selectedDate, setSelectedDay] = useState(new Date());

  return (
    <>
    <Header/>
      <div className={s.date_container}>
        {formatDate(selectedDate, "DDD DD MMM YYYY")}
      </div>
      <Calendar
        locale = 'default'
        selectedDate={selectedDate}
        selectDate={(date) => setSelectedDay(date)}
        firstWeekDayNumber = {2}
      />
    </>
  );
};
