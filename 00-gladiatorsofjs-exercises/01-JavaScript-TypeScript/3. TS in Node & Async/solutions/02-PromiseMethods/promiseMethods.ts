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

const reject = Promise.reject(3);
const promise0 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

const promises = [promise0, promise1, promise2, promise3, 44];
const promisesWithReject = [promise0, promise1, reject, promise2, promise3, 44];

promiseAll(promisesWithReject)
  .catch((err) => console.log(err))
  .then((result) => console.log(result));
promiseAllAsync(promisesWithReject)
  .catch((err) => console.log(err))
  .then((result) => console.log(result));
