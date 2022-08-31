import Title from "./Title";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import isMobile from "../utils/isMobile";
import logoPGM from "../assets/Logo_PGM.png";
import logoECONOVA from "../assets/Logo_ECONOVA_2013.jpg";
import logoIMASTEL from "../assets/Logo_IMASTEL.png";

const Partners = () => {
  const partnerImgs = [logoECONOVA, logoPGM, logoIMASTEL];
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
              <a className="grid cursor-pointer items-center justify-center">
                <img
                  src={partnerImg}
                  alt="partner"
                  key={index}
                  className="max-h-40 w-96"
                />
              </a>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
