import { useEffect, useState } from "react";

import { IRating } from "../../types";

import { ScoreStars } from "../ScoreStars";

export const AverageScore = ({ ratings }: { ratings: IRating[] }) => {
  const [averageScore, setAverageScore] = useState<number>(0);

  useEffect(() => {
    const calculateAverage = () => {
      const ratingsSum = ratings.reduce((tot, rat) => rat.score + tot, 0);
      const average = Math.round(ratingsSum / ratings.length);

      setAverageScore(average);
    };

    calculateAverage();
  }, [ratings]);

  return (
    <div>
      <h1>Average score: </h1>
      <ScoreStars score={averageScore} />
    </div>
  );
};
