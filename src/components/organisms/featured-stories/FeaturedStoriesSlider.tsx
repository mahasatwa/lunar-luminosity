// src/components/organisms/featured-stories/FeaturedStoriesSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Slide {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt?: string;
  ctaLabel: string;
  ctaUrl: string;
}

interface FeaturedStoriesSliderProps {
  slides: Slide[];
}

const FeaturedStoriesSlider: React.FC<FeaturedStoriesSliderProps> = ({ slides }) => {
  return (
    <div className="c-slider c-slider--carousel-pull-right">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="b-featured-stories__wrapper">
              <div className="b-featured-stories__img">
                <img src={slide.imageUrl} alt={slide.imageAlt || slide.title} />
              </div>
              <div className="b-featured-stories__slide-content">
                <h3 className="b-featured-stories__slide-title">{slide.title}</h3>
                <p>{slide.content}</p>
                <div className="b-featured-stories__slide-cta">
                  <a href={slide.ctaUrl} className="a-btn a-btn-secondary">
                    <span className="a-btn__text">{slide.ctaLabel}</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="c-slider__arrows">
        <button className="c-slider__button swiper-button-prev" aria-label="Previous slide"></button>
        <button className="c-slider__button swiper-button-next" aria-label="Next slide"></button>
      </div>
    </div>
  );
};

export default FeaturedStoriesSlider;
