import React from 'react';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const HeroSection: React.FC = () => {
  const t = useTranslations('HeroSection');
  return (
    <motion.section
      className="relative min-h-[480px] h-[680px] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero-section-bg.jpg')" }}
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          {t('mainTitleTop')}
          <br className="hidden sm:block" />
          {t('mainTitleBottom')}
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mb-8 drop-shadow">
          {t('subTitle')}
        </p>
        <Link
          href="/practice-areas"
          className="bg-[#FF8426] hover:bg-[#e6731f] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto cursor-pointer text-center"
        >
          {t('buttonText')}
        </Link>
      </div>
    </motion.section>
  );
};

export default HeroSection;
