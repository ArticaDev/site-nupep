import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Searchbar from "../components/Searchbar";
import SortButton from "../components/SortButton";
import { useMemo } from "react";
import Api from "../services/Api";
import LocalizedText from "../components/LocalizedText";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [order, setOrder] = useState("pending_first");
  const [search, setSearch] = useState("");
  const searchRegExp = useMemo(() => new RegExp(search), [search]);
  const handleSortButtonClick = () => {
    setOrder((prevOrder) =>
      prevOrder === "concluded_first" ? "pending_first" : "concluded_first"
    );
  };

  const formatProjectsData = (raw_data) => {
    const projects_data = raw_data.data.map((data) => data.attributes.Campos);
    return projects_data;
  };

  const getProjects = async () => {
    const result = await Api.get(`/projects?populate=*`);
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
        <div className="grid grid-cols-2 gap-2 px-4 pt-3 pb-10 md:grid-cols-3">
          <Title><LocalizedText textKey="Projetos"/></Title>
          <Searchbar
            name="search"
            className="col-span-2 h-8 w-full place-self-center md:col-span-1"
            placeholder={t("Busque por projeto ou agência financiadora")}
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
              text="Ordenar por Status:"
              status={
                order === "pending_first"
                  ? "Em andamento primeiro"
                  : "Concluído primeiro"
              }
            />
          </div>
        </div>
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mx-5 flex flex-wrap justify-center gap-8">
            {projects
              .sort((a, b) =>
                order === "pending_first"
                  ? b.Status.localeCompare(a.Status)
                  : a.Status.localeCompare(b.Status)
              )
              .filter(
                (project) =>
                  !search.length > 0 ||
                  searchRegExp.test(project.sponsor) ||
                  searchRegExp.test(project.Titulo)
              )
              .map((project) => (
                <ProjectCard
                  id={project.id}
                  title={project.Titulo}
                  resume={project.Resumo}
                  status={project.Status}
                  sponsors={project.Financiadores}
                  coordinator={project.Coordenador}
                />
              ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
