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
    familyBasedImmigration: {
      title: t('familyBasedImmigration'),
      note: t('familyBasedImmigrationNote'),
      items: [
        {
          title: t('immediateRelatives'),
          description: t('immediateRelativesDescription'),
          badgeText: t('immediateRelativesBadgeText'),
        },
        {
          title: t('familyPreference'),
          description: t('familyPreferenceDescription'),
          badgeText: t('familyPreferenceBadgeText'),
        },
      ],
    },
    employmentBasedImmigration: {
      title: t('employmentBasedImmigration'),
      note: t('employmentBasedImmigrationNote'),
      items: [
        { title: 'EB-1', description: t('eb1Description') },
        { title: 'EB-2', description: t('eb2Description') },
        { title: 'EB-3', description: t('eb3Description') },
        { title: 'EB-4', description: t('eb4Description') },
        { title: 'EB-5', description: t('eb5Description') },
      ],
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PracticeAreaHeader {...headerData} />
      <ImmigrationPathways {...immigrationData} />
      <ImmigrationServices />
    </div>
  );
};

export default ImmigrationPage;
