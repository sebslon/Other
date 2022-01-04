const mod2 = mod(2);
const eq1 = eq(1);

function isOdd(x) {
  return eq1(mod2(x));
}

function compose(fn2, fn1) {
  return function composed(v) {
    return fn2(fn1(v));
  };
}

const isOdd2 = compose(eq1, mod2);
