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
        <div className="pt-10">
          <div className="grid grid-flow-col items-center justify-center">
            <div className="grid grid-flow-row items-center justify-center gap-4">
              <img className="mx-auto h-24 w-24 rounded-full bg-black"></img>
              <p className="text-xl">
                <a href={`mailto:${params.memberName}`}>
                  Email: {params.memberName}
                </a>
              </p>
              <button className="min-w-max bg-zinc-800 px-4 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:bg-zinc-900 focus:ring-0 active:shadow-lg">
                <a href={`mailto:${params.memberName}`}>Lattes</a>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TeamMemberPage;
