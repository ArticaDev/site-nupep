import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import limitText from "../utils/limitText";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Tag from "../components/Tag";
import Searchbar from "../components/Searchbar";
import SortButton from "../components/SortButton";
import axios from "axios";
import { useMemo } from "react";

const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN;

const CustomTag = ({ variant, children }) => {
  return (
    <Tag className="order-1 h-8 w-28 text-center" variant={variant}>
      <p className="text-sm font-bold leading-8">{children}</p>
    </Tag>
  );
};

const CompleteTag = () => {
  return <CustomTag variant="success">Concluído</CustomTag>;
};
const InProgressTag = () => {
  return <CustomTag variant="info">Em andamento</CustomTag>;
};
const DroppedTag = () => {
  return <CustomTag variant="danger">Abandonado</CustomTag>;
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [order, setOrder] = useState("desc");
  const [search, setSearch] = useState("");
  const searchRegExp = useMemo(() => new RegExp(search), [search]);
  const handleSortButtonClick = () => {
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const formatProjectsData = (raw_data) => {
    const projects_data = raw_data.data.map((data) => data.attributes.Campos);
    return projects_data;
  };

  const getProjects = async () => {
    const result = await axios.get(`${CMS_URL}/projects?populate=*`);
    if (result) {
      setProjects(formatProjectsData(result.data));
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 gap-2 px-4 py-3 md:grid-cols-3">
          <Title>Projetos</Title>
          <Searchbar
            name="search"
            className="col-span-2 h-8 w-full place-self-center md:col-span-1"
            placeholder={"Busque por projeto ou agência financiadora"}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="col-start-2 row-start-1 flex self-center justify-self-end md:col-start-3">
            <SortButton
              title="Ordenar"
              name="order"
              id="button-order"
              size="md"
              order={order}
              onClick={handleSortButtonClick}
            />
          </div>
        </div>
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mx-5 flex flex-wrap justify-center gap-8">
            {projects
              .sort((a, b) =>
                order === "asc" ? a.year - b.year : b.year - a.year
              )
              .filter(
                (project) =>
                  !search.length > 0 ||
                  searchRegExp.test(project.sponsor) ||
                  searchRegExp.test(project.Titulo)
              )
              .map((project) => (
                <div className="flex-shrink basis-85">
                  <div className="h-full w-full rounded-xl shadow-md">
                    <div className="flex place-items-center text-ellipsis whitespace-normal rounded-t-xl bg-black">
                      <Link to={`/projeto/${project.id}`}>
                        <h3 className="p-7 text-lg font-bold text-white">
                          {limitText(project.Titulo, 10)}
                        </h3>
                      </Link>
                    </div>
                    <div className="mx-2 flex flex-wrap items-end justify-between overflow-auto p-3 py-4">
                      <p
                        className="mb-3"
                        dangerouslySetInnerHTML={{
                          __html: limitText(project.Resumo, 20),
                        }}
                      ></p>
                      {project.Status === "Concluído" && <CompleteTag />}
                      {project.Status === "Em andamento" && <InProgressTag />}
                      {project.Status === "Cancelado" && <DroppedTag />}
                      <Link
                        className="rounded-sm bg-black px-8 py-2 text-sm font-bold text-white"
                        to={`/projeto/${project.id}`}
                      >
                        Ler Mais
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
