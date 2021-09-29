import data from "./data.json";

import { Table } from "./styles";

import { usePagination } from "./hooks/usePagination";
import { PaginatedTable } from "./components/PaginatedTable";
import { Pagination } from "./components/Pagination";

export const TableWithPagination = () => {
  const [paginationState, paginationActions] = usePagination(data);

  const { entriesOnSelectedPage } = paginationState;

  return (
    <Table>
      <PaginatedTable data={entriesOnSelectedPage} />
      <Pagination
        paginationActions={paginationActions}
        paginationState={paginationState}
      />
    </Table>
  );
};
