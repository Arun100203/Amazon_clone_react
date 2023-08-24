import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Frequently Repurchased in Drugstore</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 13 }, (k, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
            <div className="m-2">
              <img
                src={`../images/drug${i}.jpg`}
                alt="Carousel product"
              />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
