import { Store } from "./Store";

export class TypingController {
  element: HTMLElement;
  store: Store;

  constructor(store: Store, element: HTMLElement) {
    this.store = store;
    this.element = element;

    this.element.classList.add("typed-sentence");
  }

  typeForward() {
    this.store.typeText(this.store.text);
    this.changeTextContent();

    const timeoutId = setTimeout(() => this.typeForward(), this.store.delay);

    if (this.store.index > this.store.text.length) {
      clearTimeout(timeoutId);
      setTimeout(() => this.typeBackwards(), 1500);
    }
  }

  typeBackwards() {
    this.store.deleteText(this.store.resultSentence);
    this.changeTextContent();

    const timeoutId = setTimeout(() => this.typeBackwards(), this.store.delay);

    if (this.store.index < 0) {
      clearTimeout(timeoutId);
      setTimeout(() => this.typeForward(), 1500);
    }
  }

  changeTextContent() {
    this.element.textContent = Array.isArray(this.store.resultSentence)
      ? this.store.resultSentence.join(" ")
      : this.store.resultSentence;
  }
}
