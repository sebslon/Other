import "./styles.css";

import { persons } from "./helpers/generatePerson"
import { MoreAndMorePeople } from "./components/MoreAndMorePeople"

export const InfiniteList = () => {
  return (
    <MoreAndMorePeople data={persons} />
  )
}
