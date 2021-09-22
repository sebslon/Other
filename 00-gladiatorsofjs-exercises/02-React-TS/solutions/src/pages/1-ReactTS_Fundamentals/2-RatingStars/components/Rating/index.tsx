import { IRating } from "../../types";

import { ScoreStars } from "../ScoreStars";

export const Rating = ({ rating }: { rating: IRating }) => {
  return (
    <div>
      <span>Author {rating.name}</span>
      <span>
        Rating: <ScoreStars score={rating.score} />
      </span>
      <p>{rating.content.substr(0, 120)}...</p>
    </div>
  );
};
