import React from "react";
import clsx from "clsx";

const Grid = ({ direction = "col", rows, cols, children }) => {
  return (
    <div
      className={clsx(
        "grid gap-1 p-3 lg:gap-10",
        direction == "row" && "grid-flow-row",
        direction == "col" && "grid-flow-col",
        rows ? `grid-rows-${rows}` : "",
        cols ? `grid-cols-${cols}` : ""
      )}
    >
      {children}
    </div>
  );
};

export default Grid;