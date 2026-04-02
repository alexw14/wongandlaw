import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import PracticeAreaOverview from '@/components/PracticeAreaOverview';
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
      <FrequentlyAskedQuestions {...frequentlyAskedQuestions} />
      <PracticeAreaContactUs {...contactUsData} />
    </div>
  );
};

export default AssetsProtectionEstatePlanningPage;