import { v4 as uuid } from 'uuid';

import Validator from '../utils/Validator';
import CartItem from './CartItem';

const discounts = {
  halfPrice: 0.5,
  quarter: 0.25,
  tiny: 0.1,
};

class Cart {
  private readonly _id: string;
  private discount: number;
  private discountCode: string;
  public items: CartItem[];

  constructor() {
    this._id = uuid();
    this.discount = 0;
    this.discountCode = "";
    this.items = [];
  }

  findItem(itemId: string) {
    return this.items.filter((item) => item._id === itemId);
  }

  addItem(item: CartItem) {
    if (!(item instanceof CartItem)) {
      throw new Error("This item can't be added to the cart.");
    }

    item.quantity++;

    if (this.findItem(item._id).length === 0) {
      this.items.push(item);
      return `${item} has been added to the cart.`;
    }

    return;
  }

  removeItem(item: CartItem) {
    if (!(item instanceof CartItem)) {
      throw new Error(item + " is not valid cart item.");
    }

    const index = this.items.findIndex((el) => el._id === item._id);
    this.items.splice(index, 1);

    return `${item.name} has been removed from the cart.`;
  }

  decreaseAmountOfItem(item: CartItem) {
    if (!(item instanceof CartItem)) {
      throw new Error("This item can't be added to the cart");
    }

    const [cartItem] = this.findItem(item._id);
    cartItem.quantity--;

    return;
  }

  addDiscountCode(code: string) {
    Validator.check("Discount code", code).isString();

    return (this.discountCode = code);
  }

  calculateDiscount() {
    const { discountCode } = this;

    if (discountCode === "half") {
      this.discount = discounts.halfPrice;
    } else if (discountCode === "quarter") {
      this.discount = discounts.quarter;
    } else if (discountCode === "tiny") {
      this.discount = discounts.tiny;
    } else {
      this.discount = 0;
    }

    return this.discount;
  }

  calculatePrice() {
    const totalItemsPrice = this.items.reduce((sum, currItem) => {
      const { price, discount } = currItem;
      const itemPrice = price - price * discount;

      return sum + itemPrice;
    }, 0);

    this.calculateDiscount();

    if (this.discount) {
      return totalItemsPrice - totalItemsPrice * this.discount;
    }

    return totalItemsPrice;
  }
}

// Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// Ma umożliwiać:
// - dodawanie/usuwanie przedmiotów do/z koszyka
// - zmianę ilości produktu w koszyku
// - podliczać wartość koszyka uwzględniajac rabaty
