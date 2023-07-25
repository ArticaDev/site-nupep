import clsx from "clsx";

const IconButton = ({
  name,
  id,
  title,
  className,
  size = "md",
  icon: Icon = null,
  onClick,
  children,
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
        "grid grid-flow-col place-items-center rounded-full border-black p-1",
        className
      )}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon className={clsx("", sizes[size])} />}
    </button>
  );
};

export default IconButton;
