import { Book } from "../02-Library/Book";
import { Booking } from "../02-Library/Booking";
import { Library } from "../02-Library/Library";
import { LibraryUser } from "../02-Library/LibraryUser";

import { addDaysToDate } from "../helpers/addDaysToDate";

describe("Book", () => {
  it("Should create a book if proper data is provided", () => {
    const book = new Book("Title", "Author");

    expect(book).toHaveProperty("title", "Title");
    expect(book).toHaveProperty("author", "Author");
  });

  it("Should be able to set image and description", () => {
    const book = new Book("Title", "Author");

    book.setImage("http://url.com");
    book.setDescription("description");

    expect(book).toHaveProperty("picture", "http://url.com");
    expect(book).toHaveProperty("description", "description");
  });

  it("Should throw errors if data is not valid", () => {
    expect(() => new Book("", "")).toThrowError();
  });
});

describe("Booking", () => {
  it("Should add penalty if book is returned later than 7 days", () => {
    const book = new Book("title", "author");
    const user = new LibraryUser("username", "surname");
    const booking = new Booking(user, book);

    const dateOfReturn = addDaysToDate(new Date(), 10); // 10 days (penalty is calculated after 7 days);
    const penalty = booking.calculatePenalty(dateOfReturn);

    expect(penalty).toBe(booking.dailyPenalty * 3);
  });
});

describe("Library", () => {
  let library: Library;
  let user: LibraryUser;
  let book: Book;

  beforeAll(() => {
    library = new Library("library");
    user = new LibraryUser("username", "surname");
    book = new Book("title", "author");

    library.addBook(book);
  });

  it("Should allow to create booking and later on finish it", () => {
    const booking = library.createBooking(book, user);

    expect(library.bookings.length).toBe(1);

    library.finishBooking(booking, new Date());

    expect(library.bookings.length).toBe(0);
  });
});
