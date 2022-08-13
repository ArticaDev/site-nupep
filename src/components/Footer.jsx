import ufu from "../assets/ufu.png";

const Footer = () => {
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
      <p>
        Núcleo de Pesquisa em Eletrônica de Potência (NUPEP) - Universidade
        Federal de Uberlândia (UFU)
      </p>
      <p>
        Av. João Naves de Ávila 2121 - Campus Santa Mônica - Bloco 1P -
        Uberlândia MG - CEP 38400902
      </p>
      <a href="callto:3432394411">+55 34 3239-4411 | +55 34 3218-2111</a>
      <div className="grid grid-flow-col items-center gap-5 lg:justify-between">
        <div>
          <ul>
            <li>Links Externos</li>
            {urlList.map((url) => (
              <li key={url.name}>
                <a className="text-blue hover:text-cyan-600" href={url.url}>
                  {url.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="https://www.ufu.br">
          <img className="w-48" src={ufu}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
