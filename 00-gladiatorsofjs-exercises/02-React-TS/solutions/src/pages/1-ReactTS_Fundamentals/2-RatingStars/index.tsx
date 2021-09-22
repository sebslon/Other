import { ratings } from "./data.json";

import { RatingsList } from "./components/RatingsList";
import { GlobalStyles } from "./GlobalStyles";

export const RatingStars = () => {
  return (
    <>
      <GlobalStyles />
      <RatingsList ratings={ratings} />
    </>
  );
};
