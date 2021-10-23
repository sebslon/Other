import { StyledHeader, PageTitle, UserImg, Stars } from "./Header.css";

import { User, Star } from "../../images";

export const Header = () => {
  return (
    <StyledHeader>
      <UserImg src={User} />
      <PageTitle>Home</PageTitle>
      <Stars src={Star} alt="shining stars" />
    </StyledHeader>
  );
};
