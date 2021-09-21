import { ThreeDots } from "pages/TwitterClone/images";
import { popularForYou as trends } from "../../data/data.json";

import { Trend, TrendsSection, TrendsTitle } from "./Trends.css";

export const Trends = () => {
  return (
    <TrendsSection>
      <TrendsTitle>Popular For You</TrendsTitle>
      {trends.map((trend) => (
        <Trend key={trend.titleId}>
          <span>{trend.header}</span>
          <img src={ThreeDots} alt="more info" />
          <p>{trend.name}</p>
          <span>Tweets: {trend.tweets}</span>
        </Trend>
      ))}
      <button>Show more</button>
    </TrendsSection>
  );
};
