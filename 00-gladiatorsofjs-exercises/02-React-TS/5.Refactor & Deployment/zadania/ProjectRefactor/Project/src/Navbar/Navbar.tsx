import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar, StyledList } from "./Navbar.css";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledList>
        <li>
          <Link to="/">Search Books</Link>
        </li>
        <li>
          <Link to="/favouriteBooks">Favourite Books</Link>
        </li>
        <li>
          <Link to="/booksToRead">Books to read</Link>
        </li>
      </StyledList>
    </StyledNavbar>
  );
}
