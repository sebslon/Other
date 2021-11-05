// Retruns last fulfilled promise.
// If an error occurs, promiseLast returns it after completion of all promises.

function promiseLast<T>(promises: (Promise<T> | T)[]) {
  return new Promise((resolve, reject) => {
    let completed = 0;
    let error: T;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((result) => {
          completed++;

          if (completed === promises.length) {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        })
        .catch((err) => {
          completed++;

          if (completed === promises.length) {
            reject(err);
          } else {
            error = err;
          }
        });
    });
  });
}
