import { recursivePromise } from "../recursivePromise";

describe("recursivePromise function", () => {
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);
  const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 4);
  });
  const p5 = Promise.resolve(5);
  const p6 = Promise.resolve(6);
  const p7 = Promise.resolve(7);

  it("Should resolve promises values in order they were passed in arguments", async () => {
    const result = await recursivePromise([p1, p2, p3, p4, p5, p6, p7]);
    const expected = [1, 2, 3, 4, 5, 6, 7];

    expect(result).toEqual(expected);
  });

  it("Should reject with resolved promises until rejection (including reject value)", async () => {
    const rejected = Promise.reject("rejected");
    const expected = [1, 2, 3, "rejected"];

    expect(await recursivePromise([p1, p2, p3, rejected, p4, p5, p6])).toEqual(
      expected
    );
  });
});
