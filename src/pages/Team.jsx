import React, { useState,useEffect } from "react";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Title from "../components/Title";
import Filter from "../components/Filter";
import MemberCard from "../components/MemberCard";
import axios from 'axios';
import isMobile from "../utils/isMobile";

const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
      {children}
    </div>
  );
};

const Col = ({ title, children, hidden }) => {
  return (
    <div hidden={hidden}>
      <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold text-blue">
        {title}
      </h3>
      <hr />
      {children}
    </div>
  );
};

const Team = () => {

  const [members, setMembers] = useState([])

  const formatMembersData = (raw_data) => {
    const members_data = raw_data.data.map(data => data.attributes.Campos)
    members_data.forEach(member => {
      if (member.Foto) {
        member.Foto = member.Foto.data.attributes.url
      }
    });
    return members_data;
  }

  const getMembers = async () => {
    const result = await axios.get('https://nupepcms.articadev.com/api/members?populate[Campos][populate]=*');
    if (result) {
      setMembers(formatMembersData(result.data));
    }
  };

  useEffect(() => {
    getMembers()
  }, [])

  const roles = {
    teacher: "Professor",
    master: "Aluno de Mestrado",
    doctorate: "Aluno de Doutorado",
    undergraduate: "Aluno de IC",
  };

  const options = [
    {
      name: "Professores",
      value: roles.teacher,
    },
    {
      name: "Alunos de Mestrado",
      value: roles.master,
    },
    {
      name: "Alunos de Doutorado",
      value: roles.doctorate,
    },
    {
      name: "Alunos de Iniciação Científica",
      value: roles.undergraduate,
    },
  ];

  const [search, setSearch] = useState("");
  const [visibleColumn, setVisibleColumn] = useState(
    isMobile() ? "teacher" : "all"
  );

  const filterByRole = (role) => {
    return members.filter((member) => member.Cargo === role);
  };

  const hideMember = (name) => {
    return !name.toLowerCase().startsWith(search.toLowerCase());
  };

  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 gap-2 px-4 py-3 md:grid-cols-3">
          <Title>Equipe</Title>
          <Searchbar
            name="search"
            className="col-span-2 h-8 w-full place-self-center md:col-span-1"
            placeholder={"Digite o nome de um integrante"}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Filter
            className="order col-start-2 row-start-1 h-8 self-center justify-self-end md:hidden"
            name="role"
            id="filter"
            options={options}
            onChange={(event) => {
              setVisibleColumn(event.target.value);
            }}
            disabled={!isMobile()}
          />
        </div>
        <Grid>
          {[
            ["Professores", roles.teacher],
            ["Alunos de Mestrado", roles.master],
            ["Alunos de Doutorado", roles.doctorate],
            ["Alunos de Iniciação Científica", roles.undergraduate],
          ].map((column) => (
            <Col
              key={`col-${column[1]}`}
              title={column[0]}
              hidden={!(visibleColumn === "all" || visibleColumn === column[1])}
            >
              {filterByRole(column[1]).map((member) => (
                <MemberCard
                  name={member.Nome}
                  id={member.id}
                  img={`https://nupepcms.articadev.com${member.Foto}`}
                  hidden={hideMember(member.Nome)}
                  teamMemberUrl={`/equipe/teamMemberPage`}
                />
              ))}
            </Col>
          ))}
        </Grid>
      </Layout>
    </div>
  );
};

export default Team;
