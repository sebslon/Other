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
  const firstButtonIndex = actualPageIndex >= 2 ? actualPageIndex - 2 : 0;
  const lastButtonIndex =
    lastPageIndex - actualPageIndex > 2 ? actualPageIndex + 2 : lastPageIndex;
  const buttons = new Array(lastButtonIndex - firstButtonIndex + 1).fill(0);

  return (
    <div>
      {buttons.map((button, id) => {
        const page = firstButtonIndex + id;

        return (
          <PageButton
            onClick={() => goToPage(page)}
            isActive={actualPageIndex === page}  
          >
            {page + 1}
          </PageButton>
        );
      })}
    </div>
  );
};
