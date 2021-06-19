import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ToDoProvider } from "./ToDoContext";
import { ThemeProvider } from "./ThemeContext";

import PageLayout from "./PageLayout";

export default function App() {
  return (
    <Router>
      <ToDoProvider>
        <ThemeProvider>
          <PageLayout />
        </ThemeProvider>
      </ToDoProvider>
    </Router>
  );
}
