const { v4: uuid } = require("uuid");
const Validator = require("../utils/Validator");

class CartItem {
  constructor(name, category, price, discount = 0) {
    this._id = uuid();

    Validator.check("Name", name).isNotEmpty().isString().min(5);
    Validator.check("Category", category).isNotEmpty().isString();
    Validator.check("Price", price).isNumber().min(0);
    Validator.check("Discount", discount).isNumber().between(0, 1);

    this.name = name;
    this.category = category;
    this.price = price;
    this.discount = discount;
    this.quantity = 0;
  }

  change(property, newValue) {
    switch (property) {
      case "name":
        Validator.check("Name", newValue).isNotEmpty().isString().min(5);
        return (this.name = newValue);
      case "category":
        Validator.check("Category", newValue).isNotEmpty().isString();
        return (this.category = newValue);
      case "price":
        Validator.check("Price", newValue).isNumber().min(0);
        return (this.price = newValue);
      case "discount":
        Validator.check("Discount", newValue).isNumber().between(0, 1);
        return (this.discount = newValue);
      case "quantity":
        Validator.check("Quantity", newValue).isNumber().min(0);
        return (this.quantity = newValue);

      default:
        throw new Error(property + " property doesn't exist on CartItem");
    }
  }
}

module.exports = CartItem;

// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać:
// - modyfikować cenę przedmiotu
// - określać jego rabat procentowy
// - dodawać produkt do kategorii
// - zmianę nazwy, ceny lub rabatu
