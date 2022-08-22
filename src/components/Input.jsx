import React from "react";

const Input = ({ labelText, value, setValue }) => {
  return (
    <div className="grid grid-flow-row">
      <label className="font-bold">{labelText}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-2 border-black "
      ></input>
    </div>
  );
};

export default Input;
