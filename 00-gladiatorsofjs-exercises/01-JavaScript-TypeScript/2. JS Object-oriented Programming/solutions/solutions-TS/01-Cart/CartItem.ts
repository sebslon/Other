import { v4 as uuid } from "uuid";

import Validator from "../utils/Validator";

export class CartItem {
  readonly _id: string;

  constructor(
    public name: any,
    public category: string,
    public price: number,
    public discount: number = 0,
    public quantity: number = 1,
  ) {
    this._id = uuid();

    Validator.check("Name", name).isNotEmpty().isString().min(5);
    Validator.check("Category", category).isNotEmpty().isString();
    Validator.check("Price", price).isNumber().min(0);
    Validator.check("Discount", discount).isNumber().between(0, 1);

    this.name = name;
    this.category = category;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;
  }

  change(property: string, newValue: string | number) {
    switch (property.toLowerCase()) {
      case "name":
        Validator.check("Name", newValue).isNotEmpty().isString().min(5);
        return (this.name = newValue as string);
      case "category":
        Validator.check("Category", newValue).isNotEmpty().isString();
        return (this.category = newValue as string);
      case "price":
        Validator.check("Price", newValue).isNumber().min(0);
        return (this.price = newValue as number);
      case "discount":
        Validator.check("Discount", newValue).isNumber().between(0, 1);
        return (this.discount = newValue as number);
      case "quantity":
        Validator.check("Quantity", newValue).isNumber().min(0);
        return (this.quantity = newValue as number);

      default:
        throw new Error(property + " property doesn't exist on CartItem");
    }
  }
}

// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać:
// - modyfikować cenę przedmiotu
// - określać jego rabat procentowy
// - dodawać produkt do kategorii
// - zmianę nazwy, ceny lub rabatu
