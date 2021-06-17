import { Book } from "./Book";
import { Booking } from "./Booking";
import { User } from "./User";

interface ILibrary {
  books: Book[];
  borrowedBooks: Book[];
  bookings: Booking[];
}

class Library implements ILibrary {
  libraryName: string;
  books: Book[];
  borrowedBooks: Book[];
  bookings: Booking[];

  constructor(libraryName: string) {
    this.libraryName = libraryName;
    this.books = [];
    this.bookings = [];
    this.borrowedBooks = [];
  }

  addBook(book: Book) {
    if(this.books.includes(book)) {
      throw new Error('Book is already in the library.');
    }

    this.books.push(book);
  }

  removeBook(book: Book) {
    const bookIndex = this.books.indexOf(book);
    
    if (bookIndex === -1) {
      throw new Error('This book is not in the library.')
    }

    return this.books.splice(bookIndex, 1);
  }

  borrowBook(book: Book, user: User) {
    const booking = new Booking(user, book);

    return this.bookings.push(booking);
  }
}

// Ma miec: listę książek, listę wypożyczeń oraz listę wypożyczonych książek -- DONE
// Ma umożliwiać:
// - dodawanie książek do listy
// - usuwanie książek z listy
// - wypożyczanie książki dla usera X
// - oddanie wypożyczania książki

const library = new Library('Krakowska')
const book = new Book('Książka', 'autor');
const book1 = new Book('Książkax', 'autor');
const book2 = new Book('Książkaxy', 'autor');

const seba = new User('seba', 'sloniec');

library.addBook(book);
library.addBook(book1);

library.borrowBook(book1, seba);

console.log(library.bookings);