import { SearchForm } from "./Search.css";

import { Magnifier } from "../../images";

export const Search = () => {
  return (
    <SearchForm>
      <button type="submit" onClick={(e) => e.preventDefault()}>
        <img src={Magnifier} alt="search button" />
      </button>
      <input type="text" placeholder="Search Twitter" />
    </SearchForm>
  );
};
