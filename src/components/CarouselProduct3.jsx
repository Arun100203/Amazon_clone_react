import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct3 = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers in Computers & Accessories</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 18 }, (k, i) => (
          <SwiperSlide key={i}>
           
            <div className="m-2">
              <img
                src={`../images/gadget${i}.jpg`}
                alt="Carousel product"
              />
              </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct3;
