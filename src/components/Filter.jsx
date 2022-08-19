import React from "react";

const Filter = ({ className, id, name, options = [], onChange, disabled }) => {
  return (
    <div className={className}>
      <select
        className="rounded-sm border border-solid border-black"
        name={name}
        id={id}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
