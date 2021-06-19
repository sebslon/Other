import React, { useState, useEffect } from "react";
import { StyledWrapper } from "./FavouriteBooksPage.css";
import BookListItem from "../BookListItem/BookListItem";

export default function FavouriteBooksPage({ favouriteBooks, setFavouriteBooks }: any) {
  const [booksData, setBooksData] = useState<any>([]);
  const [isDataLoaded, setIsDataLoaded] = useState<any>(false);
  const [isDeletingModeActive, setIsDeletingModeActive] = useState<any>(false);

  const handleToggle = () => {
    setIsDeletingModeActive((lastState: any) => !lastState);
  };

  const handleDelete = (id: any) => {
    setFavouriteBooks((lastState: any) => lastState.filter((bookId: any) => bookId !== id));
    setBooksData((lastState: any) => lastState.filter((book: any) => book.id !== id));
  };

  useEffect(() => {
    async function fetchData() {
      // https://gladiators-of-javascript.com/blog/async-await-nie-takie-fajne-jak-myslisz-prostota-syntaxu-kosztem-uzytkownika/
      // Artykuł powinien uświadomić Tobie, że nie zawsze warto używać async await, i poniższy kod trzeba poprawić
      const results = await Promise.all(
        favouriteBooks.map(async (id: any) => {
          try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
            const data = await response.json();
            if (data.error) throw data.error.message;
            return data;
          } catch (err) {
            console.error(err);
          }
        })
      );
      setBooksData(results);
      setIsDataLoaded(true);
    }
    fetchData();
  }, [favouriteBooks]);

  return (
    <StyledWrapper>
      <h2>Favourite Books</h2>
      <p>This is page where you can find your favourite books!</p>
      <button onClick={() => handleToggle()}>{isDeletingModeActive ? "Disable" : "Enable"} deleting mode</button>
      {isDataLoaded && booksData.map((book: any) => <BookListItem key={book.etag} book={book} deletingMode={isDeletingModeActive} deleteFn={handleDelete} />)}
    </StyledWrapper>
  );
}
