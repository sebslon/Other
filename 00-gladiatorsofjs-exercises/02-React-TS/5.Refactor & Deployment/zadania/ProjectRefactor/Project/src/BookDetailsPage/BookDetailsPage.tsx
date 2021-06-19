import React, { useEffect, useState } from "react";
import getUrlParameters from "../getUrlParameters";
import { StyledWrapper } from "./BookDetailsPage.css";
import ReactStars from "react-stars";
import { useHistory } from "react-router-dom";

export default function BookDetails({ setFavouriteBooks, favouriteBooks, setBooksToRead, booksToRead }: any) {
  const [{ id, volumeInfo }, setBookData] = useState<any>({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const { id } = getUrlParameters(window.location.href);
    async function fetchData() {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await response.json();
        if (data.error) throw data.error.message;
        setBookData(data);
      } catch (err) {
        console.error(err);
      }
      setDataLoaded(true);
    }
    fetchData();
  }, []);

  const handleFavouriteButtonClick = () => {
    if (!favouriteBooks.includes(id)) {
      setFavouriteBooks((lastState: any) => [...lastState, id]);
    }
  };

  const handleBooksToReadButtonClick = () => {
    if (!booksToRead.includes(id)) {
      setBooksToRead((lastState: any) => [...lastState, id]);
    }
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <StyledWrapper>
      {dataLoaded ? (
        <>
          <button onClick={() => handleGoBack()}>Go back</button>
          <h1>{volumeInfo.title}</h1>
          <b>{volumeInfo.subtitle}</b>
          <p>{volumeInfo.authors.join(", ")}</p>
          {volumeInfo.averageRating && <ReactStars count={5} value={volumeInfo.averageRating} size={24} edit={false} color2={"#ffd700"} />}
          <div dangerouslySetInnerHTML={{ __html: volumeInfo.description }}></div>
          {volumeInfo.imageLinks ? <img src={volumeInfo.imageLinks.thumbnail} alt="book" /> : <img src="./defaultBookImage.png" alt="book" />}
          <p>Print length: {volumeInfo.pageCount}</p>
          <p>Language: {volumeInfo.language}</p>
          <p>Publisher: {volumeInfo.publisher}</p>
          <p>Publication date: {volumeInfo.publishedDate}</p>
          <button onClick={() => handleFavouriteButtonClick()}>Add book to section "Favourite books"</button>
          <button onClick={() => handleBooksToReadButtonClick()}>Add book to section "Books to read"</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </StyledWrapper>
  );
}
