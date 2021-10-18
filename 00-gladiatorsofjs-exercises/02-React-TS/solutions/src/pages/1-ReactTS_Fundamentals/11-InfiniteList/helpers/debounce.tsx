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
