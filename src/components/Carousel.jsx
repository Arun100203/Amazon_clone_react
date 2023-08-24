import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={"../images/beauty.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/games.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide >
        <img src={"../images/toys.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/kicthen.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/school.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/alexa.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/blackbussiness.jpg"} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
