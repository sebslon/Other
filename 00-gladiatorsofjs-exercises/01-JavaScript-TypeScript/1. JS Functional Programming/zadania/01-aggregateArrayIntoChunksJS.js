const { randomNumberInRange } = require("./helpers");

const alphabet = "abcdefghijkmlnoprstuwxyz".split("");

const validateInput = (input) => {
  const inputIsNotAnArray = !Array.isArray(input)

  if(inputIsNotAnArray) {
    throw new Error('Input is not an array.')
  }

  if(input.length <= 7) {
    throw new Error('To be chunked array must have more than 7 elements.')
  }
}

const aggregateIntoChunks = (array) => {
  validateInput(array);

  const workArray = [...array];
  const chunkedArray = [];

  while(workArray.length > 0) {
    const chunkSize = randomNumberInRange(4, 7);
    let chunk = []

    for(let i = 0; i < chunkSize; i++) {
      const firstEl = workArray.shift();
      if(firstEl) {
        chunk.push(firstEl);
      } else {
        chunk.push(null);
      }
    }
    chunkedArray.push(chunk);
  }

  return chunkedArray;
};

console.log(aggregateIntoChunks(alphabet));
// example chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
