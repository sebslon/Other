import { useEffect, useState } from "react";

import { AverageScoreContainer } from "./AverageScore.styles";
import { IRating } from "../../types";

import { ScoreStars } from "../ScoreStars";

export const AverageScore = ({ ratings }: { ratings: IRating[] }) => {
  const [averageScore, setAverageScore] = useState<number>(0);

  useEffect(() => {
    const ratingsSum = ratings.reduce((tot, rat) => rat.score + tot, 0);
    const average = Math.round(ratingsSum / ratings.length);

    setAverageScore(average);
  }, [ratings]);

  return (
    <AverageScoreContainer style={{ display: "flex" }}>
      <p>Average score: </p>
      <ScoreStars score={averageScore} />
    </AverageScoreContainer>
  );
};
