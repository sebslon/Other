import { MasonryGrid } from "../MasonryGrid";

export const GridWrapper = ({ width }: { width: number }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Masonry Grid</h1>
      <MasonryGrid width={width} />
    </>
  );
};
