import { PaginationActions, PaginationState } from "../../types";

import { PageSwitcher } from "../PageSwitcher";
import {
  NextPageButton,
  PaginationContainer,
  SwitchPageButton,
} from "./Pagination.styles";

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
    <PaginationContainer>
      {
        <SwitchPageButton
          onClick={() => goToPrevPage()}
          disabled={actualPageIndex === 0}
        >
          &#8249; Previous
        </SwitchPageButton>
      }

      <PageSwitcher
        actualPageIndex={actualPageIndex}
        lastPageIndex={lastPageIndex}
        goToPage={goToPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
      />

      <NextPageButton
        onClick={() => goToNextPage()}
        disabled={actualPageIndex === lastPageIndex}
      >
        Next &#8250;
      </NextPageButton>
    </PaginationContainer>
  );
};
