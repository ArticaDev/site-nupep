import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Title from "../components/Title";
import Filter from "../components/Filter";

const Grid = ({ children }) => {
  return <div className="grid grid-cols-1 p-3 md:grid-cols-4">{children}</div>;
};

const Col = ({ title, children }) => {
  return (
    <div>
      <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold text-blue">
        {title}
      </h3>
      <hr />
      {children}
    </div>
  );
};

const Team = () => {
  const params = new URLSearchParams(window.location.search);
  const members = [
    {
      key: "eustaquio-teacher",
      name: "Eustáquio Inácio",
      picture: "https://picsum.photos/200",
      role: "teacher",
    },
    {
      key: "joao-teacher",
      name: "João Batista",
      picture: "https://picsum.photos/200",
      role: "teacher",
    },
    {
      key: "eustaquio-master",
      name: "Eustáquio Inácio",
      picture: "https://picsum.photos/200",
      role: "masters",
    },
    {
      key: "joao-master",
      name: "João Batista",
      picture: "https://picsum.photos/200",
      role: "masters",
    },
    {
      key: "eustaquio-doctor",
      name: "Eustáquio Inácio",
      picture: "https://picsum.photos/200",
      role: "doctorate",
    },
    {
      key: "joao-doctor",
      name: "João Batista",
      picture: "https://picsum.photos/200",
      role: "doctorate",
    },
    {
      key: "eustaquio-ic",
      name: "Eustáquio Inácio",
      picture: "https://picsum.photos/200",
      role: "ic",
    },
    {
      key: "joao-ic",
      name: "João Batista",
      picture: "https://picsum.photos/200",
      role: "ic",
    },
  ];

  const options = [
    {
      name: "Professores",
      value: "professores",
    },
    {
      name: "Alunos de Mestrado",
      value: "mestrado",
    },
    {
      name: "Alunos de Doutorado",
      value: "doutorado",
    },
    {
      name: "Alunos de Iniciação Científica",
      value: "ic",
    },
  ];

  const data = [];
  members.forEach((member) => {
    const member_search = {};
    member_search.key = member.key;
    member_search.value = member.name;
    data.push(member_search);
  });

  return (
    <div>
      <Layout>
        <form
          id={"form-filter"}
          action=""
          className="flex flex-wrap justify-between p-3"
        >
          <Title>Equipe</Title>
          <Searchbar
            name="member"
            className="order-1"
            placeholder={"Digite o nome de um integrante"}
            data={data}
            onChange={(value) => console.log(value)}
            onSelect={(record) => console.log(record)}
          />
          <Filter
            className="order md:order-2"
            name="filter"
            id="filter"
            options={options}
            onChange={() => {
              document.querySelector("#form-filter").submit();
            }}
          />
        </form>
        <Grid>
          <Col title="Professores"></Col>
          <Col title="Alunos de Mestrado"></Col>
          <Col title="Alunos de Doutorado"></Col>
          <Col title="Alunos de Iniciação Científica"></Col>
        </Grid>
      </Layout>
    </div>
  );
};

export default Team;
