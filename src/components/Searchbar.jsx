import ReactSearchBox from "react-search-box";

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
        className="container relative mx-auto h-full max-w-md rounded-sm border border-solid border-black"
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
