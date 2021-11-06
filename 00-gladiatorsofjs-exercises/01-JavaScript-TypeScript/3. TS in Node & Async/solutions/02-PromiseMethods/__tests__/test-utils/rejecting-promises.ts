export const rejectAfter100ms = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "reject 100ms");
});