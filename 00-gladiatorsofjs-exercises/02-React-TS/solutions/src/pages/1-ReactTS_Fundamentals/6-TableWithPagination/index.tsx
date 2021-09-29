import data from './data.json';

import { PaginatedTable } from "./components/PaginatedTable"


export const TableWithPagination = () => {
  return <PaginatedTable data={data} />
}