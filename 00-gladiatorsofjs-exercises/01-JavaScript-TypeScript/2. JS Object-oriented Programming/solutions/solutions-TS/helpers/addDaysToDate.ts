export function addDaysToDate(date: Date, numberOfDays: number) {
  const copy = new Date(date.valueOf());

  return new Date(copy.setDate(copy.getDate() + numberOfDays));
};