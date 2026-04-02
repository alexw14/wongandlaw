import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import PracticeAreaOverview from '@/components/PracticeAreaOverview';
import BenefitCard from '@/components/BenefitCard';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import PracticeAreaContactUs from '@/components/PracticeAreaContactUs';

const BusinessEntitiesCorporateGovernancePage = () => {
  const t = useTranslations('BusinessEntitiesCorporateGovernance');

  const headerData = {
    imgUrl: '/images/services/business-entities.jpg',
    imgAltText: 'business-entities',
    title: t('title'),
    subTitle: t('subTitle'),
  };

  const overviewData = {
    overviewTitle: t('overviewTitle'),
    overviewText: t('overviewText'),
    aboutHeaderText: t('aboutHeaderText'),
    aboutText: t('aboutText'),
  };

  const benefitData = [
    { title: t('entitySelectionTitle'), description: t('entitySelectionDescription') },
    { title: t('registrationTitle'), description: t('registrationDescription') },
    { title: t('agreementDraftingTitle'), description: t('agreementDraftingDescription') },
    { title: t('governanceSupportTitle'), description: t('governanceSupportDescription') }
  ];

  const contactUsData = {
    title: t('contactUsTitle'),
    content: t('contactUsContent'),
    buttonText: t('contactUsButtonText'),
  };

  const renderBenefitCard = () => {
    return benefitData.map((b, i) => {
      return <BenefitCard key={i} title={b.title} description={b.description} />
    })
  }

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

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <PracticeAreaHeader {...headerData} />
      <PracticeAreaOverview {...overviewData} />
      <section className="mb-10">
        {renderBenefitCard()}
      </section>
      <FrequentlyAskedQuestions {...frequentlyAskedQuestions} />
      <PracticeAreaContactUs {...contactUsData} />
    </div>
  );
};

export default BusinessEntitiesCorporateGovernancePage;