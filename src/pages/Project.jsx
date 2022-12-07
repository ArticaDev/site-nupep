import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Image from "../components/Image";
import { useState, useEffect } from "react";
import axios from "axios";
const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN;
const CMS_ASSETS_URL = import.meta.env.VITE_NUPEP_CMS_ASSETS_URL;

const Project = ({ ...props }) => {
  const { projectID } = useParams();

  const [project, setProject] = useState([]);

  const formatProjectData = (raw_data) => {
    const project_data = raw_data.data.attributes.Campos;
    if (project_data.Imagens) {
      project_data.Imagens = project_data.Imagens.data.map(
        (data) => data.attributes.url
      );
    }
    return project_data;
  };

  const getProject = async () => {
    const result = await axios.get(
      `${CMS_URL}/projects/${projectID}?populate[Campos][populate]=*`
    );
    if (result) {
      setProject(formatProjectData(result.data));
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <Layout>
      <div id="project" className="grid grid-flow-row gap-6 px-6 py-4 lg:px-16">
        <Title>{project.Titulo}</Title>
        <hr />
        <h3 className="text-xl">
          <strong>Coordenador:</strong>
          <div dangerouslySetInnerHTML={{ __html: project.Coordenador }}></div>
        </h3>
        <h3 className="text-xl">
          <div dangerouslySetInnerHTML={{ __html: project.Resumo }}></div>
        </h3>
        <h3 className="text-xl">
          <strong>Situação:</strong> {project.Status}
        </h3>
        <h3 className="text-xl">
          <strong>Integrantes:</strong> {project.Integrantes}
        </h3>
        <h3 className="text-xl">
          <strong>Financiadores:</strong> {project.Financiadores}
        </h3>
        <h3 className="text-xl">
          <strong>Natureza:</strong> {project.Natureza}
        </h3>
        <hr />
        {project.Imagens && (
          <>
            <h4 className="text-3xl font-bold">
              Galeria de <span className="text-blue">Imagens</span>
            </h4>
            <div className="container mx-auto flex flex-wrap gap-6">
              {project.Imagens.map((src) => (
                <Image
                  className="aspect-square max-w-xs grow basis-32"
                  src={`${CMS_ASSETS_URL}${src}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Project;
