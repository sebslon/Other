import { Redirect, Route } from "react-router-dom";

import { isTokenValid } from "./utils";
import { useQueryParams } from "./hooks/useQueryParams";
import { ProtectedPage } from "./components/ProtectedPage";

export const AuthTokenApp = () => {
  const queryParams = useQueryParams();
  const token = queryParams.get("token");

  console.log("Token: ", token);

  if (!isTokenValid(token)) {
    return <Redirect to="/AuthToken/login" />;
  }

  return (
    <Route path={`/AuthToken/secure-link?${token}`}>{ProtectedPage}</Route>
  );
};
