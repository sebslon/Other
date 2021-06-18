import { Book } from "./Book";
import { Booking } from "./Booking";
import { LibraryUser } from "./LibraryUser";

interface ILibrary {
  libraryName: string;
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
    const bookInLibrary = this.books.indexOf(book) !== -1;
    if(bookInLibrary) {
      throw new Error("Book is already in the library.")
    }

    this.books.push(book);
  }

  removeBook(book: Book) {
    const bookIndex = this.books.indexOf(book);

    if (bookIndex === -1) {
      throw new Error("This book is not in the library.");
    }

    return this.books.splice(bookIndex, 1);
  }

  createBooking(book: Book, user: LibraryUser) {
    const bookInLibrary = this.findBook(book);

    if (!bookInLibrary) {
      throw new Error("Sorry, we don't have this book.");
    }

    const booking = new Booking(user, book);

    this.borrowedBooks.push(book);
    this.bookings.push(booking);
    this.removeBook(book);

    return booking;
  }

  finishBooking(booking: Booking, date: Date) {
    const bookingIndex = this.bookings.indexOf(booking);
    const penalty = this.bookings[bookingIndex].calculatePenalty(date);

    if (penalty !== 0) {
      throw new Error("You have to pay penalty: " + penalty);
    }

    const [returnedBook] = this.borrowedBooks.filter(
      (book) => book._id === booking.bookId
    );
    this.books.push(returnedBook);
    this.bookings.splice(bookingIndex, 1);

    return "Successfully returned";
  }

  findBook(book: Book) {
    const index = this.books.indexOf(book);
    if (index === -1) {
      throw new Error("Book not found");
    }
    return this.books[index];
  }
}

// Ma miec: listę książek, listę wypożyczeń oraz listę wypożyczonych książek -- DONE
// Ma umożliwiać:
// - dodawanie książek do listy
// - usuwanie książek z listy
// - wypożyczanie książki dla usera X
// - oddanie wypożyczania książki

const library = new Library("Krakowska");
const book = new Book("Książka", "autor");
const book1 = new Book("Książkax", "autor");
const book2 = new Book("Książkaxy", "autor");

const seba = new LibraryUser("seba", "sloniec");

library.addBook(book);
library.addBook(book1);
library.addBook(book2);

const booking = library.createBooking(book, seba);
library.finishBooking(booking, new Date(2020, 14, 14));

console.log(library.bookings);
console.log(library.books);
