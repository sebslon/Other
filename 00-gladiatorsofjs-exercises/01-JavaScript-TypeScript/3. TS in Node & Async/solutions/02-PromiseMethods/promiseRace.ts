export function promiseRace<T>(promises: (Promise<T> | T)[]) {
  return new Promise((resolve, reject) => {
    let finished = false;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((res) => {
          if (!finished) {
            finished = true;
            return resolve(res);
          }
        })
        .catch((err) => {
          if (!finished) {
            finished = true;
            return reject(err);
          }
        });
    });
  });
}
