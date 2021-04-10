type Chunk = (string | null)[];

const alphabet: string[] = "abcdefghijkmlnoprstuwxyz".split("");

const randomNumberFourToSeven = (): number => {
  return 7 - Math.floor(Math.random() * 4);
}

const validateInput = (input: any) => {
  const inputIsNotAnArray = !Array.isArray(input)

  if(inputIsNotAnArray) {
    throw new Error('Input is not an array.')
  }

  if(input.length <= 7) {
    throw new Error('To be chunked array must have more than 7 elements.')
  }
}

export const aggregateIntoChunks = (array: string[]): Chunk[] => {
  validateInput(array);

  const workArray = [...array];
  const chunkedArray: Chunk[] = [];

  while(workArray.length > 0) {
    const chunkSize = randomNumberFourToSeven();
    let chunk: Chunk = []

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

aggregateIntoChunks(alphabet);
// example chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
