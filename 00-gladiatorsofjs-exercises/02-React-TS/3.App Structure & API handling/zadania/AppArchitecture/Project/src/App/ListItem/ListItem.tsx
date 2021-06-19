import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./listitem.css";

export default function ListItem({ id, value }: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => setIsModalVisible((lastState: any) => !lastState);

  return (
    <div className="itemContainer">
      <p>
        You have to do: <b>{value}</b>
      </p>
      <button onClick={() => handleClick()}>Show details</button>
      {isModalVisible && <Modal id={id} value={value} clickFn={handleClick} />}
    </div>
  );
}
