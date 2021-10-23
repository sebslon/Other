import { SidebarContainer } from "./Sidebar.css";

import { Search, Trends } from "../../components";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Search />
      <Trends />
    </SidebarContainer>
  )
}
