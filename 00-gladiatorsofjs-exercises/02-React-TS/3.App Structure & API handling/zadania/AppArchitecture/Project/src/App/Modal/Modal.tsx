import React, { useState } from "react";
import "./modal.css";
import { useToDo } from "../ToDoContext";

export default function Modal({ value, id, clickFn }: any) {
  const { handleDeleteItem } = useToDo();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleChangeModal = () => {
    setDeleteConfirmation((lastState: any) => !lastState);
  };

  const handleClick = () => {
    handleDeleteItem(id);
    clickFn();
  };

  return (
    <div className="background">
      <div className="modal">
        <p>
          Item: <b>{value}</b>
        </p>
        {deleteConfirmation ? (
          <>
            <p>Are you sure you want to delete this element?</p>
            <button onClick={() => handleChangeModal()}>Go back</button>
            <button onClick={() => handleClick()}>Yes</button>
          </>
        ) : (
          <>
            <button onClick={() => handleChangeModal()}>Delete element</button>
            <button onClick={() => clickFn()}>Close modal</button>
          </>
        )}
      </div>
    </div>
  );
}
