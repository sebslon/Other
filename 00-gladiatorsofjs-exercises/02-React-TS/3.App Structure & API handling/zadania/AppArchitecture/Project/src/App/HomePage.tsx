import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useToDo } from "./ToDoContext";
import ListItem from "./ListItem/ListItem";
import TextInput from "./TextInput/TextInput";

export default function HomePage() {
  const { handleAddToList, toDoList } = useToDo();
  const [elementValue, setElementValue] = useState("");

  const handleChange = (e: any) => {
    setElementValue(e.target.value);
  };

  const handleSumbit = () => {
    if (elementValue.length > 2) {
      const id = uuidv4();
      handleAddToList({ value: elementValue, id });
      setElementValue("");
    }
  };

  return (
    <>
      <h2>Welcome to To Do App</h2>
      <TextInput name="todo" onChangeFn={handleChange} value={elementValue} labelValue="Write thing you have to do" />
      <button onClick={() => handleSumbit()}>Submit</button>
      {toDoList.map(({ value, id }: any) => (
        <ListItem key={id} id={id} value={value} />
      ))}
    </>
  );
}
