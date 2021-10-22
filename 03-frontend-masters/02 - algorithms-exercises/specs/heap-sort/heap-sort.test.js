/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

//core
const heapSort = (array) => {
  array = createMaxHeap(array);

  for (let i = array.length - 1; i > 0; i--) {
    swap(0, i, array);
    heapify(array, 0, i);
  }

  return array;
};

const createMaxHeap = (array) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length)
  }

  return array;
};

const swap = (idx1, idx2, array) => {
  let tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;

  return array;
} 

const heapify = (array, index, heapSize) => {
  //2n+1, 2n+2
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  let largestValueIndex = index;

  if(heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left;
  }

  if(heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right;
  }

  if (largestValueIndex !== index) {
    swap(index, largestValueIndex, array);
    heapify(array, largestValueIndex, heapSize);
  }
};

// unit tests
// do not modify the below code
test("heap sort", function () {
  const nums = [2, 59, 3, 8, 15, 60, 4, 7, 90, 1];
  heapSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 7, 8,  15, 59, 60, 90]);
});
