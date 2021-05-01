const { v4: uuid } = require("uuid");
const CartItem = require("./CartItemJS");

class Cart {
  constructor() {
    this._id = uuid();
    this._cartItems = [];
    this._cartDiscount = 0;
    this._discountCode = "";
  }

  addItem(item) {
    this._cartItems.push(item);
  }

  removeItem(itemId) {
    this._cartItems = this._cartItems.filter((item) => item._id !== itemId);
    return this._cartItems;
  }
}

// Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// Ma umożliwiać:
// - dodawanie/usuwanie przedmiotów do/z koszyka
// - zmianę ilości produktu w koszyku
// - podliczać wartość koszyka uwzględniajac rabaty
