import { Link } from "react-router-dom";

import { links } from "../../utils";
import { LoginPageContainer } from "./LoginPage.styles";

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <ul>
        {links.map(({ name, link }) => (
          <li key={name}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </LoginPageContainer>
  );
};
