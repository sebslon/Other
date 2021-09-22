import { IRating } from "../../types";
import { RatingContainer } from "./Rating.styles";

import { ScoreStars } from "../ScoreStars";

export const Rating = ({ rating }: { rating: IRating }) => {
  return (
    <RatingContainer>
      <span>Author: {rating.name}</span>
      <span>
        Rating: <ScoreStars score={rating.score} />
      </span>
      <p>{rating.content.substr(0, 120)}...</p>
    </RatingContainer>
  );
};
