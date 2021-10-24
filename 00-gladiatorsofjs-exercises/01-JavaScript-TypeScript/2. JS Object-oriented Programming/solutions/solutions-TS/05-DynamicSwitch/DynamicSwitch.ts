interface Case {
  condition: boolean;
  callback: () => void;
}

export class Switch {
  cases: Case[] = [];

  add(condition: boolean, callback: () => void) {
    this.cases.push({ condition, callback });
  }

  isValid(): boolean {
    let isValid = true;

    for (let i = 0; i < this.cases.length; i++) {
      const isConditionFilled = this.cases[i].condition;

      if (isConditionFilled) {
        this.cases[i].callback();
        isValid = false;
      }
    }

    this.cases = [];
    return isValid;
  }

  isEmpty() {
    return this.cases.length === 0;
  }
}
