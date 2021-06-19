import React, { useState, useEffect } from "react";
import { StyledWrapper } from "./BooksToReadPage.css";
import BookListItem from "../BookListItem/BookListItem";

export default function BooksToReadPage({ booksToRead, setBooksToRead }: any) {
  const [booksData, setBooksData] = useState<any>([]);
  const [isDataLoaded, setIsDataLoaded] = useState<any>(false);
  const [isDeletingModeActive, setIsDeletingModeActive] = useState<any>(false);

  const handleToggle = () => {
    setIsDeletingModeActive((lastState: any) => !lastState);
  };

  const handleDelete = (id: any) => {
    setBooksToRead((lastState: any) => lastState.filter((bookId: any) => bookId !== id));
    setBooksData((lastState: any) => lastState.filter((book: any) => book.id !== id));
  };

  useEffect(() => {
    async function fetchData() {
      // https://gladiators-of-javascript.com/blog/async-await-nie-takie-fajne-jak-myslisz-prostota-syntaxu-kosztem-uzytkownika/
      // Artykuł powinien uświadomić Tobie, że nie zawsze warto używać async await, i poniższy kod trzeba poprawić
      const results = await Promise.all(
        booksToRead.map(async (id: any) => {
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
  }, [booksToRead]);

  return (
    <StyledWrapper>
      <h2>Books To Read</h2>
      <p>This is page where you can find books that you planned to read!</p>
      <button onClick={() => handleToggle()}>{isDeletingModeActive ? "Disable" : "Enable"} deleting mode</button>
      {isDataLoaded && booksData.map((book: any) => <BookListItem key={book.etag} book={book} deletingMode={isDeletingModeActive} deleteFn={handleDelete} />)}
    </StyledWrapper>
  );
}
