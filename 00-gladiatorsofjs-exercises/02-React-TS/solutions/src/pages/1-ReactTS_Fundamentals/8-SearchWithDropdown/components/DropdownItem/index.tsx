import { ISearchData } from "../../data";

interface DropdownItemProps {
  data: ISearchData;
}

export const DropdownItem = ({ data }: DropdownItemProps) => {
  return (
    <div>
      <span>{data.name}</span>
      <span>{data.salePrice} </span>
      <span>{data.regularPrice} </span>
    </div>
  );
};
