import Layout from "../components/Layout";
import Slider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import Searches from "../components/Searches";
import { SwiperSlide } from "swiper/react";
import SwiperImageWithTitle from "../components/SwiperImageWithTitle";
import Partners from "../components/Partners";

function Home() {
  const projects = [
    {
      src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Titulo de projeto 1",
    },
    {
      src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Titulo de projeto 2",
    },
    {
      src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Titulo de projeto 3",
    },
    {
      src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Titulo de projeto 4",
    },
  ];

  return (
    <Layout>
      <Slider>
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <SwiperImageWithTitle src={project.src} title={project.title} />
          </SwiperSlide>
        ))}
      </Slider>
      <div className="mt-8 grid min-h-fit gap-28">
        <AboutUs />
        <Searches />
        <Partners />
      </div>
    </Layout>
  );
}

export default Home;
