import { Link } from "react-router-dom";
import limitText from "../utils/limitText";
import {
  CompleteTag,
  InProgressTag,
  DroppedTag,
} from "../components/CustomTag";

const ProjectCard = ({ status, title, id, resume, sponsors }) => {
  return (
    <div className="lg:w-1/3" key={id}>
      <div className="h-full w-full rounded-xl shadow-md">
        <div className="flex place-items-center text-ellipsis whitespace-normal rounded-t-xl bg-black">
          <Link to={`/projeto/${id}`}>
            <h3 className="p-7 text-2xl font-bold text-white">
              {limitText(title, 15)}
            </h3>
          </Link>
        </div>
        <div className="mx-2 flex flex-wrap items-end justify-between overflow-auto p-3 py-4">
          <p
            className="pb-3"
            dangerouslySetInnerHTML={{
              __html: limitText(resume, 14),
            }}
          ></p>
          <div className="py-4">
            <h3>
              <strong>Financiadores</strong>: {sponsors}
            </h3>
          </div>
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
  );
};

export default ProjectCard;
