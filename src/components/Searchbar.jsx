import ReactSearchBox from "react-search-box";

const Searchbar = ({
  placeholder,
  data = [],
  value = "",
  onChange,
  onSelect,
  onFocus,
  ...props
}) => {
  return (
    <div className="container mx-auto">
      <ReactSearchBox
        placeholder={placeholder}
        data={data}
        onChange={onChange}
        onSelect={onSelect}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Searchbar;
