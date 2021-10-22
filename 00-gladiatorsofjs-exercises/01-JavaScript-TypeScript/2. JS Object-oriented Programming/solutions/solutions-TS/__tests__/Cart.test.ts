import { Cart } from "../01-Cart/Cart";
import { CartItem } from "../01-Cart/CartItem";

describe("Cart Item", () => {
  let cartItem: CartItem;

  beforeEach(() => {
    cartItem = new CartItem("T-shirt", "shirts", 30);
  });

  it("Creates cart item if proper data is provided", () => {
    expect(cartItem).toHaveProperty("name", "T-shirt");
    expect(cartItem).toHaveProperty("category", "shirts");
    expect(cartItem).toHaveProperty("price", 30);
    expect(cartItem).toHaveProperty("discount", 0);
    expect(cartItem).toHaveProperty("quantity", 1);
  });

  it("Allows to change given properties", () => {
    cartItem.change("name", "testtest");
    cartItem.change("category", "test");
    cartItem.change("price", 50);

    expect(cartItem).toHaveProperty("name", "testtest");
    expect(cartItem).toHaveProperty("category", "test");
    expect(cartItem).toHaveProperty("price", 50);
  });

  it("Throws error if name is too short (5)", () => {
    const shortName = "test";

    expect(() => new CartItem(shortName, "test", 10)).toThrowError();
  });

  it("Throws error if category is not provided", () => {
    expect(() => new CartItem("testtest", "", 10)).toThrowError();
  });

  it("Throws error if price is below zero", () => {
    expect(() => new CartItem("testtest", "test", -10)).toThrowError();
  });

  it("Throws error if given discount is not in range (0, 1)", () => {
    expect(() => new CartItem("testtest", "test", 10, 2)).toThrowError();
  });

  it("Throws error if trying to change property that doesn't exist", () => {
    expect(() => cartItem.change("non-existing-property", "")).toThrowError();
  });
});

// describe("Cart", () => {
//   it("")
// })
