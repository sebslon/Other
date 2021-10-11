import { ISearchData } from "../../data";
import { DropdownItem } from "../DropdownItem";

import { List } from "./DropdownList.styles";

interface DropdownListProps {
  data: ISearchData[];
  searchPhrase: string;
}

export const DropdownList = ({ data, searchPhrase }: DropdownListProps) => {
  const matchingData = data.filter(({ name }) => {
    const regex = new RegExp(searchPhrase, "i");

    return regex.test(name);
  });

  return (
    <List>
      {matchingData.map((data, idx) => (
        <li key={idx}>
          <DropdownItem data={data} searchPhrase={searchPhrase} />
        </li>
      ))}
    </List>
  );
};
