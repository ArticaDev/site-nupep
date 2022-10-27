import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, name, hidden, id }) => {
  return (
    <div
      className="mb-2 border-t border-b border-solid border-gray-400 px-3 py-2"
      hidden={hidden}
    >
      <div className="flex items-center justify-between">
        <Link to={`/equipe/${id}`} key={name + "link"}>
          <p className="overflow-ellipsis text-2xl font-bold">{name}</p>
          <div
            className="h-25 w-25 shrink-0 rounded bg-slate-400 bg-contain bg-clip-padding bg-no-repeat"
            style={{
              backgroundImage: `url(${img})`,
            }}
            alt={`Foto de ${name}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Card;
