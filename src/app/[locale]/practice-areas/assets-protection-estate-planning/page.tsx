import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import PracticeAreaOverview from '@/components/PracticeAreaOverview';
import PlanningStrategySection from '@/components/PlanningStrategySection';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import PracticeAreaContactUs from '@/components/PracticeAreaContactUs';

const AssetsProtectionEstatePlanningPage = () => {
  const t = useTranslations('AssetsProtectionEstatePlanning');

  const headerData = {
    imgUrl: '/images/services/estate-planning.jpg',
    imgAltText: 'asset protection and estate planning',
    title: t('title'),
    subTitle: t('subTitle'),
  };

  const overviewData = {
    overviewTitle: t('overviewTitle'),
    overviewText: t('overviewText'),
    aboutHeaderText: t('aboutHeaderText'),
    aboutText: t('aboutText'),
  };

  const planningGroups = [
    {
      title: t('assetProtectionGroupTitle'),
      description: t('assetProtectionGroupDescription'),
      items: [
        { title: t('ap1Title'), description: t('ap1Description') },
        { title: t('ap2Title'), description: t('ap2Description') },
        { title: t('ap3Title'), description: t('ap3Description') },
        { title: t('ap4Title'), description: t('ap4Description') },
        { title: t('ap5Title'), description: t('ap5Description') },
        { title: t('ap6Title'), description: t('ap6Description') },
        { title: t('ap7Title'), description: t('ap7Description') },
        { title: t('ap8Title'), description: t('ap8Description') },
        { title: t('ap9Title'), description: t('ap9Description') },
      ],
    },
    {
      title: t('estatePlanningGroupTitle'),
      description: t('estatePlanningGroupDescription'),
      items: [
        { title: t('ep1Title'), description: t('ep1Description') },
        { title: t('ep2Title'), description: t('ep2Description') },
        { title: t('ep3Title'), description: t('ep3Description') },
        { title: t('ep4Title'), description: t('ep4Description') },
        { title: t('ep5Title'), description: t('ep5Description') },
        { title: t('ep6Title'), description: t('ep6Description') },
        { title: t('ep7Title'), description: t('ep7Description') },
        { title: t('ep8Title'), description: t('ep8Description') },
      ],
    },
  ];

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
      <PracticeAreaOverview {...overviewData} />
      <PlanningStrategySection
        title={t('planningStrategiesTitle')}
        groups={planningGroups}
      />
      <FrequentlyAskedQuestions {...frequentlyAskedQuestions} />
      <PracticeAreaContactUs {...contactUsData} />
    </div>
  );
};

export default AssetsProtectionEstatePlanningPage;