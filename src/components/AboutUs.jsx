import Title from "./Title";
import { useState, useEffect } from "react";
import Api from "../services/Api";
import LocalizedText  from "../components/LocalizedText";

const AboutUs = () => {

  const [aboutUs, setAboutUs] = useState("")

  const getAboutText = async () => {
    const result = await Api.get(`/about`);
    if (result) {
      setAboutUs(result.data.data.attributes.Texto);
    }
  };

  useEffect(() => {
    getAboutText()
  }, [])

  return (
    <div id="about" className="grid grid-flow-row gap-6 px-6 lg:px-16">
      <Title>
        <LocalizedText textKey="Sobre nós" colored/>   
      </Title>
      <h3 className="text-xl" dangerouslySetInnerHTML={{ __html: aboutUs }}>
      </h3>
    </div>
  );
};

export default AboutUs;
