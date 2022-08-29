import React from "react";
import { Link } from "react-router-dom";
import limitText from "../utils/limitText";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Tag from "../components/Tag";
import { useState, useEffect } from "react";
import axios from 'axios';

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

  const [projects, setProjects] = useState([])

  const formatProjectsData = (raw_data) => {
    const projects_data = raw_data.data.map(data => data.attributes.Campos)
    return projects_data;
  }

  const getProjects = async () => {
    const result = await axios.get('https://nupepcms.articadev.com/api/projects?populate=*');
    if (result) {
      setProjects(formatProjectsData(result.data));
    }
  };

  useEffect(() => {
    getProjects()
  }, [])
  
  return (
    <div>
      <Layout>
        <div className="mb-4 px-4 py-3">
          <Title>Projetos</Title>
        </div>
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mx-5 flex flex-wrap justify-center gap-8">
            {projects.map((project) => (
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
                      <p className="mb-3" dangerouslySetInnerHTML={ {__html: limitText(project.Resumo, 20)} }></p>
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
