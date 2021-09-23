
import { AuthTokenApp } from ".";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";

export const authTokenRoutes = [
  {
    path: "/AuthToken/secure-link",
    component: AuthTokenApp,
    exact: true,
  },
  {
    path: "/AuthToken",
    component: LoginPage,
    exact: false,
  },
];