import GlobalStyles from "./GlobalStyles"

import { exercisesLinks } from "routes/routing-settings";

import { Header, Sidebar } from "./components";

export const HomePage = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Sidebar links={exercisesLinks} />
    </>
  )
}