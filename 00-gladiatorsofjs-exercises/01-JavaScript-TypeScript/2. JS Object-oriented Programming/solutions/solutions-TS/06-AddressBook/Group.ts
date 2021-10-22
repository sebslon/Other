import { v4 as uuid } from "uuid";

import Validator from "../utils/Validator";

import { Contact } from "./Contact";

export class Group {
  id: string;
  contacts: Contact[] = [];

  constructor(public name: string) {
    this.id = uuid();
    this.name = name;
  }

  changeName(name: string) {
    Validator.check("Name", name).isNotEmpty().isString();

    this.name = name;
  }

  addContact(contact: Contact) {
    if(this.contacts.find(el => el.email === contact.email)) {
      throw new Error(`User with email ${contact.email} already exists in this group`);
    }

    this.contacts.push(contact);

    return contact;
  }

  deleteContact(email: string) {
    return (this.contacts = this.contacts.filter(
      (contact) => contact.email !== email
    ));
  }

  hasContact(email: string) {
    return this.contacts.find((contact) => contact.email === email);
  }
}
