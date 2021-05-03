const { v4: uuid } = require("uuid");

const CartItem = require("./CartItemJS");
const Validator = require("../utils/Validator");
class Cart {
  constructor() {
    this._id = uuid();
    this.items = [];
    this.discount = 0;
    this.discountCode = "";
  }

  findItem(itemId) {
    return this.items.filter((item) => item._id === itemId);
  }

  addItem(item) {
    if (!item instanceof CartItem) {
      throw new Error("This item can't be added to the cart.");
    }

    item.quantity++;

    if (this.findItem(item._id).length === 0) {
      this.items.push(item);
      return `${item} has been added to the cart.`;
    }

    return;
  }

  removeItem(item) {
    if (!item instanceof CartItem) {
      throw new Error(item + " is not valid cart item.");
    }

    const index = this.items.findIndex((el) => el._id === item._id);
    this.items.splice(index, 1);

    return `${item.name} has been removed from the cart.`;
  }

  decreaseAmountOfItem(item) {
    if (!item instanceof CartItem) {
      throw new Error("This item can't be added to the cart");
    }

    const [cartItem] = this.findItem(item._id);
    cartItem.quantity--;

    return;
  }

  calculatePrice() {
    const totalItemsPrice = this.items.reduce((sum, currItem) => {
      const { price, discount } = currItem;
      const itemPrice = price - price * discount;

      return sum + itemPrice;
    }, 0);

    if(this.discount) {
      return totalItemsPrice - totalItemsPrice * this.discount;
    }
    
    return totalItemsPrice;
  }
}

const cart = new Cart();
const koszulka = new CartItem("koszulka", "koszulki", 50, 0.2);
const spodnie = new CartItem("spodnie", "spodnie", 50, 0);

cart.addItem(koszulka);
cart.addItem(koszulka);
cart.addItem(spodnie);

cart.decreaseAmountOfItem(koszulka);

const price = cart.calculatePrice();
console.log(price);
// console.log(cart.items);

// console.log(cart);
// Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// Ma umożliwiać:
// - dodawanie/usuwanie przedmiotów do/z koszyka
// - zmianę ilości produktu w koszyku
// - podliczać wartość koszyka uwzględniajac rabaty
