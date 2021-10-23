import data from "./data.json";

import { Loading, Table } from "./styles";

import { usePagination } from "./hooks/usePagination";
import { PaginatedTable } from "./components/PaginatedTable";
import { Pagination } from "./components/Pagination";

export const TableWithPagination = () => {
  const [paginationState, paginationActions] = usePagination(data);

  const { entriesOnSelectedPage, isBusy } = paginationState;

  return (
    <>
      <Table>
        {isBusy ? (
          <Loading />
        ) : (
          <>
            <PaginatedTable data={entriesOnSelectedPage} />
            <Pagination
              paginationActions={paginationActions}
              paginationState={paginationState}
            />
          </>
        )}
      </Table>
    </>
  );
};
