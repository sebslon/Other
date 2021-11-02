import { format } from "date-fns";
import { DateHandler } from "./DateHandler";
import { Store } from "./Store";

class Calendar {
  private store: Store = new Store();
  private calendarContainer: Element;
  private timelineColors = {
    today: "#006020",
    past: "#4b4b4b",
    nextWeek: "#92ff67",
    future: "#fff",
  };

  constructor() {
    const calendarContainer = document.querySelector(".calendar");

    if (calendarContainer == null) {
      throw new Error("Can't find a container for a calendar. (.container)");
    }

    this.calendarContainer = calendarContainer;
  }

  init() {
    this.createCalendar();
    this.startTimer();
    this.addListeners();
  }

  private addListeners() {
    const nextButton = document.querySelector(".next-btn");
    const prevButton = document.querySelector(".prev-btn");

    if (nextButton == null || prevButton == null) {
      throw new Error("Calendar should have next/prev buttons.");
    }

    nextButton.addEventListener("click", () => this.handleWeek("add"));
    prevButton.addEventListener("click", () => this.handleWeek("decrease"));
  }

  private handleWeek(action: "add" | "decrease"): void {
    if (action === "add") {
      this.store.addWeek();
    } else {
      this.store.decreaseWeek();
    }
    this.createCalendar();
  }

  private startTimer() {
    const timerElement = document.querySelector(".local-time");

    if (!timerElement) {
      throw new Error("Missing timer element in the document.");
    }

    setTimeout(this.startTimer.bind(this), 1000);

    timerElement.innerHTML = DateHandler.getTime();
  }

  private createCalendar() {
    this.calendarContainer.innerHTML = "";

    const dates = document.createElement("div");
    dates.classList.add("dates");

    const actualWeek = this.store.week.reduce(
      (acc: HTMLDivElement, day: Date) => {
        const div = document.createElement("div");
        div.classList.add("date");
        div.innerHTML = format(day, "PPPP");

        const timelineLocation = DateHandler.checkDayPosition(day);
        div.style.backgroundColor = this.timelineColors[timelineLocation];

        acc.append(div);
        return acc;
      },
      dates
    );

    this.calendarContainer.append(actualWeek);
  }
}

const calendar = new Calendar().init();
