export const rejectAfter100ms = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "reject 100ms");
});

export const rejectAfter150ms = new Promise((resolve, reject) => {
  setTimeout(reject, 150, "reject 150ms");
});
