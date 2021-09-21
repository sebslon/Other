import { SidebarContainer } from "./Sidebar.css";

import { Search } from "../Search/Search";
import { Trends } from "../Trends/Trends";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Search />
      <Trends />
    </SidebarContainer>
  )
}
