import GlobalStyles from "./GlobalStyles"

import { exercisesLinks } from "routes/routing";

import { Header } from "./components";
import { Sidebar } from "./components";


export const HomePage = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Sidebar links={exercisesLinks} />
    </>
  )
}