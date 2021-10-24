import { Cart } from "../01-Cart/Cart";
import { CartItem } from "../01-Cart/CartItem";

describe("Cart Item", () => {
  let cartItem: CartItem;

  beforeAll(() => {
    cartItem = new CartItem("T-shirt", "shirts", 30);
  });

  it("Creates cart item if proper data is provided", () => {
    expect(cartItem).toHaveProperty("name", "T-shirt");
    expect(cartItem).toHaveProperty("category", "shirts");
    expect(cartItem).toHaveProperty("price", 30);
    expect(cartItem).toHaveProperty("discount", 0);
    expect(cartItem).toHaveProperty("quantity", 0);
  });

  it("Allows to change given (name, category, price) properties", () => {
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

describe("Cart", () => {
  let cartItem: CartItem;
  let cartItem2: CartItem;
  let cart: Cart;

  beforeEach(() => {
    cartItem = new CartItem("T-shirt", "shirts", 30, 0, 5);
    cartItem2 = new CartItem("T-shirt2", "shirts", 50, 0, 5);
    cart = new Cart();
    cart.addItem(cartItem);
  });

  it("Allows to add cart item to the cart", () => {
    cart.addItem(cartItem2);

    expect(cart.items.length).toBe(2);
  });

  it("Allows to find item by its id", () => {
    const foundCartItem = cart.findItem(cartItem._id);

    expect(foundCartItem).toBe(cartItem);
  });

  it("Allows to remove item from cart", () => {
    cart.removeItem(cartItem);

    expect(cart.items.length).toBe(0);
  });

  it("Allows to decrease amount of specified item in cart", () => {
    const newItem = new CartItem("testtest", "test", 10);

    cart.addItem(newItem);
    cart.addItem(newItem); // Added two times - quantity: 2

    cart.decreaseAmountOfItem(newItem._id);

    expect(newItem.quantity).toBe(1);
  });

  it("Properly calculates price for cart", () => {
    cart.addItem(cartItem2);

    const total = cart.calculatePrice();

    expect(total).toBe(80);
  });

  it("Properly calculates price for cart if discount is applied", () => {
    cart.addItem(cartItem2);
    cart.addDiscountCode("half");

    const total = cart.calculatePrice();

    expect(total).toBe(40);
  });
});
