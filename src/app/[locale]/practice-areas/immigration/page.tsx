import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import ImmigrationPathways from '@/components/ImmigrationPathways';
import ImmigrationServices from '@/components/ImmigrationServices';

const ImmigrationPage = () => {
  const t = useTranslations('Immigration');

  const headerData = {
    imgUrl: '/images/services/immigration.jpg',
    imgAltText: 'immigration',
    title: t('title'),
    subTitle: t('subTitle'),
  };

  const immigrationData = {
    title: t('immigrationPathways'),
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PracticeAreaHeader {...headerData} />
      <ImmigrationPathways />
      <ImmigrationServices />
    </div>
  );
};

export default ImmigrationPage;
