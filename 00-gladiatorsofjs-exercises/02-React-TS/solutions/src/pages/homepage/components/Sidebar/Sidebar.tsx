import { useState } from "react";

import { ExerciseModule } from "types";
import { SidebarNav } from "./styles";
import { SubMenu } from "pages/homepage/components";

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
