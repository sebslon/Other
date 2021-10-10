import { ISearchData } from "../../data";
import { DropdownItem } from "../DropdownItem";

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
    <ul>
      {matchingData.map((data, idx) => (
        <li>
          <DropdownItem key={idx} data={data} />
        </li>
      ))}
    </ul>
  );
};
