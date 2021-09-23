import { Link } from "react-router-dom";

import { links } from "../../utils";

export const LoginPage = () => {
  return (
    <div>
      Here you can log in:
      <ul>
        {links.map(({ name, link }) => (
          <li key={name}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
