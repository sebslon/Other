import { useState } from "react";

import { searchData } from "../../data";

import { DropdownList } from "../DropdownList";

export const SearchWithDropdown = () => {
  const [phrase, setPhrase] = useState("");

  return (
    <div>
      <input
        type="search"
        value={phrase}
        onChange={({ target }) => setPhrase(target.value)}
      />
      {phrase.trim().length > 3 ? (
        <DropdownList data={searchData} searchPhrase={phrase} />
      ) : null}
    </div>
  );
};
