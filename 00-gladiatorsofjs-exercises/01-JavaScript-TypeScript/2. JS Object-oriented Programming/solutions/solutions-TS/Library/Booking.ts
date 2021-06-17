import { v4 as uuid } from "uuid";
import { addDaysToDate } from "../helpers/addDaysToDate";

import { Book } from './Book';
import { User } from './User';

interface IBooking {
  userId: string;
  bookId: string;
  bookTitle: string;
  rentalDate: Date;
  returnDate: Date;
  penalty: number;
}

export class Booking {
  readonly _id: string;
  userId: string;
  bookId: string;
  bookTitle: string;
  rentalDate: Date;
  returnDate: Date;
  dailyPenalty: number;

  constructor(user: User, book: Book) {
    this._id = uuid();
    this.userId = user._id;
    this.bookId = book._id;
    this.bookTitle = book.title;
    this.rentalDate = new Date();
    this.returnDate = addDaysToDate(this.rentalDate, 7);
    this.dailyPenalty = 10;
  }
}

    // Ma mieć: datę wypożyczenia, datę zwrotu( +7d od wypożyczenia), id wypożyczonej, pozycji, jej tytuł. kara
    // Ma umożliwiać: 
    // - wypożyczenie ksiązki (jesli książki nie ma w liście - jest niedostepna/
    // wypożyczona ma zwracać informację) jesli jest dostępna usuwać książkę z listy
    // dostępnych, 
    // - zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie - 
    // każdy dzień zwłoki to naliczenie jakiejś kary. 


const date = new Date();
const nextDate = new Date(new Date().setDate(new Date().getDate() + 7));


console.log(date, '           ', nextDate)