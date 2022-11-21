import Layout from "../components/Layout";
import Slider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import Searches from "../components/Searches";
import { SwiperSlide } from "swiper/react";
import SwiperImageWithTitle from "../components/SwiperImageWithTitle";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import CheckOtherPages from "../components/CheckOtherPages";
import { useState, useEffect } from "react";
import axios from 'axios';
const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN
const CMS_ASSETS_URL = import.meta.env.VITE_NUPEP_CMS_ASSETS

function Home() {

  const [projects, setProjects] = useState([])

  const formatProjectsData = (raw_data) => {
    const projects_data = raw_data.data.map(data => data.attributes.Campos)
    projects_data.forEach(project => {
      if (project.Imagens) {
        const url = `${CMS_ASSETS_URL}${project.Imagens.data[0].attributes.url}`
        project.thumbnail = url
      }
    });
    return projects_data;
  }

  const getProjects = async () => {
    const result = await axios.get(`${CMS_URL}/projects?populate[Campos][populate]=*`);
    if (result) {
      setProjects(formatProjectsData(result.data));
    }
  };

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <Layout>
      <Slider>
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <SwiperImageWithTitle src={project.thumbnail} title={project.Titulo} />
          </SwiperSlide>
        ))}
      </Slider>
      <div className="mt-8 grid min-h-fit gap-28">
        <AboutUs />
        <Searches />
        <CheckOtherPages />
        <Partners />
        <Contact />
      </div>
    </Layout>
  );
}

export default Home;
