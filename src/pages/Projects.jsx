import React from "react";

import Layout from "../components/Layout";
import Title from "../components/Title";
import Tag from "../components/Tag";

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
  return (
    <div>
      <Layout>
        <div className="mb-4 px-4 py-3">
          <Title>Projetos</Title>
        </div>
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mx-5 flex flex-wrap justify-center gap-8">
            {[...new Array(7)]
              .map((project) => ({
                title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis similique doloribus accusamus cum praesentium aut
                harum reprehenderit, et voluptatem ipsum sapiente,
                recusandae mollitia autem eos. Ad doloribus iusto dicta
                sed.`,
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem vel minima perferendis quae deleniti`,
                status: "finished",
              }))
              .map((project) => (
                <div className="h-80 flex-shrink basis-85">
                  <div className="h-full w-full rounded-xl shadow-md">
                    <div className="flex h-1/2 place-items-center text-ellipsis whitespace-normal rounded-t-xl bg-black p-3">
                      <h3 className="text-white">{project.title}</h3>
                    </div>
                    <div className="mx-2 flex h-1/2 flex-wrap items-end justify-between overflow-auto p-3">
                      <p>
                        {project.description}
                      </p>
                      {project.status === "finished" && <CompleteTag />}
                      {project.status === "inprogress" && <InProgressTag />}
                      {project.status === "dropped" && <DroppedTag />}
                      <a
                        className="rounded-sm bg-black px-8 py-2 text-sm font-bold text-white"
                        href=""
                      >
                        Ler Mais
                      </a>
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
