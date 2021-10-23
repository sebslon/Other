import { GridWrapper } from "./components/GridWrapper";
import { useWindowWidth } from "./hooks/useWindowWidth";

export const MasonryGridVis = () => {
  const windowWidth = useWindowWidth();

  return <GridWrapper width={windowWidth} />;
};
