import Title from "./Title";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import isMobile from "../utils/isMobile";
import { useState, useEffect } from "react";
import axios from 'axios';
const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN

const Searches = () => {

  const [topics, setTopics] = useState([])

  const formatTopics = (raw_data) => {
    let topics_content = raw_data.data.map((data) => data.attributes.Texto)
    return topics_content;
  }

  const getTopics = async () => {
    const result = await axios.get(`${CMS_URL}/researches-and-developments?populate=*`);
    if (result) {
      setTopics(formatTopics(result.data));
    }
  };

  useEffect(() => {
    getTopics()
  }, [])


  return (
    <div className="grid grid-flow-row gap-6 px-6 lg:px-16 " id="search">
      <Title>
        Pesquisa <span className="text-blue">e desenvolvimento</span>
      </Title>
      <Slider withNavigation={!isMobile()}>
        {topics.map((topic, index) => (
          <SwiperSlide key={index} className="home-researches-content">
            <div className="grid items-center justify-center px-8 pb-16" dangerouslySetInnerHTML={{ __html: topic }}>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Searches;
