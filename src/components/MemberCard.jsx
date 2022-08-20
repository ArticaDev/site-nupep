import React from "react";

const Card = ({ img, name, hidden }) => {
  return (
    <div
      className="mb-2 border-t border-b border-solid border-gray-400 px-3 py-2"
      hidden={hidden}
    >
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold overflow-ellipsis">{name}</p>
        <div
          className="h-25 w-25 shrink-0 bg-slate-400 bg-contain bg-clip-padding bg-no-repeat"
          style={{
            backgroundImage: `url(${img})`,
          }}
          alt={`Foto de ${name}`}
        />
      </div>
    </div>
  );
};

export default Card;
