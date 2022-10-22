import IconButton from "./IconButton";
import { CgSortAz, CgSortZa } from "react-icons/cg";

const SortButton = ({
  name,
  title,
  id,
  size,
  className,
  order = "desc",
  onClick,
}) => {
  const icon = order === "asc" ? CgSortZa : CgSortAz;
  return (
    <IconButton
      title={title}
      name={name}
      id={id}
      size={size}
      className={className}
      icon={icon}
      onClick={onClick}
    />
  );
};

export default SortButton;
