import React from "react";

import Layout from "../components/Layout";
import Title from "../components/Title";
import Tag from "../components/Tag";

const Projects = () => {
  return (
    <div>
      <Layout>
        <div className="mb-4 px-4 py-3">
          <Title>Projetos</Title>
        </div>
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mx-5 flex flex-wrap justify-center gap-8">
            {[...new Array(7)].map((project) => (
              <div className="h-85 flex-shrink basis-85">
                <div className="h-[inherit] w-[inherit] rounded-xl shadow-md">
                  <h3>Oi</h3>
                  <div className="mx-2 flex justify-between">
                    <Tag
                      className="order-1 h-8 w-28 text-center"
                      variant="info"
                    >
                      <p className="text-sm font-bold leading-8">
                        Em andamento
                      </p>
                    </Tag>
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
