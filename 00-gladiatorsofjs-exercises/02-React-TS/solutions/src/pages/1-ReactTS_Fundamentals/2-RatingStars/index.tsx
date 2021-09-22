import "./index.css";

import { ratings } from "./data.json";

import { RatingsList } from "./components/RatingsList";

export const RatingStars = () => {
  return <RatingsList ratings={ratings} />;
};
