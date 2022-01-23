function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;

  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}

function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 2) + fibonacci(n - 1);
}

// Tail Call Optimization
function recursiveFibonacciTCO(n, sum = 0, prev = 1) {
  if (n === 0) return sum;
  return recursiveFibonacciTCO(n - 1, prev + sum, sum);
}
