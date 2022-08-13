import React from "react";
import Title from "./Title";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import isMobile from "../utils/isMobile";

const Partners = () => {
  const partnerImgs = [
    "http://www.nupep.feelt.ufu.br/sites/nupep.feelt.ufu.br/files/imagens/Logo_ECONOVA_2013.jpg",
    "http://www.nupep.feelt.ufu.br/sites/nupep.feelt.ufu.br/files/imagens/Logo_PGM.png",
    "http://www.imastel.com.br/imgs/open.png",
  ];
  return (
    <div className="grid grid-flow-row gap-14 px-6 lg:px-16">
      <Title>
        Nossos <span className="text-blue">parceiros</span>{" "}
      </Title>
      <div className="col-span-3 grid grid-flow-col justify-around gap-11 lg:px-40">
        <Slider
          sliderPerView={isMobile() ? 1 : 3}
          autoplay
          withNavigation={false}
          withPagination={false}
        >
          {partnerImgs.map((partnerImg, index) => (
            <SwiperSlide key={index}>
              <img
                src={partnerImg}
                alt="partner"
                key={index}
                className="max-h-40 min-w-full"
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
