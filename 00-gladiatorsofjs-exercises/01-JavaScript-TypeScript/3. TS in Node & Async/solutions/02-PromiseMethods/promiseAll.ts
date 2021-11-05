function promiseAll<T>(promises: (Promise<T> | T)[]) {
  if (promises.length === 0) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const results: unknown[] = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

async function promiseAllAsync<T>(promises: (Promise<T> | T)[]) {
  const results: T[] = [];

  for (const promise of promises) {
    await Promise.resolve(promise)
      .then((result) => results.push(result))
      .catch((err) => Promise.reject(err));
  }

  return Promise.resolve(results);
}