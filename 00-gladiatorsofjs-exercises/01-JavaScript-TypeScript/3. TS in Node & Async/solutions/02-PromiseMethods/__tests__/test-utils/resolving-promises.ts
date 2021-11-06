export const resolveAfter100ms = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "100ms");
});

export const resolveAfter150ms = new Promise((resolve, reject) => {
  setTimeout(resolve, 150, "150ms");
});

export const resolveImmediately = Promise.resolve("now");
