import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import PracticeAreaOverview from '@/components/PracticeAreaOverview';
import IPConsiderationsSection from '@/components/IPConsiderationsSection';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import PracticeAreaContactUs from '@/components/PracticeAreaContactUs';

const ECommerceIntellectualPropertyPage = () => {
  const t = useTranslations('ECommerceIntellectualProperty');

  const headerData = {
    imgUrl: '/images/services/ecommerce-ip.jpg',
    imgAltText: 'e-commerce intellectual property',
    title: t('title'),
    subTitle: t('subTitle'),
  };

  const overviewData = {
    overviewTitle: t('overviewTitle'),
    overviewText: t('overviewText'),
    aboutHeaderText: t('aboutHeaderText'),
    aboutText: t('aboutText'),
  };

  const considerationsData = [
    {
      groupTitle: t('ecommerceConsiderationsTitle'),
      items: [
        { number: 1, title: t('ec1Title'), description: t('ec1Description') },
        { number: 2, title: t('ec2Title'), description: t('ec2Description') },
        { number: 3, title: t('ec3Title'), description: t('ec3Description') },
        { number: 4, title: t('ec4Title'), description: t('ec4Description') },
        { number: 5, title: t('ec5Title'), description: t('ec5Description') },
        { number: 6, title: t('ec6Title'), description: t('ec6Description') },
      ],
    },
    {
      groupTitle: t('ipLegalMattersTitle'),
      items: [
        { number: 1, title: t('ip1Title'), description: t('ip1Description') },
        { number: 2, title: t('ip2Title'), description: t('ip2Description') },
        { number: 3, title: t('ip3Title'), description: t('ip3Description') },
        { number: 4, title: t('ip4Title'), description: t('ip4Description') },
        { number: 5, title: t('ip5Title'), description: t('ip5Description') },
        { number: 6, title: t('ip6Title'), description: t('ip6Description') },
        { number: 7, title: t('ip7Title'), description: t('ip7Description') },
        { number: 8, title: t('ip8Title'), description: t('ip8Description') },
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
      <IPConsiderationsSection groups={considerationsData} />
      <FrequentlyAskedQuestions {...frequentlyAskedQuestions} />
      <PracticeAreaContactUs {...contactUsData} />
    </div>
  );
};

export default ECommerceIntellectualPropertyPage;