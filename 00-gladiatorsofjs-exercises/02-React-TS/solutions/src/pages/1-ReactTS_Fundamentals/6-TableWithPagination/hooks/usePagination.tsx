import { useCallback, useEffect, useState } from "react";
import { User } from "../types";

type usePaginationType = (data: User[], elementsOnPage: number) => void;

export const usePagination: usePaginationType = (data, elementsOnPage = 50) => {
  const [actualPageIndex, setActualPageIndex] = useState<number>(0);
  const [isBusy, setIsBusy] = useState(false);

  const lastPageIndex = Math.ceil(data.length / elementsOnPage);

  const firstEntry = actualPageIndex * elementsOnPage;
  const lastEntry = firstEntry + elementsOnPage;

  const entriesOnSelectedPage = data.slice(firstEntry, lastEntry);

  const goToFirstPage = useCallback(() => {
    setActualPageIndex(0);
  }, []);

  const goToPrevPage = useCallback(() => {
    setActualPageIndex(
      actualPageIndex === 0 ? actualPageIndex : actualPageIndex - 1
    );
  }, []);

  const goToNextPage = useCallback(() => {
    setActualPageIndex(
      actualPageIndex === lastPageIndex ? lastPageIndex : actualPageIndex + 1
    );
  }, []);

  const goToLastPage = useCallback(() => {
    setActualPageIndex(lastPageIndex);
  }, []);

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

// const [
//   { actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
//   { goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage },
// ] = usePagination(dataEntries);
