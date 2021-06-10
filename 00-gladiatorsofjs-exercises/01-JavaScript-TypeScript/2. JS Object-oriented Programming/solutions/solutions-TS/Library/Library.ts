import { Book } from "./Book";
import { Booking } from "./Booking";

class Library {
  books: Book[];
  borrowedBooks: Book[];
  bookings: Booking[];

  constructor() {
    this.books = [];
    this.bookings = [];
    this.borrowedBooks = [];
  }
}

// Ma miec: listę książek, listę wypożyczeń oraz listę wypożyczonych książek
// Ma umożliwiać:
// - dodawanie książek do listy
// - usuwanie książek z listy
// - wypożyczanie książki dla usera X
// - oddanie wypożyczania książki
