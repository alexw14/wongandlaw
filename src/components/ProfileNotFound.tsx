import React from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const ProfileNotFound: React.FC = () => {
  const t = useTranslations('ProfileNotFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] py-16">
      <div className="text-6xl mb-4 text-orange-500">😕</div>
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{t('title')}</h2>
      <p className="text-gray-600 text-center mb-6 max-w-md">{t('content')}</p>
      <Link
        href="/professionals"
        className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
      >
        {t('btnText')}
      </Link>
    </div>
  );
};

export default ProfileNotFound;
