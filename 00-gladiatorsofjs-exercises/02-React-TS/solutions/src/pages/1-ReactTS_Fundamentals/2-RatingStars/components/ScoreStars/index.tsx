import { grayStar, yellowStar } from "../../images";

export const ScoreStars = ({ score }: { score: number }) => {
  return (
    <>
      {new Array(5).fill(0).map((_, index) => (
        <img
          key={index}
          src={index >= score ? grayStar : yellowStar}
          alt={index >= score ? "Gray Star" : "Yellow Star"}
        />
      ))}
    </>
  );
};
