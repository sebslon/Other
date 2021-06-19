import React, { useContext, createContext } from "react";
import useLocalStorage from "./useLocalStorage";

const ToDoContext = createContext<any>({} as any);

export const useToDo = () => useContext(ToDoContext);

export const ToDoProvider = ({ children }: any) => {
  const [toDoList, setToDoList] = useLocalStorage("toDoList", []);

  const handleAddToList = (element: any) => {
    setToDoList((lastState: any) => [...lastState, element]);
  };

  const handleDeleteItem = (itemId: any) => {
    setToDoList((lastState: any) => lastState.filter(({ id }: any) => id !== itemId));
  };

  const value: any = { toDoList, handleAddToList, handleDeleteItem };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};
