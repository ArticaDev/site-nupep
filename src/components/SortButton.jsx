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
    <div className="cursor-pointer border-2 border-black px-2">
      <IconButton
        title={title}
        name={name}
        id={id}
        size={size}
        className={className}
        icon={icon}
        onClick={onClick}
      >
        <label htmlFor="order" className="text-sm font-semibold text-zinc-800">
          Ordenar por ano: {order === "asc" ? "Crescente" : "Decrescente"}
        </label>
      </IconButton>
    </div>
  );
};

export default SortButton;
