import { Feather, Nav, NavItem, TwitterLogo } from "./Navbar.css";

import { Feather as FeatherImg, House, Magnifier, Bell, Letter, Logo } from "../../images";

export const Navbar = () => {
  return (
    <Nav>
      <TwitterLogo src={Logo} alt="Twitter logo" />
      {links.map(({ id, link, photo, name }) => (
        <NavItem href={link} key={id} onClick={(e) => e.preventDefault()}>
          <img src={photo} alt={name} />
          <span>{name}</span>
        </NavItem>
      ))}
      <Feather>
        <img
          src={FeatherImg}
          alt="New twitt"
          onClick={(e) => e.preventDefault()}
        />
      </Feather>
    </Nav>
  );
};

const links = [
  {
    photo: House,
    link: "#",
    name: "Home",
    id: 1,
  },
  {
    photo: Magnifier,
    link: "#",
    name: "Search",
    id: 2,
  },
  {
    photo: Bell,
    link: "#",
    name: "Notification",
    id: 3,
  },
  {
    photo: Letter,
    link: "#",
    name: "Messages",
    id: 4,
  },
];
