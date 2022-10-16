import Title from "./Title";
import axios from 'axios';
import { useState, useEffect } from "react";

const AboutUs = () => {

  const [aboutUs, setAboutUs] = useState("")

  const getAboutText = async () => {
    const result = await axios.get('https://nupepcms.articadev.com/api/about');
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
        Sobre <span className="text-blue"> nós</span>{" "}
      </Title>
      <h3 className="text-xl" dangerouslySetInnerHTML={{ __html: aboutUs }}>
      </h3>
    </div>
  );
};

export default AboutUs;
