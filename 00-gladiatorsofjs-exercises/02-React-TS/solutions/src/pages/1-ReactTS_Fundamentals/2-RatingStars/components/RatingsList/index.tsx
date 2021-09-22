import { IRating } from "../../types";

import { Rating } from "../Rating";
import { RatingsListContainer } from "./RatingsList.styles";

import { AverageScore } from "../AverageScore";

export const RatingsList = ({ ratings }: { ratings: IRating[] }) => {
  return (
    <RatingsListContainer>
      <AverageScore ratings={ratings} />
      <section>
        <h1>Last 10 reviews</h1>
        {ratings.slice(0, 10).map((rating) => (
          <Rating key={rating.recordId} rating={rating} />
        ))}
      </section>
    </RatingsListContainer>
  );
};
