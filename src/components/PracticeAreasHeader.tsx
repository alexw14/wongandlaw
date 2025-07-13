import React from 'react';
import { useTranslations } from 'next-intl';

const PracticeAreasHeader: React.FC = () => {
  const t = useTranslations('PracticeAreasHeader');

  return (
    <div className="mb-12 text-center pt-12 sm:pt-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#FF8426] drop-shadow-sm tracking-tight">
        {t('title')}
      </h1>
      <div className="mx-auto max-w-3xl">
        <p className="text-lg sm:text-xl text-gray-700">
          {t('description')}
          <br className="hidden sm:block" />
          <span className="block mt-2">{t('instructionalText')}</span>
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        <span className="inline-block w-24 h-1 rounded bg-[#FF8426] opacity-80" />
      </div>
    </div>
  );
};

export default PracticeAreasHeader;
