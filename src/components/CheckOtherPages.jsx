import IconText from "./IconText";
import Title from "./Title";
import { FaCog } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";

const CheckOtherPages = () => {
  return (
    <div className="grid grid-flow-row gap-6 px-6 lg:px-16">
      <Title>
        Nossos <span className="text-blue">projetos, equipe e publicações</span>
      </Title>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <IconText
          icon={<FaCog />}
          text={"Clique aqui para ver nossos projetos"}
          href={"/projetos"}
        />
        <IconText
          icon={<IoIosPaper />}
          text={"Clique aqui para ver nossas publicações"}
          href={"/publicacoes"}
        />
        <IconText
          icon={<RiTeamLine />}
          text={"Clique aqui para ver nossa equipe"}
          href={"/equipe"}
        />
      </div>
    </div>
  );
};

export default CheckOtherPages;
