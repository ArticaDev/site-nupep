// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import isMobile from "../utils/isMobile";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default ({
  sliderPerView = 1,
  withNavigation = true,
  withPagination = true,
  autoplay = false,
  children,
}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={sliderPerView}
      navigation={(isMobile() ? false : true) && withNavigation}
      className="w-full"
      loop
      autoplay={autoplay}
      pagination={{ clickable: true } && withPagination}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  );
};
