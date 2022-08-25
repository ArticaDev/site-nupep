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
        className="container mx-auto h-full w-full rounded-sm border border-solid border-black py-4 px-2"
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
