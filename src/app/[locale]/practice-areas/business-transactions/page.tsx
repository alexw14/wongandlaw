import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import PracticeAreaOverview from '@/components/PracticeAreaOverview';
import ServicesAccordion from '@/components/ServicesAccordion';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import PracticeAreaContactUs from '@/components/PracticeAreaContactUs';

const BusinessTransactionsPage = () => {
  const t = useTranslations('BusinessTransactions');

  const headerData = {
    imgUrl: '/images/services/business-transactions.jpg',
    imgAltText: 'business transactions',
    title: t('title'),
    subTitle: t('subTitle'),
  };

  const overviewData = {
    overviewTitle: t('overviewTitle'),
    overviewText: t('overviewText'),
    aboutHeaderText: t('aboutHeaderText'),
    aboutText: t('aboutText'),
  };

  const servicesData = [
    { title: t('dueDiligenceTitle'), description: t('dueDiligenceDescription'), whyItMatters: t('dueDiligenceWhyItMatters'), whoNeedsIt: t('dueDiligenceWhoNeedsIt') },
    { title: t('preNegotiationTitle'), description: t('preNegotiationDescription'), whyItMatters: t('preNegotiationWhyItMatters'), whoNeedsIt: t('preNegotiationWhoNeedsIt') },
    { title: t('negotiationTitle'), description: t('negotiationDescription'), whyItMatters: t('negotiationWhyItMatters'), whoNeedsIt: t('negotiationWhoNeedsIt') },
    { title: t('corporateGovernanceTitle'), description: t('corporateGovernanceDescription'), whyItMatters: t('corporateGovernanceWhyItMatters'), whoNeedsIt: t('corporateGovernanceWhoNeedsIt') },
    { title: t('mergersAcquisitionsTitle'), description: t('mergersAcquisitionsDescription'), whyItMatters: t('mergersAcquisitionsWhyItMatters'), whoNeedsIt: t('mergersAcquisitionsWhoNeedsIt') },
    { title: t('buySellAgreementsTitle'), description: t('buySellAgreementsDescription'), whyItMatters: t('buySellAgreementsWhyItMatters'), whoNeedsIt: t('buySellAgreementsWhoNeedsIt') },
    { title: t('stockPurchaseTitle'), description: t('stockPurchaseDescription'), whyItMatters: t('stockPurchaseWhyItMatters'), whoNeedsIt: t('stockPurchaseWhoNeedsIt') },
    { title: t('partnershipAgreementsTitle'), description: t('partnershipAgreementsDescription'), whyItMatters: t('partnershipAgreementsWhyItMatters'), whoNeedsIt: t('partnershipAgreementsWhoNeedsIt') },
    { title: t('ipLicensingTitle'), description: t('ipLicensingDescription'), whyItMatters: t('ipLicensingWhyItMatters'), whoNeedsIt: t('ipLicensingWhoNeedsIt') },
    { title: t('tradeSecretTitle'), description: t('tradeSecretDescription'), whyItMatters: t('tradeSecretWhyItMatters'), whoNeedsIt: t('tradeSecretWhoNeedsIt') },
    { title: t('annualConsultationTitle'), description: t('annualConsultationDescription'), whyItMatters: t('annualConsultationWhyItMatters'), whoNeedsIt: t('annualConsultationWhoNeedsIt') }
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
      <ServicesAccordion title="Our Services" services={servicesData} />
      <FrequentlyAskedQuestions {...frequentlyAskedQuestions} />
      <PracticeAreaContactUs {...contactUsData} />
    </div>
  );
};

export default BusinessTransactionsPage;