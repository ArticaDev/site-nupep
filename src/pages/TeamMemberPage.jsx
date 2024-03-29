import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import Api from "../services/Api";
import LocalizedText from "../components/LocalizedText";

const TeamMemberPage = () => {
  let { memberID } = useParams();
  const localLanguage = localStorage.getItem("language");
  const [member, setMember] = useState([]);

  const formatMemberData = (raw_data) => {
    const member_data = raw_data.data.attributes.Campos;
    if (member_data.Foto && member_data.Foto.data) {
      member_data.Foto = member_data.Foto.data.attributes.url;
    }
    return member_data;
  };

  const getMemberData = async () => {
    let result = await Api.get(
      `/members/${memberID}?populate[Campos][populate]=*&populate=localizations`
    );
    if (result) {
      if(localLanguage && result.data.data.attributes.locale !== localLanguage){
        const localizedId = result.data.data.attributes.localizations.data.find(
          (localization) => localization.attributes.locale === localLanguage
        ).id;
        const localizedResult = await Api.get(
          `/members/${localizedId}?populate[Campos][populate]=*&populate=localizations`
        );
        if(localizedResult) result = localizedResult;
      }
      setMember(formatMemberData(result.data));
    }
  };

  useEffect(() => {
    getMemberData();
  }, []);

  return (
    <div>
      <Layout>
        <div className="grid grid-flow-col items-center justify-center pt-10">
          <div className="grid grid-flow-row items-center justify-center gap-4 px-96">
            <div className="px-4 py-3 text-center">
              <Title>{member.Nome}</Title>
            </div>
            <div>
              <img
                className="mx-auto h-24 w-24 rounded-full bg-black"
                src={member.Foto}
              ></img>
              <p className="pt-4 text-center">{member.Cargo}</p>
            </div>

            <p className="text-xl text-blue hover:text-cyan-700">
              Email:
              <a href={`mailto:${member.Email}`}> {member.Email}</a>
            </p>
            <p className="text-xl text-blue hover:text-cyan-700">
              <LocalizedText textKey="Telefone"/>:
              <a href={`callto:${member.Telefone}`}> {member.Telefone}</a>
            </p>
            { member.Cargo === 'Egressos' &&
              (
                <p className="text-xl text-blue hover:text-cyan-700">
               <LocalizedText textKey="Ano de conclusão de curso" />:
                <a> {member.AnoConclusaoDeCurso}</a>
              </p>
              )
            }
            <p dangerouslySetInnerHTML={{ __html: member.Sobre }}></p>
            {[
              {
                link: member.Lattes,
                text: "Lattes",
              },
              {
                link: member.OrcId,
                text: "Orc ID",
              },
              {
                link: member.WebOfScience,
                text: "Web of Science",
              },
            ].map(({ link, text }) => (
              <a href={link}>
                <button className="mx-auto w-40 bg-zinc-800 px-4 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:bg-zinc-900 focus:ring-0 active:shadow-lg">
                  {text}
                </button>
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TeamMemberPage;
