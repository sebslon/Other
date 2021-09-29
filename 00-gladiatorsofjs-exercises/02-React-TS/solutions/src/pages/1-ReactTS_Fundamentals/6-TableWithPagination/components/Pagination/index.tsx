import { PaginationActions, PaginationState } from "../../types";

import { PageSwitcher } from "../PageSwitcher";

interface PaginationProps {
  paginationActions: PaginationActions;
  paginationState: PaginationState;
}

export const Pagination = ({
  paginationActions,
  paginationState,
}: PaginationProps) => {
  const { goToNextPage, goToPrevPage, goToLastPage, goToFirstPage, goToPage } =
    paginationActions;

  const { actualPageIndex, lastPageIndex } = paginationState;

  return (
    <div>
      <button onClick={() => goToFirstPage()}>Go to first page</button>
      <button onClick={() => goToPrevPage()}>Previous</button>

      <PageSwitcher
        actualPageIndex={actualPageIndex}
        lastPageIndex={lastPageIndex}
        goToPage={goToPage}
      />

      <button onClick={() => goToNextPage()}>Next</button>
      <button onClick={() => goToLastPage()}>Go to last page</button>
    </div>
  );
};
