import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.PUBLIC_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

interface ImageOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'crop' | 'scale';
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
}

export function getOptimizedImageUrl(publicId: string, options: ImageOptions = {}): string {
  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
  } = options;

  const transformation = {
    width,
    height,
    crop,
    quality,
    format,
    fetch_format: format,
  };

  return cloudinary.url(publicId, {
    transformation: [transformation],
    secure: true,
  });
}

export function getResponsiveImageUrl(
  publicId: string,
  breakpoints: number[] = [640, 768, 1024, 1280, 1536]
): string[] {
  return breakpoints.map((width) =>
    getOptimizedImageUrl(publicId, {
      width,
      quality: 80,
      format: 'auto',
    })
  );
}

export function getSrcSet(publicId: string): string {
  const breakpoints = [640, 768, 1024, 1280, 1536];
  const urls = getResponsiveImageUrl(publicId, breakpoints);
  
  return urls
    .map((url, index) => `${url} ${breakpoints[index]}w`)
    .join(', ');
} 