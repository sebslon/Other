import { IRating } from "../../types";

import { AverageScore } from "../AverageScore";
import { Rating } from "../Rating";

export const RatingsList = ({ ratings }: { ratings: IRating[] }) => {
  return (
    <>
      <AverageScore ratings={ratings} />
      <section>
        <h2>Last 10 reviews</h2>
        {ratings.slice(0, 10).map(rating => (
          <Rating key={rating.recordId} rating={rating} />
        ))}
      </section>
    </>
  );
};
