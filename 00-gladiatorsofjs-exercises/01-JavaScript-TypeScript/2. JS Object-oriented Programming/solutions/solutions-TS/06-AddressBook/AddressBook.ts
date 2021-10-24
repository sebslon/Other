import { Contact } from "./Contact";
import { Group } from "./Group";

export class AddressBook {
  public contacts: Contact[] = [];
  public groups: Group[] = [];

  findContactByEmail(email: string) {
    return this.contacts.find((contact) => contact.email === email);
  }

  findContactByPhrase(phrase: string) {
    const regexp = new RegExp(phrase, `gi`);
    let result;

    this.contacts.forEach((contact) => {
      const values = Object.values(contact);

      values.forEach((value) => {
        if (regexp.test(value)) {
          result = contact;
        }
      });
    });

    return result ? result : "Not found";
  }

  addContact(contact: Contact) {
    if(this.contacts.find(el => el.email === contact.email)) {
      throw new Error(`User with ${contact.email} is already in address book.`);
    }

    this.contacts.push(contact);
  }

  removeContact(id: string) {
    this.contacts = this.contacts.filter(el => el.id !== id);

    return;
  }

  addGroup(group: Group) {
    if(this.groups.find(gr => gr.id === group.id)) {
      throw new Error(`Group with ${group.name} is already in this address book.`);
    }

    this.groups.push(group);

    return;
  }

  removeGroup(id: string) {
    this.groups = this.groups.filter(el => el.id !== id);

    return;
  }

  findGroupByName(name: string) {
    return this.groups.find(group => group.name === name);
  }
}