import React from "react";

const Card = ({ img, name, hidden }) => {
  return (
    <div
      className="mb-2 border-t border-b border-solid border-gray-400 px-3 py-2"
      hidden={hidden}
    >
      <div className="flex items-center justify-between">
        <p>{name}</p>
        <div
          className="h-[100px] w-[100px] bg-slate-400 bg-clip-padding bg-no-repeat bg-contain"
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
