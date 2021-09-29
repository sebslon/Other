export const Pagination = ({ paginationActions, paginationState }: any) => {
  const { goToNextPage, goToPrevPage, goToLastPage, goToFirstPage } =
    paginationActions;

  return (
    <div>
      <button onClick={() => goToNextPage()}>Next</button>
      <button onClick={() => goToPrevPage()}>Previous</button>
      <button onClick={() => goToFirstPage()}>Go to first page</button>
      <button onClick={() => goToLastPage()}>Go to last page</button>
    </div>
  );
};
