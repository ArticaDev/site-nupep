import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Searchbar from "../components/Searchbar";
import SortButton from "../components/SortButton";
import axios from "axios";
import { useMemo } from "react";

const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN;

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
    setProjects(formatProjectsData({data: [{attributes:{
      "createdAt": "2022-08-30T17:58:37.370Z",
      "updatedAt": "2022-12-10T02:03:58.917Z",
      "publishedAt": "2022-08-30T17:59:32.425Z",
      "Campos": {
          "id": 3,
          "Resumo": "<p><strong>Descrição:</strong> Destaca-se como principal contribuição, a modelagem do sistema e o desenvolvimento de uma técnica de controle digital baseada em DSP. Com respeito aos painéis fotovoltaicos, os modelos desenvolvidos deverão primar pela operação do sistema sob diferentes condições climáticas (irradiação solar e temperatura), para que sejam analisadas as condições de operação do conversor CC-CA utilizado para disponibilizar a energia produzida pelos painéis. A modelagem do conversor estático, integrando-o aos modelos dos painéis, envolverá a implementação de algoritmos avançados para a otimização do sistema como um todo, a partir de uma função objetivo a ser definida em função de maximização da disponibilidade da energia elétrica e minimização de custos envolvidos e impactos ambientais.</p>",
          "Titulo": "Modelagem e controle digital baseado em DSP de um conversor CC-CA elevador de tensão para aplicação em sistemas isolados de geração de energia elétrica que utilizam painéis fotovoltaicos.",
          "Status": "Concluído",
          "Natureza": "Pesquisa",
          "Financiadores": "Fundação de Amparo à Pesquisa do Estado de Minas Gerais - Auxílio financeiro.",
          "Integrantes": "Luiz Carlos Gomes de Freitas / Ernane Antônio Alves Coelho - Integrante / Valdeir Jose Farias - Integrante / Luiz Carlos de Freitas - Coordenador / Lucas Sampaio Garcia - Integrante / Fabrício A. Borges - Integrante / Fernando Cardoso Melo - Integrante.",
          "Coordenador": "Luiz Carlos Gomes de Freitas"
      }
  }}]}));
    // getProjects();
  }, []);

  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 gap-2 px-4 pt-3 pb-10 md:grid-cols-3">
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
