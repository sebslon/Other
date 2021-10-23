export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

export interface PaginationState {
  actualPageIndex: number;
  lastPageIndex: number;
  entriesOnSelectedPage: User[];
  isBusy: boolean;
}

export interface PaginationActions {
  goToFirstPage: () => void;
  goToPrevPage: () => void;
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
}

export type usePaginationType = (
  data: User[],
  elementsOnPage?: number
) => [PaginationState, PaginationActions];
