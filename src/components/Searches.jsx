import Title from "./Title";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import isMobile from "../utils/isMobile";

const Searches = () => {
  const search_list = [
    "Comutação suave.",
    "Concepção e síntese de novas topologias de conversores estáticos CA-CC, CC-CC e CC-CA.",
    "Conversores Multiníveis.",
    "Estratégias de controle analógico e digital de conversores.",
    "Simulação numérica, modelagem e controle de conversores estáticos.",
    "Retificadores híbridos e suas aplicações industriais.",
    "Processamento de energia fotovoltaica, célula a combustível e eólica.",
    "Técnicas de controle para paralelismo de sistemas inversores com a rede elétrica.",
    "Retificadores com elevado fator de potência.",
    "Amplificadores de audio.",
    "Sistemas eletrônicos para iluminação.",
    "UPS (no-breaks).",
    "Filtros ativos.",
    "Correção do fator de potência de conversores estáticos.",
    "Estabilizadores de tensão alternada.",
  ];

  const sliceds_search_lists = [];
  for (let i = 0; i < search_list.length; i += 5) {
    sliceds_search_lists.push(search_list.slice(i, i + 5));
  }
  return (
    <div className="grid grid-flow-row gap-6 px-6 lg:px-16 " id="search">
      <Title>
        Pesquisa <span className="text-blue">e desenvolvimento</span>
      </Title>
      <Slider withNavigation={!isMobile()}>
        {sliceds_search_lists.map((sliced_search_list, index) => (
          <SwiperSlide key={index}>
            <div className="grid items-center justify-center px-8 pb-16">
              <ul>
                {sliced_search_list.map((search, index) => (
                  <li className="list-disc text-xl" key={index}>
                    {search}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Searches;
