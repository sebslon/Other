import React, { useState } from "react";
import SearchBooks from "./SearchBooks/SearchBooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import BookDetailsPage from "./BookDetailsPage/BookDetailsPage";
import FavouriteBooksPage from "./FavouriteBooksPage/FavouriteBooksPage";
import BooksToReadPage from "./BooksToReadPage/BooksToReadPage";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [booksData, setBooksData] = useState<any>([]);
  const [favouriteBooks, setFavouriteBooks] = useLocalStorage("favouriteBooks", []);
  const [booksToRead, setBooksToRead] = useLocalStorage("booksToRead", []);

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <SearchBooks booksData={booksData} setBooksData={setBooksData} />
          </Route>
          <Route path="/book">
            <BookDetailsPage setFavouriteBooks={setFavouriteBooks} favouriteBooks={favouriteBooks} setBooksToRead={setBooksToRead} booksToRead={booksToRead} />
          </Route>
          <Route path="/favouriteBooks">
            <FavouriteBooksPage favouriteBooks={favouriteBooks} setFavouriteBooks={setFavouriteBooks} />
          </Route>
          <Route path="/booksToRead">
            <BooksToReadPage booksToRead={booksToRead} setBooksToRead={setBooksToRead} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
