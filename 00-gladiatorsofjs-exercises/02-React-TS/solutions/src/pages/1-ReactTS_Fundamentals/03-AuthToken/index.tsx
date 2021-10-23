import { Redirect, Route } from "react-router-dom";

import { isTokenValid } from "./utils";
import { useQueryParams } from "./hooks/useQueryParams";
import { ProtectedPage } from "./components/ProtectedPage";

export const AuthTokenApp = () => {
  const queryParams = useQueryParams();
  const token = queryParams.get("token");

  return (
    <>
      {!isTokenValid(token) ? (
        <Redirect to="/AuthToken/login" />
      ) : (
        <Route path={`/AuthToken/secure-link?${token}`}>{ProtectedPage}</Route>
      )}
    </>
  );
};
