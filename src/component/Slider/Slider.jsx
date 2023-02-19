import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderProducts } from "../../data/products";
const Slider = () => {
  return (
    <div className="s_container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        // loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={`${i}a`}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} className="img-p" alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
