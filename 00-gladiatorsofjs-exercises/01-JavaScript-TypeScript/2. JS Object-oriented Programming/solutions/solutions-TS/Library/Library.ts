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

  findBook(book: Book) {
    const index = this.books.indexOf(book);
    if(index === -1) {
      throw new Error('Book not found');
    }
    return this.books[index];
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

  createBooking(book: Book, user: LibraryUser) {
    const bookInLibrary = this.findBook(book);

    if(!bookInLibrary) {
      throw new Error("Sorry, we don't have this book.")
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
      throw new Error('You have to pay penalty: ' + penalty);
    }

    const [ returnedBook ] = this.borrowedBooks.filter(book => book._id === booking.bookId);
    this.books.push(returnedBook);
    this.bookings.splice(bookingIndex, 1)

    return "Successfully returned";
  }
}

