import React from "react";

const Searchbar = ({
  name,
  className,
  placeholder,
  value = "",
  onChange,
  onFocus,
  ...props
}) => {
  return (
    <div className={className}>
      <input
        className="container mx-auto h-full w-full rounded-sm border border-solid border-black"
        type="text"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Searchbar;
