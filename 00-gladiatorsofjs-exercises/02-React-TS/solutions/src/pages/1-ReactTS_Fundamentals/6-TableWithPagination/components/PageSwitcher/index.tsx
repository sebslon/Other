import { PageButton } from "./PageSwitcher.styles";

interface PageSwitcherProps {
  actualPageIndex: number;
  lastPageIndex: number;
  goToPage: (page: number) => void;
}

export const PageSwitcher = ({
  actualPageIndex,
  lastPageIndex,
  goToPage,
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
    <div>
      {actualPageIndex > sideButtonsAmount && <span>...</span>}
      {buttons.map((button, id) => {
        const pageIndex = firstButtonIndex + id;

        return (
          <PageButton
            onClick={() => goToPage(pageIndex)}
            isActive={actualPageIndex === pageIndex}
          >
            {pageIndex + 1}
          </PageButton>
        );
      })}
      {actualPageIndex < lastPageIndex - sideButtonsAmount && <span>...</span>}
    </div>
  );
};
