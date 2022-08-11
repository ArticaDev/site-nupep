// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperImageWithTitle from "./SwiperImageWithTitle";

export default () => {
  const isMobile = window.innerWidth < 768;

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
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={isMobile ? false : true}
      className="max-w-screen"
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <SwiperImageWithTitle src={project.src} title={project.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
