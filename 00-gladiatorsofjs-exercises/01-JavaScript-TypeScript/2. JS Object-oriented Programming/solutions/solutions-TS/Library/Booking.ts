import { v4 as uuid } from "uuid";
import { addDaysToDate } from "../helpers/addDaysToDate";

import { Book } from './Book';
import { LibraryUser } from './LibraryUser';

interface IBooking {
  userId: string;
  bookId: string;
  bookTitle: string;
  rentalDate: Date;
  returnDate: Date;
  dailyPenalty: number;
}

export class Booking implements IBooking {
  readonly _id: string;
  userId: string;
  bookId: string;
  bookTitle: string;
  rentalDate: Date;
  returnDate: Date;
  dailyPenalty: number;

  constructor(user: LibraryUser, book: Book) {
    this._id = uuid();
    this.userId = user._id;
    this.bookId = book._id;
    this.bookTitle = book.title;
    this.rentalDate = new Date();
    this.returnDate = addDaysToDate(this.rentalDate, 7);
    this.dailyPenalty = 10;
  };

  calculatePenalty(dateOfReturn: Date) {
    const days = 24 * 60 * 60 * 1000;

    const daysToReturnDate = Math.round((this.returnDate.getTime() - dateOfReturn.getTime()) / days);
    
    if(daysToReturnDate < 0) {
      return Math.abs(this.dailyPenalty * daysToReturnDate);
    } else {
      return 0;
    }
  }
}
