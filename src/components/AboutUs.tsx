import React from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('AboutUs');

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4 text-center">
          {t('title')}
        </h1>
        <div className="mx-auto w-16 h-1 bg-orange-500 rounded-full mb-8" />
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          {t('subTitle')}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          {t('ourStoryTitle')}
        </h2>
        <p className="text-gray-700 mb-4">{t('ourStoryText1')}</p>
        <p className="text-gray-700">{t('ourStoryText2')}</p>
      </section>

      <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
        <img
          src="/images/professionals/tonywong_profile.jpg"
          alt="Tony W. Wong, Esq."
          className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-orange-500"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Tony W. Wong, Esq.
          </h2>
          <p className="text-gray-700 mb-2">{t('aboutTonyText1')}</p>
          <p className="text-gray-700">{t('aboutTonyText2')}</p>
        </div>
      </section>

      <section className="mb-12 flex justify-center">
        <Link
          href="/professionals"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-orange-600 transition"
        >
          {t('meetOurTeamBtn')}
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
