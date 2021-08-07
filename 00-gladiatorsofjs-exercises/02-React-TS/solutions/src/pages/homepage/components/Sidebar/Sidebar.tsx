import { useState } from "react";

import { ExerciseModule } from "types";
import { SidebarNav } from "./styles";
import { SubMenu } from "pages/homepage/components";

interface SidebarProps {
  links: ExerciseModule[];
}

export const Sidebar = ({ links }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (title: string) => {
    setActiveItem(prev => (prev === title ? "" : title));
  };

  return (
    <>
      <SidebarNav>
          {links.map((link: any) => {
            return (
              <SubMenu
                item={link}
                key={link.title}
                onClick={() => handleClick(link.title)}
                isActive={activeItem === link.title}
              />
            );
          })}
      </SidebarNav>
    </>
  );
};
