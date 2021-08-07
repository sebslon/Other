import { SidebarLink, SidebarLabel, Arrow, DropdownLink } from "./styles";

import { ExerciseModule } from "types";
import { ArrowDown, ArrowUp } from "pages/homepage/assets";

interface SubMenuProps {
  item: ExerciseModule;
  isActive: boolean;
  onClick: () => void;
}

export const SubMenu = ({ item, onClick, isActive }: SubMenuProps) => {
  return (
    <>
      <SidebarLink to="/" onClick={onClick}>
        <SidebarLabel>{item.title}</SidebarLabel>
        <Arrow src={isActive ? ArrowUp : ArrowDown} alt="arrow" />
      </SidebarLink>
      
      {isActive &&
        item.linksArray.map(({ pageName }: { pageName: string }) => {
          return (
            <DropdownLink to={`/${pageName}`} key={pageName}>
              <SidebarLabel>{pageName}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};