import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Title from "../components/Title";
import Filter from "../components/Filter";
import MemberCard from "../components/MemberCard";
import clsx from "clsx";
import axios from "axios";
import default_user from "../assets/default_user.png";

const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN;

const Grid = ({ direction = "col", cols, children }) => {
  return (
    <div
      className={clsx(
        "grid gap-1 p-3 lg:gap-10",
        direction == "col" && !cols
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          : "",
        cols && `grid-cols-${cols}`
      )}
    >
      {children}
    </div>
  );
};

const MemberRoster = ({ title, children, hidden }) => {
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
  const [members, setMembers] = useState([]);

  const roles = {
    all: "all",
    teacher: "Professor",
    doctorate: "Aluno de Doutorado",
    master: "Aluno de Mestrado",
    undergraduate: "Aluno de IC",
  };

  const formatMembersData = (raw_data) => {
    const members_data = raw_data.data.map((data) => data.attributes.Campos);
    members_data.forEach((member) => {
      if (!Object.values(roles).includes(member.Cargo)) {
        member.SubRole = member.Cargo;
        member.Cargo = "Professor";
      }
      if (member.Foto && member.Foto.data) {
        member.Foto = member.Foto.data.attributes.url;
      } else {
        member.Foto = default_user;
      }
    });
    return members_data;
  };

  const getMembers = async () => {
    const result = await axios.get(
      `${CMS_URL}/members?populate[Campos][populate]=*`
    );
    if (result) {
      setMembers(formatMembersData(result.data));
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  const options = [
    {
      name: "Todos",
      value: roles.all,
    },
    {
      name: "Professores",
      value: roles.teacher,
    },
    {
      name: "Alunos de Doutorado",
      value: roles.doctorate,
    },
    {
      name: "Alunos de Mestrado",
      value: roles.master,
    },
    {
      name: "Alunos de Iniciação Científica",
      value: roles.undergraduate,
    },
  ];

  const [search, setSearch] = useState("");
  const [visibleRoster, setVisibleRoster] = useState(roles.all);

  const filterByRole = (role) => {
    return members.filter((member) => member.Cargo === role);
  };

  const hideMember = (name) => {
    return !name.toLowerCase().startsWith(search.toLowerCase());
  };

  const subRolesOrder = {
    Coordenador: 1,
    "Pós-doc": 2,
    Professor: 3,
    Colaborador: 4,
  };

  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 gap-4 px-4 py-3 md:grid-cols-3">
          <Title>Equipe</Title>
          <Searchbar
            name="search"
            className="col-span-2 h-8 w-full place-self-center md:col-span-1"
            placeholder={"Digite o nome de um integrante"}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Filter
            className="order col-start-2 row-start-1 h-8 self-center justify-self-end md:col-start-3"
            name="role"
            id="filter"
            options={options}
            onChange={(event) => {
              setVisibleRoster(event.target.value);
            }}
          />
        </div>
        <Grid cols={visibleRoster !== roles.all ? 1 : 0}>
          {[
            ["Pesquisadores", roles.teacher],
            ["Alunos de Doutorado", roles.doctorate],
            ["Alunos de Mestrado", roles.master],
            ["Alunos de Iniciação Científica", roles.undergraduate],
          ].map((roster) => (
            <MemberRoster
              key={`roster-${roster[1]}`}
              title={roster[0]}
              hidden={!(visibleRoster === "all" || visibleRoster === roster[1])}
            >
              <div
                className={clsx(
                  visibleRoster !== roles.all &&
                    "grid grid-cols-members justify-between gap-2"
                )}
              >
                {filterByRole(roster[1])
                  .sort((first, second) => {
                    return (
                      subRolesOrder[first.SubRole] -
                      subRolesOrder[second.SubRole]
                    );
                  })
                  .map((member) => (
                    <MemberCard
                      subRole={member.SubRole}
                      name={member.Nome}
                      lattes={member.Lattes}
                      id={member.id}
                      img={member.Foto}
                      hidden={hideMember(member.Nome)}
                      teamMemberUrl={`/equipe/teamMemberPage`}
                    />
                  ))}
              </div>
            </MemberRoster>
          ))}
        </Grid>
      </Layout>
    </div>
  );
};

export default Team;
