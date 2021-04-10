import { aggregateIntoChunks } from "../01-aggregateArrayIntoChunks";

describe('aggregateArrayIntoChunks function', () => {
  it('should return array of chunks with length between 4 and 7', () => {
    const alphabet: string[] = "abcdefghijklmnoprstuwxyz".split("");
    const chunksArray = aggregateIntoChunks(alphabet);

    chunksArray.forEach(chunk => {
      expect(chunk.length).toBeGreaterThanOrEqual(4);
      expect(chunk.length).toBeLessThanOrEqual(7);
    })
  })

  it('should throw an error if input is not an array', () => {
    const alphabet: any = 'abcd';
    const errorMsg = "Input is not an array."

    expect(() => aggregateIntoChunks(alphabet)).toThrow(Error(errorMsg));
  })

  it('should throw an error if array length is less than 7', () => {
    const alphabet: any = 'abcd'.split('');
    const errorMsg = "To be chunked array must have more than 7 elements."

    expect(() => aggregateIntoChunks(alphabet)).toThrow(Error(errorMsg));
  })
})