import React from "react";

// 1. Mengimpor fungsi dari file cloudinary.ts Anda, BUKAN dari library eksternal
import { getOptimizedImageUrl, getSrcSet } from "../utils/cloudinary";

interface ResponsiveImageProps {
  publicId: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  publicId,
  width,
  height,
  alt,
  className,
}) => {
  // 2. Panggil fungsi 'getOptimizedImageUrl' yang Anda buat untuk mendapatkan URL utama (src)
  const imageUrl = getOptimizedImageUrl(publicId, {
    width,
    height,
    crop: "fit",
  });

  // 3. Panggil fungsi 'getSrcSet' yang Anda buat untuk mendapatkan srcset
  const srcSetValue = getSrcSet(publicId);

  return (
    <img
      src={imageUrl}
      srcSet={srcSetValue}
      sizes="(max-width: 640px) 100vw, 640px" // Beri tahu browser ukuran gambar
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default ResponsiveImage;
