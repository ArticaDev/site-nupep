import React from "react";
import clsx from "clsx";

const IconButton = ({
  name,
  id,
  title,
  className,
  size = "md",
  icon: Icon = null,
  onClick,
}) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
  };
  return (
    <button
      title={title}
      name={name}
      id={id}
      className={clsx(
        "rounded-full border-black p-1",
        "active:animate-ping",
        className
      )}
      onClick={onClick}
    >
      {Icon && <Icon className={clsx("", sizes[size])} />}
    </button>
  );
};

export default IconButton;
