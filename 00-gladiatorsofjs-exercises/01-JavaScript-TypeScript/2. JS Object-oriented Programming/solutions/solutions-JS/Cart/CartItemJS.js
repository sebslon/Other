const { v4: uuid } = require("uuid");

class CartItem {
  constructor(name, category, price, discount = "0%") {
    this._id = uuid();
    this._name = name;
    this._category = category;
    this._price = price;
    this._discount = discount;
  }

  set setPrice(price) {
    return (this._price = price);
  }

  set setDiscount(discount) {
    return (this._discount = discount);
  }

  set changeName(name) {
    this._name = name;
  }

  set newCategory(category) {
    this._category = category;
  }
}

module.exports = CartItem;
// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać:
// - modyfikować cenę przedmiotu
// - określać jego rabat procentowy
// - dodawać produkt do kategorii
// - zmianę nazwy, ceny lub rabatu
