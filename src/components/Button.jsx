export function Button({ setCount, count }) {
  return (
    <button
      className="rounded border bg-slate-700 p-4 text-white transition-colors hover:bg-slate-800"
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </button>
  );
}
