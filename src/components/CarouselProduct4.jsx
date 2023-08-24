import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct4 = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Popular Gifts in Baby</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 16 }, (k, i) => (
          <SwiperSlide key={i}>
           
            <div className="m-2">
              <img
                src={`../images/baby${i}.jpg`}
                alt="Carousel product"
              />
              </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct4;
