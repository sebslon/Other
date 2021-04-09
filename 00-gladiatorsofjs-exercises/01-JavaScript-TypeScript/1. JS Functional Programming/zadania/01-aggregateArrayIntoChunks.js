const alphabet = "abcdefghijklmnoprstuwxyz".split("");

const randomNumberFourToSeven = () => {
  return 7 - Math.floor(Math.random() * 4);
}

const aggregateIntoChunks = (array) => {
  const workArray = [...array];
  const chunkedArray = [];

  while(workArray.length > 0) {
    const chunkSize = randomNumberFourToSeven();
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

const chunks = aggregateIntoChunks(alphabet);
console.log(chunks);

// example chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
