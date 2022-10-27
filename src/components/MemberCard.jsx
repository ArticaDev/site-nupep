import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, name, hidden, id, lattes }) => {
  return (
    <div
      className="mb-2 border-t border-b border-solid border-gray-400 px-3 py-2"
      hidden={hidden}
    >
      <div className="grid grid-flow-row gap-4">
        <p className="overflow-ellipsis text-2xl font-bold">{name}</p>
        <div className="grid grid-flow-col items-center gap-4">
          <Link to={`/equipe/${id}`} key={name + "link"}>
            <img
              src={img}
              alt={`Foto de ${name}`}
              className="h-25 w-25 shrink-0 rounded-full bg-slate-400 bg-contain bg-clip-padding bg-no-repeat"
            ></img>
          </Link>
          <button className="mx-auto h-10 w-40 bg-zinc-800 px-4 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:bg-zinc-900 focus:ring-0 active:shadow-lg">
            <a href={lattes}>Lattes</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
