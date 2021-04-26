function isRectangularTriangle(a, b, c) {
  [a, b, c].forEach(input => {
    if(typeof input !== 'number') throw new Error('isRectangularTriangle function accepts only numbers.');
  })
  
  if (a < 0 || b < 0 || c < 0) {
    throw new Error('The sides of the triangle should be greater than 0');
  };

  const sumAB = a + b;
  const sumBC = b + c;
  const sumAC = a + c;

  if (c > sumAB || a > sumBC || b > sumAC) {
    throw new Error("One of the sides is lower than the sum of two others, you can't create a triangle");
  };

  //The Converse of Pythagorean Theorem
  const [firstSide, secondSide, longestSide] = [a, b, c].sort((a, b) => a - b);
  const isRectangular = Math.pow(longestSide, 2) === Math.pow(secondSide, 2) + Math.pow(firstSide, 2);

  return isRectangular;
}

const cond1 = isRectangularTriangle(3, 4, 5);
const cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 to true

const cond3 = isRectangularTriangle(4, 3, 2);
const cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 to false
console.log(cond1, cond2, cond3, cond4);