import ufu from "../assets/ufu.png";
import { BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import { useState, useEffect } from "react";
import Api from "../services/Api";

const Footer = () => {
  const [contactText, setContactText] = useState("");

  const getContactText = async () => {
    const result = await Api.get(`/footer`);
    if (result) {
      setContactText(result.data.data.attributes.Texto);
    }
  };

  useEffect(() => {
    getContactText();
  }, []);

  return (
    <div className="max-w-screen mt-28 grid grid-flow-row items-center justify-center gap-2 bg-[#161616] p-10 font-bold text-white">
      <div className="mx-auto grid items-center justify-center gap-10 lg:gap-4">
        <p dangerouslySetInnerHTML={{ __html: contactText }}></p>
        <div className="grid grid-flow-row items-center gap-4 lg:justify-between">
          <div className="mx-auto grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/nupep-ufu/?originalSubdomain=br"
              className="cursor-pointer transition-colors hover:text-blue"
            >
              <BsLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/nupep_ufu/"
              className="cursor-pointer transition-colors hover:text-blue"
            >
              <BsInstagram size={30} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC_IbH9uztZML5unpMlEt41A"
              className="cursor-pointer transition-colors hover:text-blue"
            >
              <BsYoutube size={30} />
            </a>
          </div>
          <a className="cursor-pointer" href="https://www.ufu.br">
            <img className="w-48" src={ufu}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
