import React from "react";
import { SearchContainer, StyledInput, StyledButton } from "./SearchInput.css";

export default function SearchInput({ placeholder, value, changeFn, clickFn }: any) {
  return (
    <SearchContainer>
      <StyledInput type="text" placeholder={placeholder} onChange={(e: any) => changeFn(e.target.value)} value={value} />
      <StyledButton onClick={() => clickFn()}>
        <img src="./magnifier.svg" alt="Search books" />
      </StyledButton>
    </SearchContainer>
  );
}
