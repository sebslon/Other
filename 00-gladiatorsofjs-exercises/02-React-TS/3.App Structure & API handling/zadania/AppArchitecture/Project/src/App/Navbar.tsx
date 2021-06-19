import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { handleChangeTheme } = useTheme();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/getBookData">GetBookData</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <label htmlFor="themeSwitcher">Change theme</label>
      <input id="themeSwitcher" name="themeSwitcher" type="checkbox" onChange={() => handleChangeTheme()} />
    </nav>
  );
}
