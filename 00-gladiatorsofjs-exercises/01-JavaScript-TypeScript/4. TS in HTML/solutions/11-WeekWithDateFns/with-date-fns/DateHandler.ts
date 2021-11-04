import idLocale from "date-fns/locale/id";
import {
  addDays,
  addWeeks,
  getHours,
  getMinutes,
  getSeconds,
  isAfter,
  isEqual,
  isPast,
  startOfDay,
  startOfWeek,
  subDays,
} from "date-fns";

type dayPosition = "today" | "past" | "future" | "nextWeek";

export class DateHandler {
  static getWeek(start: Date) {
    const date = startOfWeek(startOfDay(start), { locale: idLocale });
    const week = [...Array(7)].map((el, i) => addDays(date, i));

    return week;
  }

  static changeWeek(week: Date[], action: "add" | "decrease") {
    const newDate =
      action === "add" ? addDays(week[6], 1) : subDays(week[0], 1);
    const newWeek = DateHandler.getWeek(newDate);

    return newWeek;
  }

  static getTime() {
    const now = new Date();
    const hours = getHours(now);
    const minutes = getMinutes(now);
    const seconds = getSeconds(now);

    return `
      ${hours < 10 ? `0${hours}` : hours} : 
      ${minutes < 10 ? `0${minutes}` : minutes} : 
      ${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  static checkDayPosition(date: Date): dayPosition {
    const today = startOfDay(new Date());

    if (isEqual(date, today)) {
      return "today";
    } else if (isPast(date)) {
      return "past";
    } else if (isAfter(date, addWeeks(today, 1))) {
      return "future";
    } else {
      return "nextWeek";
    }
  }
}