import { startOfDay } from "date-fns";
import { DateHandler } from "./DateHandler";

export class Store {
  date: Date = startOfDay(new Date());
  week: Date[];

  constructor() {
    this.week = DateHandler.getWeek(this.date);
  }

  addWeek() {
    this.week = DateHandler.changeWeek(this.week, "add");
  }

  decreaseWeek() {
    this.week = DateHandler.changeWeek(this.week, "decrease");
  }
}