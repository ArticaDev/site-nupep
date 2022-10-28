import ufu from "../assets/ufu.png";
import axios from "axios";
import { BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import { useState, useEffect } from "react";
const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN;

const Footer = () => {
  const [contactText, setContactText] = useState("");

  const getContactText = async () => {
    const result = await axios.get(`${CMS_URL}/footer`);
    if (result) {
      setContactText(result.data.data.attributes.Texto);
    }
  };

  useEffect(() => {
    getContactText();
  }, []);

  return (
    <div className="max-w-screen mt-28 grid grid-flow-row items-center justify-center gap-2 bg-[#161616] p-10 font-bold text-white">
      <div className="mx-auto grid items-center justify-center gap-10 lg:w-3/4 lg:gap-4">
        <p dangerouslySetInnerHTML={{ __html: contactText }}></p>
        <div className="grid grid-flow-col items-center lg:justify-between">
          <div className="mx-auto grid grid-flow-row gap-4 lg:grid-flow-col">
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
