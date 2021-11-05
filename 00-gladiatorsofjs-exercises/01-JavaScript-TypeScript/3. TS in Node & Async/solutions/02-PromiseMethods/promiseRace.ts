function promiseRace<T>(promises: (Promise<T> | T)[]) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
}