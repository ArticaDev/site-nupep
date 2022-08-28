import Title from "./Title";
import Input from "./Input";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="grid grid-flow-col md:grid-flow-row">
      <div className="grid grid-flow-row gap-6 px-6 lg:px-16">
        <div className="grid gap-4 lg:grid-flow-col lg:grid-cols-3 lg:gap-12	">
          <div className="grid gap-3.5">
            <Title>Contato</Title>
            <form onSubmit={handleSubmit} className="grid gap-2">
              <Input labelText="Seu nome:" />
              <Input labelText="Seu email:" />
              <Input labelText="Assunto:" />
              <div className="mb-3 grid grid-flow-row">
                <label className="font-bold">Mensagem:</label>
                <textarea className="border-2 border-black px-4 pt-1 outline-none"></textarea>
              </div>
              <button className="mx-auto w-32 rounded-sm bg-black px-8 py-2 text-sm font-bold text-white">
                Enviar
              </button>
            </form>
          </div>
          <div className="">
            <div className="grid gap-5">
              <Title>
                Informações para <span className="text-blue">contato</span>
              </Title>
              <p className="text-xl font-bold lg:w-150">
                Núcleo de Pesquisa em Eletrônica de Potência (NUPEP) Faculdade
                de Engenharia Elétrica (FEELT)
                <br /> Universidade Federal de Uberlândia (UFU)
                <br /> Av. João Naves de Ávila 2121, Campus Santa Mônica - Bloco
                1P - 1º Andar.
                <br /> Uberlândia MG - CEP 38400-902
                <br />
                Telefones: +55 34-3239-4701 +55 34-3239-4767
                <br /> Fax: 34-3239-4704
                <br />
                E-mail: lcgfreitas@yahoo.com.br
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <Title>Localização</Title>
            <div className="grid justify-center">
              <iframe
                className="h-48 w-72 lg:h-96 lg:w-150"
                height="100%"
                scrolling="no"
                src="//maps.google.com/?ll=-18.919687%2C-48.258444&amp;spn=0.003613%2C0.005568&amp;ie=UTF8&amp;z=17&amp;t=hybrid&amp;sll=-18.919687%2C-48.258444&amp;sspn=0.003613%2C0.005568&amp;q=-18.919846%2C-48.258616%20(Local%20sem%20t%C3%ADtulo)&amp;output=embed"
                title="NUPEP"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Contact;
