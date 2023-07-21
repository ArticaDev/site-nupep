import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
          {t('Ordenar por ano')}: {order === "asc" ? t("Crescente") : t("Decrescente")}
        </label>
      </IconButton>
    </div>
  );
};

export default SortButton;
