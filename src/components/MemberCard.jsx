import { Link } from "react-router-dom";
import LocalizedText from "../components/LocalizedText";

const Card = ({ img, name, hidden, id, lattes, subRole }) => {
  return (
    <div
      className="mb-2 border-t border-b border-solid border-gray-400 px-3 py-2"
      hidden={hidden}
    >
      <div className="grid grid-flow-row gap-4">
        <Link to={`/equipe/${id}`} key={name + "link"}>
          <p className="overflow-ellipsis text-2xl font-bold">{name}</p>
        </Link>
        <div className="grid grid-flow-col items-center gap-4">
          <Link to={`/equipe/${id}`} key={name + "link"}>
            <img
              src={img}
              alt={`Foto de ${name}`}
              className="h-20 w-20 sm:h-25 sm:w-25 shrink-0 rounded-full bg-slate-400 bg-contain bg-clip-padding bg-no-repeat"
            ></img>
          </Link>
          <div className="mx-auto grid items-center justify-center gap-2">
            {subRole && (
              <p className="text-xl font-bold text-gray-500">
                <LocalizedText textKey={subRole} />
              </p>
            )}
            <button className="mx-auto h-10 w-40 bg-zinc-800 px-4 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:bg-zinc-900 focus:ring-0 active:shadow-lg">
              <a href={lattes}>Lattes</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
