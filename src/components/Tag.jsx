const Tag = ({ className, variant, children }) => {
  const type = (variant) => {
    switch (variant) {
      case "info":
        return "bg-yellow-300";
      case "danger":
        return "bg-red-300";
      case "success":
      default:
        return "bg-green-300";
    }
  };
  return (
    <div className={className}>
      <div className={"rounded-full h-[inherit] w-[inherit]" + " " + type(variant)}>{children}</div>
    </div>
  );
};

export default Tag;
