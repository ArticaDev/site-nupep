import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Image from "../components/Image";
import { useState, useEffect } from "react";
import Api from "../services/Api";
import LocalizedText from "../components/LocalizedText";

const Project = () => {
  const { projectID } = useParams();
  const localLanguage = localStorage.getItem("language");
  const [project, setProject] = useState([]);

  const formatProjectData = (raw_data) => {
    const project_data = raw_data.data.attributes.Campos;
    if (project_data.Imagens && project_data.Imagens.data) {
      project_data.Imagens = project_data.Imagens.data.map(
        (data) => data.attributes.url
      );
    }
    else{
      project_data.Imagens = null;
    }
    return project_data;
  };

  const getProject = async () => {
    let result = await Api.get(
      `/projects/${projectID}?populate[Campos][populate]=*&populate=localizations`
    );
    if (result) {
      if(localLanguage && result.data.data.attributes.locale !== localLanguage){
        const localizedId = result.data.data.attributes.localizations.data.find(
          (localization) => localization.attributes.locale === localLanguage
        ).id;
        const localizedResult = await Api.get(
          `/projects/${localizedId}?populate[Campos][populate]=*&populate=localizations`
        );
        if(localizedResult) result = localizedResult;
      }
      setProject(formatProjectData(result.data));
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <Layout isLoaded={undefined}>
      <div id="project" className="grid grid-flow-row gap-6 px-6 py-4 lg:px-16">
        <Title>{project.Titulo}</Title>
        <hr />
        <h3 className="text-xl">
          <strong><LocalizedText textKey="Coordenador" /></strong>
          <div dangerouslySetInnerHTML={{ __html: project.Coordenador }}></div>
        </h3>
        <h3 className="text-xl">
          <div dangerouslySetInnerHTML={{ __html: project.Resumo }}></div>
        </h3>
        <h3 className="text-xl">
          <strong><LocalizedText textKey="Situação"/>:</strong> {project.Status}
        </h3>
        <h3 className="text-xl">
          <strong><LocalizedText textKey="Integrantes"/>:</strong> {project.Integrantes}
        </h3>
        <h3 className="text-xl">
          <strong><LocalizedText textKey="Financiadores"/>:</strong> {project.Financiadores}
        </h3>
        <h3 className="text-xl">
          <strong><LocalizedText textKey="Natureza"/>:</strong> {project.Natureza}
        </h3>
        <hr />
        {project.Imagens && (
          <>
            <h4 className="text-3xl font-bold">
             <LocalizedText textKey="Galeria de imagens" colored/>
            </h4>
            <div className="container mx-auto flex flex-wrap gap-6">
              {project.Imagens.map((src) => (
                <Image
                  className="aspect-square max-w-xs grow basis-32"
                  src={src}
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
