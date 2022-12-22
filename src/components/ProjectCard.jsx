import { Link } from "react-router-dom";
import limitText from "../utils/limitText";
import {
  CompleteTag,
  InProgressTag,
  DroppedTag,
} from "../components/CustomTag";

const ProjectCard = ({ status, title, id, resume, sponsors, coordinator }) => {
  return (
    <div className="md:w-1/2 lg:w-1/3" key={id}>
      <div className=" w-full rounded-xl shadow-md">
        <div className="flex place-items-center text-ellipsis whitespace-normal rounded-t-xl bg-black">
          <Link to={`/projeto/${id}`}>
            <h3 className="p-7 text-2xl font-bold text-white">{title}</h3>
          </Link>
        </div>
        <div className="grid p-4">
          <div className="py-4">
            <h3>
              <strong>Financiadores</strong>: {sponsors}
            </h3>
          </div>
          <div className="py-4 pb-8">
            <h3>
              <strong>Coordenador</strong>: {coordinator}
            </h3>
          </div>
          <div className="flex w-full justify-between">
            {status === "Concluído" && <CompleteTag />}
            {status === "Em andamento" && <InProgressTag />}
            {status === "Cancelado" && <DroppedTag />}
            <Link
              className="rounded-sm bg-black px-8 py-2 text-sm font-bold text-white"
              to={`/projeto/${id}`}
            >
              Ler Mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
