import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import ImmigrationPathways from '@/components/ImmigrationPathways';
import ImmigrationServices from '@/components/ImmigrationServices';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import PracticeAreaContactUs from '@/components/PracticeAreaContactUs';

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
          key: 'immediateRelatives',
          title: t('immediateRelatives'),
          description: t('immediateRelativesDescription'),
          badgeText: t('immediateRelativesBadgeText'),
        },
        {
          key: 'familyPreference',
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
        { key: 'eb1', title: 'EB-1', description: t('eb1Description') },
        { key: 'eb2', title: 'EB-2', description: t('eb2Description') },
        { key: 'eb3', title: 'EB-3', description: t('eb3Description') },
        { key: 'eb4', title: 'EB-4', description: t('eb4Description') },
        { key: 'eb5', title: 'EB-5', description: t('eb5Description') },
      ],
    },
  };

  const immigrationServicesData = {
    title: t('ourImmigrationServicesTitle'),
    items: [
      {
        key: 'familyBased',
        title: t('service1Title'),
        description: t('service1Description'),
      },
      {
        key: 'employmentBased',
        title: t('service2Title'),
        description: t('service2Description'),
      },
      {
        key: 'strategies',
        title: t('service3Title'),
        description: t('service3Description'),
      },
      {
        key: 'eb5',
        title: t('service4Title'),
        description: t('service4Description'),
      },
      {
        key: 'adjustmentOfStatus',
        title: t('service5Title'),
        description: t('service5Description'),
      },
      {
        key: 'consular',
        title: t('service6Title'),
        description: t('service6Description'),
      },
      {
        key: 'nonImmigrant',
        title: t('service7Title'),
        description: t('service7Description'),
      },
      {
        key: 'student',
        title: t('service8Title'),
        description: t('service8Description'),
      },
    ],
  };

  const frequentlyAskedQuestions = {
    title: t('FAQTitle'),
    questions: [
      {
        key: 'q1',
        question: t('question1'),
        answer: t('answer1'),
      },
      {
        key: 'q2',
        question: t('question2'),
        answer: t('answer2'),
      },
      {
        key: 'q3',
        question: t('question3'),
        answer: t('answer3'),
      },
    ],
  };

  const contactUsData = {
    title: t('contactUsTitle'),
    content: t('contactUsContent'),
    buttonText: t('contactUsButtonText'),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <PracticeAreaHeader {...headerData} />
      <ImmigrationPathways {...immigrationData} />
      <ImmigrationServices {...immigrationServicesData} />
      <FrequentlyAskedQuestions {...frequentlyAskedQuestions} />
      <PracticeAreaContactUs {...contactUsData}/>
    </div>
  );
};

export default ImmigrationPage;
