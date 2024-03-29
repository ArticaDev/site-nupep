import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Layout from "../components/Layout";
import Searchbar from "../components/Searchbar";
import Title from "../components/Title";
import Filter from "../components/Filter";
import Grid from "../components/Grid";
import MemberCard from "../components/MemberCard";
import default_user from "../assets/default_user.png";
import sortArrWithNaN from "../utils/sortArrWithNaN";
import Api from "../services/Api";
import { useTranslation } from "react-i18next";
import LocalizedText from "../components/LocalizedText";

const MemberRoster = ({ title, children, hidden }) => {
  return (
    <div hidden={hidden}>
      <h3 className="overflow-hidden text-ellipsis text-2xl font-bold text-blue">
        <LocalizedText textKey={title} />
      </h3>
      <hr />
      {children}
    </div>
  );
};

const Team = () => {
  const [members, setMembers] = useState([]);
  const { t } = useTranslation();

  const roles = {
    all: "all",
    teacher: "Professor",
    doctorate: "Aluno de Doutorado",
    master: "Aluno de Mestrado",
    undergraduate: "Aluno de IC",
    egress: "Egressos",
  };

  const formatMembersData = (raw_data) => {
    const members_data = raw_data.data.map((data) => data.attributes.Campos);
    members_data.forEach((member) => {
      if (!Object.values(roles).includes(member.Cargo)) {
        member.SubRole = member.Cargo;
        member.Cargo = roles.teacher;
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
    const result = await Api.get(`/members?populate[Campos][populate]=*`);
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
      name: "Pesquisadores",
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
    {
      name: "Egressos",
      value: roles.egress,
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
    "Professor Colaborador": 4,
    "Professor Estrangeiro": 5,
    Colaborador: 6,
  };

  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 gap-4 px-4 py-3 md:grid-cols-3">
          <Title>{t('Equipe')}</Title>
          <Searchbar
            name="search"
            className="col-span-2 h-8 w-full place-self-center md:col-span-1"
            placeholder={t("Digite o nome de um integrante")}
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
        <Grid direction="rows" cols={1} rows={0}>
          {[
            ["Pesquisadores Orientadores", roles.teacher],
            ["Pesquisadores do Curso de Doutorado", roles.doctorate],
            ["Pesquisadores do Curso de Mestrado", roles.master],
            ["Alunos de Iniciação Científica", roles.undergraduate],
            ["Egressos", roles.egress],
          ].map((roster) => (
            <MemberRoster
              key={`roster-${roster[1]}`}
              title={roster[0]}
              hidden={!(visibleRoster === "all" || visibleRoster === roster[1])}
            >
              <div
                className={clsx(
                  "grid grid-cols-members justify-between gap-x-6"
                )}
              >
                {filterByRole(roster[1])
                  .sort((first, second) => {
                    const a = subRolesOrder[first.SubRole];
                    const b = subRolesOrder[second.SubRole];
                    return sortArrWithNaN(a, b);
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
