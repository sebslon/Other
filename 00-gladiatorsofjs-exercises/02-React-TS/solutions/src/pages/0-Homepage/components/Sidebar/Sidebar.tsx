import { useState } from "react";

import { SidebarNav } from "./styles";
import { ExerciseModule } from "types";

import { SubMenu } from "pages/0-Homepage/components";

interface SidebarProps {
  modules: ExerciseModule[];
}

export const Sidebar = ({ modules }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (title: string) => {
    setActiveItem(prev => (prev === title ? "" : title));
  };

  return (
    <>
      <SidebarNav>
          {modules.map((module: ExerciseModule) => {
            return (
              <SubMenu
                module={module}
                key={module.title}
                onClick={() => handleClick(module.title)}
                isActive={activeItem === module.title}
              />
            );
          })}
      </SidebarNav>
    </>
  );
};
