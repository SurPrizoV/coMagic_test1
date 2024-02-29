/* eslint-disable react/prop-types */
import { checkDateIsEqual, checkIsToday } from "../../services/functions";
import { useCalendar } from "./hooks/useCalendar";
import s from "./Calendar.module.css";

export const Calendar = ({ locale, date, selectDate, firstWeekDayNumber }) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  });

  return (
    <div className={s.calendar}>
      <div className={s.calendar_header}>
        <div
          aria-hidden
          className={s.calendar_header_arrow_left}
          onClick={() => functions.onClickArrow("left")}
        />
        {state.mode === "days" && (
          <div aria-hidden onClick={() => functions.setMode("monthes")}>
            {state.monthesNames[state.selectedMonth.monthIndex].month}{" "}
            {state.selectedYear}
          </div>
        )}
        {state.mode === "monthes" && (
          <div aria-hidden onClick={() => functions.setMode("years")}>
            {state.selectedYear}
          </div>
        )}
        {state.mode === "years" && (
          <div>
            {state.selectedYearsInterval[0]} -{" "}
            {
              state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ]
            }
          </div>
        )}
        <div
          aria-hidden
          className={s.calendar_header_arrow_right}
          onClick={() => functions.onClickArrow("right")}
        />
      </div>
      <div className={s.calendar_body}>
        {state.mode === "days" && (
          <>
            <div className={s.calendar_week_names}>
              {state.weekDaysNames.map((weekDaysName) => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div className={s.calendar_days}>
              {state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(
                  day.date,
                  state.selectedDay.date
                );
                const isAdditionalDay =
                  day.monthIndex !== state.selectedMonth.monthIndex;

                return (
                  <div
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedDay(day);
                      selectDate(day.date);
                    }}
                    className={[
                      `${s.calendar_day}`,
                      isToday ? `${s.calendar_today_item}` : "",
                      isSelectedDay ? `${s.calendar_selected_item}` : "",
                      isAdditionalDay ? `${s.calendar_additional_day}` : "",
                    ].join(" ")}
                  >
                    {day.dayNumber}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {state.mode === "monthes" && (
          <div className={s.calendar_pick_items_container}>
            {state.monthesNames.map((monthesName) => {
              const isCurrentMonth =
                new Date().getMonth() === monthesName.monthIndex &&
                state.selectedYear === new Date().getFullYear();
              const isSelectedMonth =
                monthesName.monthIndex === state.selectedMonth.monthIndex;

              return (
                <div
                  key={monthesName.month}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedMonthByIndex(monthesName.monthIndex);
                    functions.setMode("days");
                  }}
                  className={[
                    `${s.calendar_pick_item}`,
                    isSelectedMonth ? `${s.calendar_selected_item}` : "",
                    isCurrentMonth ? `${s.calendar_today_item}` : "",
                  ].join(" ")}
                >
                  {monthesName.monthShort}
                </div>
              );
            })}
          </div>
        )}

        {state.mode === "years" && (
          <div className={s.calendar_pick_items_container}>
            <div className={s.calendar_unchoosable_year}>
              {state.selectedYearsInterval[0] - 1}
            </div>
            {state.selectedYearsInterval.map((year) => {
              const isCurrentYear = new Date().getFullYear() === year;
              const isSelectedYear = year === state.selectedYear;

              return (
                <div
                  key={year}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedYear(year);
                    functions.setMode("monthes");
                  }}
                  className={[
                    `${s.calendar_pick_item}`,
                    isCurrentYear ? `${s.calendar_today_item}` : "",
                    isSelectedYear ? `${s.calendar_selected_item}` : "",
                  ].join(" ")}
                >
                  {year}
                </div>
              );
            })}
            <div className={s.calendar_unchoosable_year}>
              {state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ] + 1}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
