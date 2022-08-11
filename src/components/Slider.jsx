// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default ({ children }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={isMobile ? false : true}
      className="w-full"
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  );
};
