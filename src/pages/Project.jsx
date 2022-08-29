import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import Title from "../components/Title";
import Image from "../components/Image";

const Project = ({ ...props }) => {
  const { projectTitle } = useParams();

  const project = {
    title: projectTitle,
    abstract: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
    dicta, laborum accusamus sint similique et eveniet nihil ad quam quasi
    nam iste voluptatibus. Quae id, odio deleniti omnis nihil quod!
    Dolores blanditiis illo cumque incidunt nulla modi sit alias expedita,
    veniam facilis nam ipsam similique. Magni eaque odio exercitationem
    non, fugiat porro, ullam asperiores nisi maiores commodi, sunt fuga
    ratione. Veniam eligendi voluptatem hic veritatis quidem possimus
    culpa? Corrupti magnam quidem qui eius totam soluta voluptatum iure ad
    accusamus quo, veritatis laboriosam molestias, unde facere
    praesentium, assumenda necessitatibus saepe voluptatem. Molestias
    aspernatur beatae ex magni perspiciatis, earum fugit reiciendis non
    maxime. Et, voluptate harum facere ratione amet, suscipit optio
    voluptas nesciunt deserunt explicabo tenetur quos, voluptatem
    perferendis magnam quibusdam. Alias.`,
    images: [
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
    ],
    situation: "Em andamento",
    studentsInvolved: "Graduação (3)/Pós-graduação (3)",
    studentNames: "Luiz Carlos / João / Maria",
    sponsorship: "Fundação de Amparo ao Ensino e Pesquisa",
    nature: "Projeto de Extensão",
  };

  return (
    <Layout>
      <div id="project" className="grid grid-flow-row gap-6 px-6 py-4 lg:px-16">
        <Title>{project.title}</Title>
        <hr />
        <h3 className="text-xl">
          <strong>Descrição:</strong> {project.abstract}
        </h3>
        <h3 className="text-xl">
          <strong>Situação:</strong> {project.situation}
        </h3>
        <h3 className="text-xl">
          <strong>Alunos envolvidos:</strong> {project.studentsInvolved}
        </h3>
        <h3 className="text-xl">
          <strong>Integrantes:</strong> {project.studentNames}
        </h3>
        <h3 className="text-xl">
          <strong>Financiadores:</strong> {project.sponsorship}
        </h3>
        <h3 className="text-xl">
          <strong>Natureza:</strong> {project.nature}
        </h3>
        <hr />
        {project.images.length > 0 && (
          <>
            <h4 className="text-3xl font-bold">
              Galeria de <span className="text-blue">Imagens</span>
            </h4>
            <div className="container mx-auto flex flex-wrap gap-6">
              {project.images.map((src) => (
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
