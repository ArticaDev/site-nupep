import Title from "./Title";

const AboutUs = () => {
  return (
    <div className="grid grid-flow-row gap-6 px-6 lg:px-16">
      <Title>
        Sobre <span className="text-blue"> nós</span>{" "}
      </Title>
      <h3 className="text-xl">
        O NUPEP foi fundado em 1991 e hoje constitui um grupo de pesquisa
        <strong> consolidado</strong>, com mais{" "}
        <strong> 60 dissertações de mestrado e 30 teses de doutorado </strong>{" "}
        concluídas e inúmeros trabalhos publicados em congressos e periódicos
        nacionais e internacionais.
        <br />
        <br />
        Devido à realização de diversos projetos, conseguiu-se estruturar um
        <strong> grande laboratório</strong> de pesquisa em Eletrônica de
        Potência com toda <strong> infraestrutura básica</strong> necessária e
        softwares de simulação computacional para realização de trabalhos de
        pesquisa e desenvolvimento.
        <br />
        <br />
        Em termos de infraestrutura, o grupo de pesquisa dispõe de{" "}
        <strong> duas salas com aproximadamente 80m²</strong>, equipadas com
        equipamentos e recursos para realização de pesquisas em eletrônica de
        potência e suas aplicações em sistemas de energia.
      </h3>
    </div>
  );
};

export default AboutUs;
