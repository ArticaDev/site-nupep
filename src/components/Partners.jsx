import Title from "./Title";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import isMobile from "../utils/isMobile";
import { useState, useEffect } from "react";
import Api from "../services/Api";
import LocalizedText from "./LocalizedText";

const Partners = () => {
  const [partners, setPartners] = useState([]);

  const formatPartners = (raw_data) => {
    const partners_content = raw_data.data.map((data) => data.attributes);
    partners_content.forEach((partner) => {
      if (partner.Logo) {
        const url = partner.Logo.data.attributes.url;
        partner.Logo = url;
      }
    });
    return partners_content;
  };

  const getPartners = async () => {
    const result = await Api.get(`/partners?populate=*`);
    if (result) {
      setPartners(formatPartners(result.data));
    }
  };

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <div className="grid grid-flow-row gap-14 px-6 lg:px-16">
      <Title>
       <LocalizedText textKey="Nossos parceiros" colored/>
      </Title>
      <div className="col-span-3 grid grid-flow-col justify-around gap-11 lg:px-40">
        {partners.length >= 1 && (
          <Slider
            sliderPerView={isMobile() ? 1 : 3}
            withNavigation={false}
            withPagination={false}
            autoplay
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <a
                  className="grid cursor-pointer items-center justify-center"
                  href={partner.Link}
                >
                  <img
                    src={partner.Logo}
                    alt="partner"
                    key={index}
                    className="max-h-40 w-96"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Partners;
