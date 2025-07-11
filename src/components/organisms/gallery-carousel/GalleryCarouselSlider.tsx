// src/components/organisms/gallery-carousel/GalleryCarouselSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryCarouselSliderProps {
  slides: Slide[];
}

const GalleryCarouselSlider: React.FC<GalleryCarouselSliderProps> = ({ slides }) => {
  return (
    <div className="c-slider">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={'auto'}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <figure className="b-gallery-carousel__slide-figure">
              <img src={slide.src} alt={slide.alt} className="b-gallery-carousel__slide-image" />
              {slide.caption && (
                <figcaption className="c-slide-caption">
                  {slide.caption}
                </figcaption>
              )}
            </figure>
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

export default GalleryCarouselSlider;
