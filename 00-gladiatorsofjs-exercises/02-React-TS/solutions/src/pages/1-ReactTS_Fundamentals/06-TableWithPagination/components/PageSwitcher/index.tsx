import { PageButton, PageSwitcherContainer } from "./PageSwitcher.styles";

interface PageSwitcherProps {
  actualPageIndex: number;
  lastPageIndex: number;
  goToPage: (page: number) => void;
  goToFirstPage: () => void;
  goToLastPage: () => void;
}

export const PageSwitcher = ({
  actualPageIndex,
  lastPageIndex,
  goToPage,
  goToFirstPage,
  goToLastPage,
}: PageSwitcherProps) => {
  const sideButtonsAmount = 2;

  const firstButtonIndex =
    actualPageIndex >= sideButtonsAmount
      ? actualPageIndex - sideButtonsAmount
      : 0;

  const lastButtonIndex =
    lastPageIndex - actualPageIndex > sideButtonsAmount
      ? actualPageIndex + sideButtonsAmount
      : lastPageIndex;

  const buttons = new Array(lastButtonIndex - firstButtonIndex + 1).fill(0);

  return (
    <PageSwitcherContainer>
      {actualPageIndex > sideButtonsAmount && (
        <>
          <PageButton
            isActive={actualPageIndex === 1}
            onClick={() => goToFirstPage()}
          >
            1
          </PageButton>
          <span>...</span>
        </>
      )}

      {buttons.map((button, id) => {
        const pageIndex = firstButtonIndex + id;

        return (
          <PageButton
            key={pageIndex}
            onClick={() => goToPage(pageIndex)}
            isActive={actualPageIndex === pageIndex}
          >
            {pageIndex + 1}
          </PageButton>
        );
      })}

      {actualPageIndex < lastPageIndex - sideButtonsAmount && (
        <>
          <span>...</span>
          <PageButton
            isActive={actualPageIndex === lastPageIndex}
            onClick={() => goToLastPage()}
          >
            {lastPageIndex + 1}
          </PageButton>
        </>
      )}
    </PageSwitcherContainer>
  );
};
