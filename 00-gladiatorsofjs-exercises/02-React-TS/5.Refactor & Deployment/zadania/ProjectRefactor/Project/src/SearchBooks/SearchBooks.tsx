import React, { useState } from "react";
import { FormBackground, BackgroundShadow, FormContainer, ListWrapper, StyledWrapper } from "./SearchBooks.css";
import SearchInput from "../SearchInput/SearchInput";
import ClipLoader from "react-spinners/ClipLoader";
import Scroll from "react-scroll";
import BookListItem from "../BookListItem/BookListItem";

export default function SearchBooks({ booksData, setBooksData }: any) {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [booksPerPage, setBooksPerPage] = useState(30);
  const [searchedBook, setSearchedBook] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleClick = async () => {
    setIsDataLoading(true);
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchedBook}${authorName.length > 1 ? `+inauthor:${authorName}` : ""}&maxResults=${booksPerPage}&startIndex=0`);
      const data = await response.json();
      if (data.items.length !== 0) {
        setBooksData(data.items);
      } else {
        console.error("There aren't any books with this name");
      }
    } catch (err) {
      console.error(err);
    }
    setIsDataLoading(false);
    Scroll.animateScroll.scrollTo(window.innerHeight);
  };

  return (
    <>
      <FormBackground img="./library.jpg">
        <BackgroundShadow>
          <FormContainer>
            {isDataLoading ? (
              <ClipLoader color="black" size={150} />
            ) : (
              <>
                <h1>Search books</h1>
                <SearchInput placeholder="Example: Harry Potter" value={searchedBook} changeFn={setSearchedBook} clickFn={handleClick} />
                <div>
                  <label htmlFor="booksAmount">Books amount: </label>
                  <input name="booksAmount" id="booksAmount" type="number" min="1" max="40" onChange={(e: any) => setBooksPerPage(parseInt(e.target.value))} />
                </div>
                <div>
                  <label htmlFor="bookAuthor">Specify author: </label>
                  <input name="bookAuthor" id="bookAuthor" type="text" onChange={(e: any) => setAuthorName(e.target.value)} />
                </div>
              </>
            )}
          </FormContainer>
        </BackgroundShadow>
      </FormBackground>
      {booksData.length > 0 && (
        <StyledWrapper id="app">
          <h2>Results for: {searchedBook}</h2>
          <ListWrapper>
            {booksData.map((book: any) => (
              <BookListItem key={book.etag} book={book} />
            ))}
          </ListWrapper>
          <button onClick={() => Scroll.animateScroll.scrollTo(0)}>Go up</button>
        </StyledWrapper>
      )}
    </>
  );
}
