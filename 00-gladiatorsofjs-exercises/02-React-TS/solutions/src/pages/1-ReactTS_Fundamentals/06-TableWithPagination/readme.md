- Created <b>usePagination</b> custom hook which returns [paginationState, paginationActions]

```javascript
const [
  { actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
  { goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }
] = usePagination(dataEntries);
```

- Created components to visualize use of usePagination hook