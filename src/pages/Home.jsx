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
import axios from "axios";
const CMS_URL = import.meta.env.VITE_NUPEP_CMS_DOMAIN;

function Home() {
  const [highlights, setHighlights] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const formatHighlightsData = (raw_data) => {
    const higlights_data = raw_data.data.map((data) => data.attributes);
    higlights_data.forEach((highlight) => {
      if (highlight.Imagem) {
        const url = highlight.Imagem.data?.attributes?.url;
        highlight.thumbnail = url;
      }
    });
    return higlights_data;
  };

  const getHighlights = async () => {
    const result = await axios.get(`${CMS_URL}/highlights?populate=*`);
    if (result) {
      setHighlights(formatHighlightsData(result.data));
    }
  };

  useEffect(() => {
    getHighlights().then(() => setIsLoaded(true));
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <Slider autoplay>
        {highlights
          .sort(
            (first, second) =>
              new Date(first.createdAt).valueOf() -
              new Date(second.createdAt).valueOf()
          )
          .map((highlight, index) => (
            <SwiperSlide key={index}>
              <a href={highlight.Link}>
                <SwiperImageWithTitle
                  src={highlight.thumbnail}
                  title={highlight.Titulo}
                />
              </a>
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
