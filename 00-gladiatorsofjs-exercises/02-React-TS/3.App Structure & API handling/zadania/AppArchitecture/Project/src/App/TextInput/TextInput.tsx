import React from "react";
import "./textinput.css";

export default function TextInput({ labelValue, name, onChangeFn, value, type = "text" }: any) {
  return (
    <div className="inputContainer">
      <label htmlFor={name}>{labelValue}</label>
      <input id={name} name={name} onChange={(e: any) => onChangeFn(e)} type={type} value={value} className="textInput" />
    </div>
  );
}
