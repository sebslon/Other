import { debounce } from "./utils";

import { DatePickerController } from "./DatePickerController";
import { DateStore } from "./DateStore";

class DatePicker {
  private dateStore: DateStore;

  private daysContainer: HTMLElement;
  private monthsContainer: HTMLElement;
  private yearsContainer: HTMLElement;

  constructor() {
    const daysContainer = document.querySelector<HTMLElement>(".day-container");
    const monthsContainer =
      document.querySelector<HTMLElement>(".month-container");
    const yearsContainer =
      document.querySelector<HTMLElement>(".year-container");

    if (
      daysContainer == null ||
      monthsContainer == null ||
      yearsContainer == null
    ) {
      throw new Error("Date containers must be in document");
    }

    this.daysContainer = daysContainer;
    this.monthsContainer = monthsContainer;
    this.yearsContainer = yearsContainer;

    this.dateStore = new DateStore();
  }

  init() {
    this.createColumns();
    this.addListeners();
  }

  private updateDays() {
    this.daysContainer.textContent = "";

    DatePickerController.createParagraphs(
      this.daysContainer,
      this.dateStore.days
    );
    DatePickerController.changeParagraphOpacity(
      this.daysContainer,
      this.dateStore.actualDay
    );
  }

  private addListeners() {
    // TODO: Fix for click listening
    
    this.daysContainer.addEventListener(
      "scroll",
      debounce((e: MouseEvent) => {
        const index = DatePickerController.getElementIndex(
          e,
          this.daysContainer,
          this.dateStore.days
        );
        this.dateStore.updateDate("day", index);
        this.updateDays();
      }, 500)
    );

    this.monthsContainer.addEventListener(
      "scroll",
      debounce((e: MouseEvent) => {
        const index = DatePickerController.getElementIndex(
          e,
          this.monthsContainer,
          this.dateStore.months
        );
        this.dateStore.updateDate("month", index);
        this.updateDays();
      })
    );

    this.yearsContainer.addEventListener(
      "scroll",
      debounce((e: MouseEvent) => {
        const index = DatePickerController.getElementIndex(
          e,
          this.yearsContainer,
          this.dateStore.years
        );
        this.dateStore.updateDate("year", index);
        this.updateDays();
      })
    );
  }

  private createColumns() {
    DatePickerController.createParagraphs(
      this.daysContainer,
      this.dateStore.days
    );
    DatePickerController.createParagraphs(
      this.monthsContainer,
      this.dateStore.months
    );
    DatePickerController.createParagraphs(
      this.yearsContainer,
      this.dateStore.years
    );
  }
}

const datePicker = new DatePicker();
datePicker.init();
