import React from "react";
import ReactStars from "react-stars";
import { BookContainer, BookDetails, DeletingModeBox, BookWrapper } from "./BookListItem.css";
import { useHistory } from "react-router-dom";

export default function BookListItem({ book, deletingMode = false, deleteFn }: any) {
  const history = useHistory();
  const { volumeInfo, id } = book;
  const { title, authors } = volumeInfo;

  const handleClick = () => {
    history.push(`/book?id=${id}`);
  };

  return (
    <BookContainer>
      {deletingMode && (
        <DeletingModeBox>
          <button onClick={() => deleteFn(id)}>Remove book</button>
        </DeletingModeBox>
      )}
      <BookWrapper onClick={() => handleClick()}>
        {volumeInfo.imageLinks ? <img src={volumeInfo.imageLinks.thumbnail} alt="book" /> : <img src="./defaultBookImage.png" alt="book" />}
        <BookDetails>
          {volumeInfo.averageRating && <ReactStars count={5} value={volumeInfo.averageRating} size={24} edit={false} color2={"#ffd700"} />}
          <b>{title}</b>
          {authors && <p>{authors.join(", ")}</p>}
        </BookDetails>
      </BookWrapper>
    </BookContainer>
  );
}
