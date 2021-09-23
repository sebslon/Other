import { Link } from "react-router-dom";

import { HomePageContainer } from "./HomePage.styles";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Link to="/AuthToken/login">Click here to go to Login Page</Link>
    </HomePageContainer>
  );
};
