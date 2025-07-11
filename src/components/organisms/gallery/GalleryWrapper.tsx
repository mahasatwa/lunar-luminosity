// src/components/organisms/gallery/GalleryWrapper.tsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Image {
  src: string;
  alt: string;
  thumbnail: string;
}

interface GalleryWrapperProps {
  images: Image[];
}

const GalleryWrapper: React.FC<GalleryWrapperProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="b-gallery__figures">
        {images.map((image, index) => (
          <figure
            key={index}
            className={`b-gallery__figure b-gallery__figure--${index + 1}`}
            onClick={() => openModal(index)}
            style={{ cursor: 'pointer' }}
          >
            <img src={image.thumbnail} alt={image.alt} className="b-gallery__figure-img" />
          </figure>
        ))}
      </div>

      {isOpen && (
        <div className="c-dialog__overlay a11y-dialog--open" onClick={closeModal}>
          <button className="c-dialog__close-button" aria-label="Close dialog" onClick={closeModal}></button>
          <div className="c-dialog__overlay-inner" onClick={(e) => e.stopPropagation()}>
            <div className="c-dialog__content-wrapper">
              <div className="c-dialog__content-inner">
                <div className="c-dialog">
                  <Swiper
                    modules={[Navigation, A11y]}
                    initialSlide={activeIndex}
                    navigation
                    loop
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <figure className="b-gallery__slide-figure">
                          <img src={image.src} alt={image.alt} />
                        </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryWrapper;
