export function recursivePromise<T>(promises: Promise<T>[]) {
  const results: T[] = [];

  return handleRecursion(promises, results)
    .then(() => results)
    .catch(() => {
      throw results;
    });
}

function handleRecursion<T>(
  promises: Promise<T>[],
  results: T[]
): Promise<void> {
  return Promise.resolve(promises[0])
    .then((res) => {
      results.push(res);

      if (promises.length == 1) {
        return;
      }

      return handleRecursion(promises.slice(1), results);
    })
    .catch((err) => {
      results.push(err);
      return;
    });
}
