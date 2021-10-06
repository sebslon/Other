import GlobalStyles from "./GlobalStyles";

import { exercisesModules } from "routes/routing-settings";

import { Header, Sidebar } from "./components";

export const HomePage = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Sidebar modules={exercisesModules} />
    </>
  );
};
