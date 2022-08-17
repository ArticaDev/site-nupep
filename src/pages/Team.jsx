import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Title from "../components/Title";

const Team = () => {
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
        <Title>Equipe</Title>
        <Searchbar
          placeholder={"Digite o nome de um integrante"}
          data={data}
          onChange={(value) => console.log(value)}
          onSelect={(record) => console.log(record)}
        />
      </Layout>
    </div>
  );
};

export default Team;
