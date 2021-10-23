import { ISearchData } from "../../data";

import { Item, Prices, RegPrice, SalePrice } from "./DropdownItem.styles";

interface DropdownItemProps {
  data: ISearchData;
  searchPhrase: string;
}

export const DropdownItem = ({ data, searchPhrase }: DropdownItemProps) => {
  const regex = new RegExp(`(${searchPhrase})`, "i");

  return (
    <Item>
      <p>
        {data.name.split(regex).map((word) => {
          if (regex.test(word)) return <strong key={word}>{word}</strong>;

          return word;
        })}
      </p>

      <Prices>
        <RegPrice>${data.regularPrice} </RegPrice>
        <SalePrice>${data.salePrice} </SalePrice>
      </Prices>
    </Item>
  );
};
