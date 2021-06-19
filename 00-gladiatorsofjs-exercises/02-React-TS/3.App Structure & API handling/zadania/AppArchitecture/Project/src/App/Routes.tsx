import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import BookDataPage from "./BookDataPage";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/getBookData">
        <BookDataPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
}
