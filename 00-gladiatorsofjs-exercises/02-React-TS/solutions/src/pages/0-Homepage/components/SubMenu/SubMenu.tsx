import { SidebarLink, SidebarLabel, Arrow, DropdownLink } from "./styles";

import { ExerciseModule } from "types";
import { ArrowDown, ArrowUp } from "pages/0-Homepage/assets";

interface SubMenuProps {
  module: ExerciseModule;
  isActive: boolean;
  onClick: () => void;
}

export const SubMenu = ({ module, onClick, isActive }: SubMenuProps) => {
  return (
    <>
      <SidebarLink to="/" onClick={onClick}>
        <SidebarLabel>{module.title}</SidebarLabel>
        <Arrow src={isActive ? ArrowUp : ArrowDown} alt="arrow" />
      </SidebarLink>
      
      {isActive &&
        module.exercises.map(({ pageName }: { pageName: string }) => {
          return (
            <DropdownLink to={`/${pageName}`} key={pageName}>
              <SidebarLabel>{pageName}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};