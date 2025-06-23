// src/assets/brand.ts
import { getOptimizedImageUrl } from '../utils/cloudinary';

export const LOGO_URL = getOptimizedImageUrl('logo_wclp2c', {
  width: 64,
  height: 64,
  crop: 'fit',
});

export const WORDMARK_URL = getOptimizedImageUrl('separator_wordmark_yrjcgy', {
  height: 64,
  crop: 'fit',
});
