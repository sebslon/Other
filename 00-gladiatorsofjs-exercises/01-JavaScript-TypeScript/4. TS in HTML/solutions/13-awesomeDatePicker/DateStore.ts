import { getDaysInMonth } from "date-fns";
import { createDaysArray, months, years } from "./utils";

export class DateStore {
  actualYear: number = 1900;
  actualMonthIndex: number = 0;
  actualDay: number = 1;

  years: number[];
  months: string[];
  days: number[];

  constructor() {
    this.years = years;
    this.months = months;
    this.days = createDaysArray(
      getDaysInMonth(new Date(this.actualYear, this.actualMonthIndex))
    );
  }

  formatDate() {
    return `${this.actualDay}-${this.actualMonthIndex + 1}-${this.actualYear}`;
  }

  updateDate(key: "day" | "month" | "year", index: number) {
    switch (key) {
      case "year":
        this.actualYear = this.years[index];
        this.updateDays();
        break;
      case "month":
        this.actualMonthIndex = index;
        this.updateDays();
        break;
      case "day":
        this.actualDay = this.days[index];
        break;
    }
  }

  private updateDays() {
    this.days = createDaysArray(
      getDaysInMonth(new Date(this.actualYear, this.actualMonthIndex))
    );
  }
}
