import { Cart } from "../../models/memory/Cart";

export const carts: Cart[] = [
  {
    _id: "1",
    products: [
      { _id: "10", name: "apple", price: 5, quantity: 1 },
      { _id: "20", name: "banana", price: 5, quantity: 1 },
    ],
  },
  {
    _id: "2",
    products: [
      { _id: "30", name: "pizza", price: 123, quantity: 1 },
      { _id: "40", name: "beer", price: 23, quantity: 1 },
    ],
  },
];
