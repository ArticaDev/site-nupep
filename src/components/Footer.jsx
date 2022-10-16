import ufu from "../assets/ufu.png";
import axios from 'axios';
import { useState, useEffect } from "react";

const Footer = () => {
  const [contactText, setContactText] = useState("")

  const getContactText = async () => {
    const result = await axios.get('https://nupepcms.articadev.com/api/footer');
    if (result) {
      setContactText(result.data.data.attributes.Texto);
    }
  };

  useEffect(() => {
    getContactText()
  }, [])

  const urlList = [
    {
      name: "IEEE IAS",
      url: "https://www.ias.ac.in/",
    },
    {
      name: "IEEE PELS",
      url: "https://www.ieee-pels.org/",
    },
    {
      name: "IEEE IES",
      url: "http://www.ieee-ies.org/",
    },
    {
      name: "IET",
      url: "https://www.theiet.org/",
    },
    {
      name: "SOBRAEP",
      url: "https://sobraep.org.br/",
    },
    {
      name: "FEELT",
      url: "http://www.feelt.ufu.br/",
    },
  ];

  return (
    <div className="max-w-screen mt-28 grid grid-flow-row items-center justify-center gap-2 bg-[#161616] p-10 font-bold text-white">
      <p dangerouslySetInnerHTML={{ __html: contactText }}></p>
      <a href="callto:3432394411">+55 34 3239-4411 | +55 34 3218-2111</a>
      <div className="grid grid-flow-col items-center gap-5 lg:justify-between">
        <div>
          <ul>
            <li>Links Externos</li>
            {urlList.map((url) => (
              <li key={url.name}>
                <a className="text-blue cursor-pointer hover:text-cyan-600" href={url.url}>
                  {url.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className='cursor-pointer' href="https://www.ufu.br">
          <img className="w-48" src={ufu}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
