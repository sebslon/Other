import { AuthTokenApp } from ".";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";

export const authTokenRoutes = [
  {
    path: "/AuthToken",
    component: HomePage,
    exact: true,
  },
  {
    path: "/AuthToken/login",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/AuthToken/secure-link",
    component: AuthTokenApp,
    exact: true,
  },
];
