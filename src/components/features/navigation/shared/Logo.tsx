// Logo: Shared logo component
import React from 'react';

const LOGO_PRIMARY = '/logo/logo_primary.svg';
const LOGO_ALT = '/logo/logo_alt.svg';
const WORDMARK_PRIMARY = '/logo/wordmark_primary.svg';
const WORDMARK_ALT = '/logo/wordmark_alt.svg';

const Logo: React.FC<{ shrunk?: boolean }> = ({ shrunk }) => {
  // Jika shrunk (header menyusut/berwarna primary), gunakan logo alt (lebih terang)
  // Jika tidak shrunk (header default/putih), gunakan logo primary (biru gelap)
  const logoSrc = shrunk ? LOGO_ALT : LOGO_PRIMARY;
  const wordmarkSrc = shrunk ? WORDMARK_ALT : WORDMARK_PRIMARY;

  return (
    <a href="/" className="flex items-center min-w-0" aria-label="Beranda">
      <img
        src={logoSrc}
        alt="Logo STIE Dwimulya"
        className={`transition-all duration-300 ${shrunk ? 'h-8 md:h-10' : 'h-10 md:h-12'} w-auto`}
        width={64}
        height={64}
      />
      <img
        src={wordmarkSrc}
        alt="Wordmark STIE Dwimulya"
        className={`ml-2 transition-all duration-300 ${shrunk ? 'h-6 md:h-8' : 'h-8 md:h-10'} w-auto max-w-xs`}
        width={180}
        height={64}
      />
    </a>
  );
};

export default Logo;
