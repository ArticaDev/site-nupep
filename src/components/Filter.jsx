import LocalizedText from "./LocalizedText";

const Filter = ({ className, id, name, options = [], onChange, disabled }) => {
  return (
    <div className={className}>
      <select
        className="h-12 w-full rounded-sm border-2 border-black p-2 lg:w-36"
        name={name}
        id={id}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            <LocalizedText textKey={item.name} />
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
