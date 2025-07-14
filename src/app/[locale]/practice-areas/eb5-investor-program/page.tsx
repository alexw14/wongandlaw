import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import PracticeAreaOverview from '@/components/PracticeAreaOverview';
import PracticeAreaKeyBenefits from '@/components/PracticeAreaKeyBenefits';
import PracticeAreaBasicRequirements from '@/components/PracticeAreaBasicRequirements';
import PracticeAreaProcess from '@/components/PracticeAreaProcess';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import PracticeAreaContactUs from '@/components/PracticeAreaContactUs';

const EB5InvestorProgramPage = () => {
  const t = useTranslations('EB5InvestorProgram');

  const headerData = {
    imgUrl: '/images/services/eb5.jpg',
    imgAltText: 'EB-5 Investor Program',
    title: t('title'),
    subTitle: t('subTitle'),
  };

  const overviewData = {
    overviewTitle: t('overviewTitle'),
    overviewText: t('overviewText'),
    aboutHeaderText: t('aboutHeaderText'),
    aboutText: t('aboutText'),
  };

  const keyBenefits = {
    title: t('keyBenefitsTitle'),
    benefits: [
      { title: t('benefitGreenCard') },
      { title: t('benefitNoSponsorship') },
      { title: t('benefitFreedom') },
      { title: t('benefitCitizenship') },
    ],
  };

  const basicRequirements = {
    title: t('basicRequirementsTitle'),
    requirements: [
      {
        title: t('investmentAmountTitle'),
        content: t('investmentAmountContent'),
        highlightDollarValues: true,
      },
      {
        title: t('sourceOfFundsTitle'),
        content: t('sourceOfFundsContent'),
        highlightDollarValues: true,
      },
      {
        title: t('jobCreationTitle'),
        content: t('jobCreationContent'),
        highlightDollarValues: true,
      },
      {
        title: t('atRiskInvestmentTitle'),
        content: t('atRiskInvestmentContent'),
        highlightDollarValues: true,
      },
    ],
  };

  const processSteps = {
    title: t('processStepsTitle'),
    steps: [
      {
        key: 'step1',
        label: t('step1Label'),
        description: t('step1Description'),
      },
      {
        key: 'step2',
        label: t('step2Label'),
        description: t('step2Description'),
      },
      {
        key: 'step3',
        label: t('step3Label'),
        description: t('step3Description'),
      },
      {
        key: 'step4',
        label: t('step4Label'),
        description: t('step4Description'),
      },
      {
        key: 'step5',
        label: t('step5Label'),
        description: t('step5Description'),
      },
      {
        key: 'step6',
        label: t('step6Label'),
        description: t('step6Description'),
      },
      {
        key: 'step7',
        label: t('step7Label'),
        description: t('step7Description'),
      },
    ],
  };

  const questions = [
    {
      key: 'q1',
      question: 'How long does the EB-5 process take?',
      answer:
        'Processing times vary, but the initial petition can take 1-2 years. The full process to permanent residency may take several years depending on individual circumstances.',
    },
    {
      key: 'q2',
      question: 'Can my family members get green cards too?',
      answer:
        'Yes, your spouse and unmarried children under 21 can be included in your EB-5 application.',
    },
    {
      key: 'q3',
      question: 'Do I have to manage the business myself?',
      answer:
        'No, you do not need to be involved in day-to-day management, but you must be involved in policy formation or as a limited partner.',
    },
  ];
  const contactUsData = {
    title: 'Ready to Start Your EB-5 Journey?',
    content:
      'Contact our experienced team for a confidential consultation and personalized guidance.',
    buttonText: 'Contact Us',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PracticeAreaHeader {...headerData} />
      <PracticeAreaOverview {...overviewData} />
      <PracticeAreaKeyBenefits {...keyBenefits} />
      <PracticeAreaBasicRequirements {...basicRequirements} />
      <PracticeAreaProcess {...processSteps} />
      <FrequentlyAskedQuestions questions={questions} />
      <PracticeAreaContactUs {...contactUsData} />
    </div>
  );
};

export default EB5InvestorProgramPage;
