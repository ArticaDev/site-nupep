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
  text,
  status,
}) => {
  const hasIcon = order === "asc" || order === "desc";
  const icon = order === "asc" ? CgSortZa : CgSortAz;
  return (
    <div className="grid h-14 w-48 cursor-pointer items-center border-2 border-black px-2">
      <IconButton
        title={title}
        name={name}
        id={id}
        size={size}
        className={className}
        icon={hasIcon ? icon : null}
        onClick={onClick}
      >
        <p htmlFor="order" className="text-sm font-semibold text-zinc-800">
          {text} <br /> <span className="text-blue">{status}</span>
        </p>
      </IconButton>
    </div>
  );
};

export default SortButton;
