import { typingTypes } from "./types";

export class Store {
  delay: number;
  text: string[] | string;
  resultSentence: string[] | string;
  index: number;

  constructor(delay: number, sentence: string, typingType: typingTypes) {
    this.delay = 60000 / delay;
    this.text = typingType === "letters" ? sentence : sentence.split(" ");
    this.resultSentence = "";
    this.index = 0;
  }

  typeText(text: string | string[]) {
    this.index++;
    this.resultSentence = text.slice(0, this.index);
  }

  deleteText(text: string | string[]) {
    this.index--;
    this.resultSentence = text.slice(0, this.index);
  }
}
