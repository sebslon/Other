import React from "react";
import "./theme.css";
import { useTheme } from "./ThemeContext";

import Navbar from "./Navbar";
import Routes from "./Routes";

export default function PageLayout() {
  const { themeColor } = useTheme();

  return (
    <div className={themeColor}>
      <Navbar />
      <Routes />
    </div>
  );
}
