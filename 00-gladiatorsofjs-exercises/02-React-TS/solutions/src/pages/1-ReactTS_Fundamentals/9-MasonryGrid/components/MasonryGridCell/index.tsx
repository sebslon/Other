interface MasonryGridCellProps {
  photoUrl: string;
}

export const MasonryGridCell = ({ photoUrl }: MasonryGridCellProps) => (
  <img src={photoUrl} width="100%" height="auto" alt="masonry item" />
);
