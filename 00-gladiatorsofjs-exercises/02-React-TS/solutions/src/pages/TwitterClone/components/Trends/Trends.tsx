import { popularForYou as trends } from "../../data/data.json";

export const Trends = () => {
  return (
    <section>
      <p>Popular For You</p>
      {trends.map((trend) => (
        <div key={trend.titleId}>
          <span>{trend.header}</span>
          <p>{trend.name}</p>
          <span>{trend.tweets}</span>
        </div>
      ))}
      <button>Show more</button>
    </section>
  );
};
