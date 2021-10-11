import { MasonryGridCell } from "../MasonryGridCell";

interface MasonryGridColumnProps {
  photosAmount: number;
  photos: any
}

export const MasonryGridColumn = ({
  photosAmount,
  photos
}: MasonryGridColumnProps) => {
  return (
    <div>
      {Array(photosAmount)
        .fill(0)
        .map((el, index) => (
          <MasonryGridCell
            photoUrl={photos[index]}
            key={index}
          />
        ))}
    </div>
  );
};
