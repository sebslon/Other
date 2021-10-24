import { AddressBook } from "../06-AddressBook/AddressBook"
import { Contact } from "../06-AddressBook/Contact";
import { Group } from "../06-AddressBook/Group";

describe("AddressBook", () => {
  let addressBook: AddressBook;
  let contact: Contact;
  let group: Group;

  beforeEach(() => {
    addressBook = new AddressBook();
    contact = new Contact("testname", "surname", "test@gmail.com");
    group = new Group("testgroup");
  });

  it("Allows to add contact to address book", () => {
    addressBook.addContact(contact);

    expect(addressBook.contacts.length).toBe(1);
  });

  it("Allows to find contact by email", () => {
    addressBook.addContact(contact);

    expect(addressBook.findContactByEmail("test@gmail.com")).toBe(contact);
  })

  it("Allows to find contact by phrase", () => {
    addressBook.addContact(contact);

    expect(addressBook.findContactByPhrase("test")).toBe(contact);
  })

  it("Allows to remove contact by it's id", () => {
    addressBook.addContact(contact);
    addressBook.removeContact(contact.id);

    expect(addressBook.contacts.length).toBe(0);
  })

  it("Allows to add a group to address book", () => {
    addressBook.addGroup(group);

    expect(addressBook.groups.length).toBe(1);
  })
})