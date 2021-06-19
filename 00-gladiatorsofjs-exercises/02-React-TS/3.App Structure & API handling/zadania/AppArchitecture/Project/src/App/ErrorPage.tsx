import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Error 404. Error 404. Page Not Found</h1>
      <Link to="/">Go to main page</Link>
    </div>
  );
}
