import Title from "./Title";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import isMobile from "../utils/isMobile";
import { useState, useEffect } from "react";
import Api from "../services/Api";
import LocalizedText  from "../components/LocalizedText";

const Searches = () => {
  const [topics, setTopics] = useState([]);

  const formatTopics = (raw_data) => {
    let topics_content = raw_data.data.map((data) => {
      return {
        Texto: data.attributes.Texto,
        Imagens: data.attributes.Imagens.data,
      };
    });

    topics_content.forEach((topic) => {
      if (topic.Imagens) {
        topic.Imagens = topic.Imagens.map((image) => image.attributes.url);
      }
    });

    return topics_content;
  };

  const getTopics = async () => {
    const result = await Api.get(
      `/researches-and-developments?populate=*`
    );
    if (result) {
      setTopics(formatTopics(result.data));
    }
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div className="grid grid-flow-row gap-6 px-6 lg:px-16 " id="search">
      <Title>
        <LocalizedText textKey="Pesquisa e desenvolvimento" colored/>   
      </Title>
      <Slider withNavigation={!isMobile()}>
        {topics.map((topic, index) => (
          <SwiperSlide key={index} className="home-researches-content">
            <div
              className="grid items-center justify-center px-8 pb-8 sm:pb-16"
              dangerouslySetInnerHTML={{ __html: topic.Texto }}
            ></div>
            {topic.Imagens && (
              <>
                <div className="mx-auto flex w-1/2 flex-wrap justify-center ">
                  {topic.Imagens.map((src) => (
                    <img
                      src={src}
                      alt
                      className="aspect-square w-full sm:w-1/2"
                    />
                  ))}
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Searches;
