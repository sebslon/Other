function continuousNumbersFromTo(from: number, to: number) {
  const result = [];

  while (from <= to) {
    result.push(from);
    from++;
  }

  return result;
}

export function createDaysArray(daysAmount: number) {
  return Array.from({ length: daysAmount }, (el, i) => i + 1);
}

export function debounce<T extends Function>(cb: T, timeout = 100) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
    }, timeout);
  };
}

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const years = continuousNumbersFromTo(1900, 2100);