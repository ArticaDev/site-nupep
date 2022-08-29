import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/Title";

const TeamMemberPage = () => {
  let params = useParams();

  return (
    <div>
      <Layout>
        <div className="px-4 py-3">
          <Title>{params.memberName}</Title>
        </div>
        <div className="grid grid-flow-col items-center justify-center pt-10">
          <div className="grid grid-flow-row items-center justify-center gap-4 px-96">
            <div>
              <img className="mx-auto h-24 w-24 rounded-full bg-black"></img>
              <p className="pt-4 text-center">Docente</p>
            </div>

            <p className="text-xl text-blue hover:text-cyan-700">
              Email:
              <a href={`mailto:${params.memberName}`}> {params.memberName}</a>
            </p>
            <p className="text-xl text-blue hover:text-cyan-700">
              Telefone:
              <a href={`callto:${params.memberName}`}> (99)999999999</a>
            </p>
            <p>
              Possui graduação em Engenharia Elétrica pela Universidade Federal
              de Minas Gerais(1987), mestrado em Engenharia Elétrica pela
              Universidade Federal de Santa Catarina(1989) e doutorado em
              Engenharia Elétrica pela Universidade Federal de Minas
              Gerais(2000). Atualmente é Professor Associado 2 da Universidade
              Federal de Uberlândia, Revisor de periódico da Eletrônica de
              Potência (Impresso), Revisor de periódico da Controle & Automação
              (Impresso), Revisor de periódico da IEEE Transactions on Power
              Electronics e Revisor de periódico da IEEE Transactions on
              Industrial Electronics (1982. Print). Tem experiência na área de
              Engenharia Elétrica, com ênfase em Eletrônica de Potência. Atuando
              principalmente nos seguintes temas:Inversores PWM Senoidais,
              Paralelismo de Inversores, Caraterísticas Potência
              Ativa-Frequência e Potência.
            </p>
            <button className="mx-auto w-40 bg-zinc-800 px-4 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:bg-zinc-900 focus:ring-0 active:shadow-lg">
              <a href={`mailto:${params.memberName}`}>Lattes</a>
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TeamMemberPage;
