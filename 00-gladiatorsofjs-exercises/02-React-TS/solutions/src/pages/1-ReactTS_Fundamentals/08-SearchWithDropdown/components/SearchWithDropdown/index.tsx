import { useState } from "react";

import { searchData } from "../../data";
import { SearchContainer, SearchForm } from "./SearchWithDropdown.styles";

import { DropdownList } from "../DropdownList";
import { Magnifier } from "../../images";

export const SearchWithDropdown = () => {
  const [phrase, setPhrase] = useState("");

  return (
    <SearchContainer>
      <SearchForm onSubmit={(e) => e.preventDefault()}>
        <input
          name="search"
          aria-label="search"
          placeholder="Enter search phrase"
          value={phrase}
          autoComplete="off"
          autoFocus
          onChange={({ target }) => setPhrase(target.value)}
        />
        <button type="submit">
          <img src={Magnifier} alt="Search" />
        </button>
      </SearchForm>

      {phrase.trim().length > 3 ? (
        <DropdownList data={searchData} searchPhrase={phrase} />
      ) : (
        <p>Sorry.. Nothing Found</p>
      )}
    </SearchContainer>
  );
};
