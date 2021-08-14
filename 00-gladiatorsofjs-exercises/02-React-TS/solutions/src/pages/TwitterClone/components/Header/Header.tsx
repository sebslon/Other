import { StyledHeader, PageTitle, UserImg, Stars } from "./Header.css";

import User from '../../images/user.svg';
import Star from '../../images/star.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <UserImg src={User} />
      <PageTitle>Home</PageTitle>
      <Stars src={Star} alt="shining stars" />
    </StyledHeader>
  )
}