function promiseIgnoreErrors<T>(promises: (Promise<T> | T)[]) {
  return new Promise((resolve, reject) => {
    const results: T[] = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results.push(result);
        })
        .catch((err) => {})
        .finally(() => {
          if (index === promises.length - 1) {
            resolve(results);
          }
        });
    });
  });
}