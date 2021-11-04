import { Store } from "./Store";
import { typingTypes } from "./types";
import { TypingController } from "./TypingController";

class Typed {
  store: Store;
  controller: TypingController;

  constructor(
    containerSelector: string,
    options?: { typing?: typingTypes; speed?: number }
  ) {
    const textContainer =
      document.querySelector<HTMLElement>(containerSelector);

    if (textContainer == null) {
      throw new Error("Text container must be in the document.");
    }

    if (textContainer.textContent == null) {
      throw new Error(
        "Container must have text content which will be animated"
      );
    }

    this.store = new Store(
      options!.speed || 120,
      textContainer.textContent,
      options!.typing || "letters"
    );

    this.controller = new TypingController(this.store, textContainer);
  }

  init() {
    this.controller.typeForward();
  }
}

const typingLetters = new Typed(".letters", { speed: 600 });
typingLetters.init();

const typingWords = new Typed(".words", { speed: 120, typing: "words" });
typingWords.init();
