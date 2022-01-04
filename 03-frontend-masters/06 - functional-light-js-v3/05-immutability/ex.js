"use strict";

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num, numbers) {
  if (!numbers.includes(num)) {
    numbers = [num, ...numbers];
    numbers.sort((a, b) => a - b);
  }
  return numbers;
}

let luckyLotteryNumbers = [];
const howMany = 6;

while (luckyLotteryNumbers.length < 6) {
  luckyLotteryNumbers = pickNumber(
    lotteryNum(),
    Object.freeze(luckyLotteryNumbers)
  );
}

console.log(luckyLotteryNumbers);
