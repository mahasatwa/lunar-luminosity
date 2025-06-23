/**
 * Logo: Responsive, animated logo for the header (Dwimulya branding, Indonesian).
 */
import React from 'react';
import { LOGO_URL, WORDMARK_URL } from '@/assets/brand';

const Logo: React.FC<{ shrunk: boolean }> = ({ shrunk }) => (
  <a href="/" className="flex items-center transition-all duration-300 ease-in-out min-w-0" aria-label="Beranda">
    {!shrunk && (
      <img
        src={LOGO_URL}
        alt="Logo STIE Dwimulya"
        className="h-10 w-auto md:h-12 transition-all duration-300 shrink-0"
        width={48}
        height={48}
      />
    )}
    {WORDMARK_URL ? (
      <img
        src={WORDMARK_URL}
        alt="Wordmark STIE Dwimulya"
        className={`ml-2 h-8 md:h-10 w-auto transition-all duration-300 ${shrunk ? '' : ''}`}
        width={180}
        height={48}
        style={{ minWidth: 0, maxWidth: '100%' }}
      />
    ) : (
      <span className={`ml-2 font-bold text-lg transition-all duration-300 truncate ${shrunk ? 'text-base' : 'text-xl'}`}>STIE Dwimulya</span>
    )}
  </a>
);

export default Logo;
