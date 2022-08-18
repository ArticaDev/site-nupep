import ReactSearchBox from "react-search-box";

const Searchbar = ({
  name,
  className,
  placeholder,
  data = [],
  value = "",
  onChange,
  onSelect,
  onFocus,
  ...props
}) => {
  return (
    <div className={className}>
      <div className="container relative mx-auto max-w-sm md:max-w-md">
        <ReactSearchBox
          name={name}
          placeholder={placeholder}
          data={data}
          onChange={onChange}
          onSelect={onSelect}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
};

export default Searchbar;
