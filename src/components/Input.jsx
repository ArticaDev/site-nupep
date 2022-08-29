const Input = ({ labelText, value, setValue, type }) => {
  return (
    <div className="grid grid-flow-row">
      <label className="font-bold">{labelText}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-2 border-black px-4 py-1 outline-none"
      ></input>
    </div>
  );
};

export default Input;
