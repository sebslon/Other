import { useCallback, useEffect, useState } from "react";

import { usePaginationType } from "../types";

export const usePagination: usePaginationType = (data, elementsOnPage = 10) => {
  const [actualPageIndex, setActualPageIndex] = useState(0);
  const [isBusy, setIsBusy] = useState(false);

  const lastPageIndex = Math.ceil(data.length / elementsOnPage) - 1;
  const firstEntry = actualPageIndex * elementsOnPage;
  const lastEntry = firstEntry + elementsOnPage;
  const entriesOnSelectedPage = data.slice(firstEntry, lastEntry);

  const goToFirstPage = useCallback(() => {
    setActualPageIndex(0);
  }, []);

  const goToPrevPage = useCallback(() => {
    setActualPageIndex((actualPage) =>
      actualPage === 0 ? actualPage : actualPage - 1
    );
  }, []);

  const goToNextPage = useCallback(() => {
    setActualPageIndex((actualPage) =>
      actualPage === lastPageIndex ? lastPageIndex : actualPage + 1
    );
  }, [setActualPageIndex, lastPageIndex]);

  const goToLastPage = useCallback(() => {
    setActualPageIndex(lastPageIndex);
  }, [lastPageIndex]);

  const goToPage = useCallback((page: number) => {
    setActualPageIndex(page);
  }, []);

  useEffect(() => {
    const fakeTimer = 330;

    setIsBusy(true);
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setIsBusy(false);
    }, fakeTimer);
  }, [actualPageIndex]);

  const paginationState = {
    actualPageIndex,
    lastPageIndex,
    entriesOnSelectedPage,
    isBusy,
  };

  const paginationActions = {
    goToFirstPage,
    goToPrevPage,
    goToPage,
    goToNextPage,
    goToLastPage,
  };

  return [paginationState, paginationActions];
};
