import styled from "styled-components";

import { useCallback, useEffect, useState } from "react";

import { imagesLinks } from "../../images-links";

import { MasonryGridColumn } from "../MasonryGridColumn";

export const MasonryGrid = ({ width }: { width: number }) => {
  const columnsByWidth = useCallback(() => {
    if (width >= 1200) return 4;
    if (width > 600 && width < 1200) return 2;
    else return 1;
  }, [width]);

  const [columnsAmount, setColumnsAmount] = useState(columnsByWidth);

  useEffect(() => setColumnsAmount(columnsByWidth), [width, columnsByWidth]);

  return (
    <GridContainer columns={columnsAmount}>
      {Array(columnsAmount)
        .fill(0)
        .map((el, idx) => {
          const elementsInColumn = Math.floor(imagesLinks.length / columnsAmount);
          const firstElementInColumn = idx * elementsInColumn;

          return (
            <MasonryGridColumn
              key={idx}
              photosAmount={elementsInColumn}
              photos={imagesLinks.slice(
                firstElementInColumn,
                firstElementInColumn + elementsInColumn
              )}
            />
          );
        })}
    </GridContainer>
  );
};

const GridContainer = styled.div<{ columns: number }>`
  column-count: ${(props) => props.columns};
  column-gap: 1em;
  height: auto;
  min-height: 100%;
  padding: 1rem;
`;
