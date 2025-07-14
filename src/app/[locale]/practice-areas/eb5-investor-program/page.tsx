import React from 'react';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import PracticeAreaOverview from '@/components/PracticeAreaOverview';
import PracticeAreaKeyBenefits from '@/components/PracticeAreaKeyBenefits';
import PracticeAreaBasicRequirements from '@/components/PracticeAreaBasicRequirements';
import PracticeAreaProcess from '@/components/PracticeAreaProcess';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import PracticeAreaContactUs from '@/components/PracticeAreaContactUs';

const EB5InvestorProgramPage = () => {
  const headerData = {
    imgUrl: '/images/services/eb5.jpg',
    imgAltText: 'EB-5 Investor Program',
    title: 'EB-5 Investor Program',
    subTitle:
      'A pathway to U.S. permanent residency through investment and job creation.',
  };

  const overviewData = {
    overviewText:
      'The EB-5 Investor Program allows eligible investors and their families to obtain U.S. green cards by investing in American businesses that create jobs. Our firm guides you through every step, from investment selection to application and approval.',
    aboutHeaderText: 'About the EB-5 Program',
    aboutText:
      'The EB-5 Immigrant Investor Program is a U.S. immigrant visa program that provides a path to lawful permanent residency (green card) for foreign nationals who make a qualifying investment in a new commercial enterprise (NCE) that creates the required number of jobs. In 2022, Congress passed the EB-5 Reform and Integrity Act of 2022 (RIA), a holistic reform of the EB-5 program, which became effective on March 15, 2022.',
  };

  const keyBenefits = [
    {
      key: 'pathway',
      title: 'Pathway to U.S. Green Card for you and your family',
    },
    {
      key: 'noSponsorship',
      title: 'No sponsorship required from an employer or family member',
    },
    {
      key: 'freedom',
      title: 'Freedom to live, work, and study anywhere in the U.S.',
    },
    {
      key: 'citizenship',
      title: 'Potential for U.S. citizenship after five years',
    },
  ];

  const basicRequirements = [
    {
      title: 'Investment Amount',
      content:
        'The EB-5 program requires a minimum investment of $800,000 in a Targeted Employment Area (TEA) or an infrastructure project (a new category under RIA). For other areas, the minimum is $1,050,000. Under RIA, these minimum amounts will be adjusted for inflation every five years.',
      highlightDollarValues: true,
    },
    {
      title: 'Lawful Source of Funds',
      content:
        'EB-5 investors must provide sufficient documentation in their I-526/I-526E petition to demonstrate that the minimum investment funds, plus any administrative fees paid to a regional center, have been obtained or earned through lawful means. Lawful source of funds is combined with lawful path of funds, which means investors must provide documentation showing how the funds were transferred to the NCE in the U.S.',
      highlightDollarValues: true,
    },
    {
      title: 'Job Creation',
      content:
        'Each investor must create at least 10 full-time jobs for qualifying U.S. workers within two years of becoming a conditional permanent resident. For regional center projects, jobs can be created through indirect or induced means (e.g., jobs calculated by construction costs using RIMS II or IMPLAN). For direct standalone investments, jobs must be created through direct employment (W-2 employees).',
      highlightDollarValues: true,
    },
    {
      title: 'At-Risk Investment',
      content:
        'To qualify, the EB-5 investor must actually place their capital at risk. The mere intent to invest is not sufficient. There must be a risk of loss and a chance of gain. Any guaranteed return, such as a promise to return a certain amount of capital, interest, or a right of ownership/use of real property, will disqualify the investment as “at risk.”',
      highlightDollarValues: true,
    },
  ];

  const processSteps = [
    {
      key: 'step1',
      label: 'Consultation and eligibility assessment',
      description: 'Meet with our team to review your goals and eligibility.',
    },
    {
      key: 'step2',
      label: 'Select investment project and conduct due diligence',
      description: 'Choose a qualifying project and review all details.',
    },
    {
      key: 'step3',
      label: 'Invest funds and file I-526 petition',
      description: 'Transfer funds and submit your application.',
    },
    {
      key: 'step4',
      label: 'USCIS review and approval',
      description: 'USCIS reviews your petition and supporting documents.',
    },
    {
      key: 'step5',
      label: 'Conditional green card issued',
      description: 'Receive your conditional green card upon approval.',
    },
    {
      key: 'step6',
      label: 'File I-829 petition to remove conditions after 2 years',
      description: 'Submit evidence of job creation and investment.',
    },
    {
      key: 'step7',
      label: 'Receive permanent green card',
      description: 'Obtain your permanent residency status.',
    },
  ];

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
      <PracticeAreaKeyBenefits benefits={keyBenefits} />
      <PracticeAreaBasicRequirements requirements={basicRequirements} />
      <PracticeAreaProcess process={processSteps} />
      <FrequentlyAskedQuestions questions={questions} />
      <PracticeAreaContactUs {...contactUsData} />
    </div>
  );
};

export default EB5InvestorProgramPage;
