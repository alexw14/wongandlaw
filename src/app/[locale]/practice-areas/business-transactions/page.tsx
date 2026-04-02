import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import PracticeAreaOverview from '@/components/PracticeAreaOverview';
import ServicesAccordion from '@/components/ServicesAccordion';

const businessTransactionsPage = () => {
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
    {
      title: 'Due Diligence',
      description:
        'Comprehensive investigation and analysis of your target company or asset. We review financial records, contracts, intellectual property, regulatory compliance, potential liabilities, and operational matters to uncover risks and opportunities before you commit.',
      whyItMatters:
        'Thorough due diligence protects you from unexpected liabilities, valuation errors, and deal-breaking issues. It provides the factual foundation for informed negotiation and can save millions by identifying problems before closing.',
      whoNeedsIt:
        'Business buyers, investors, lenders, and companies considering mergers or acquisitions. Essential for any significant business transaction or investment decision.',
    },
    {
      title: 'Pre-Negotiation Consultation and Strategies',
      description:
        'Strategic planning sessions to define your objectives, assess leverage points, identify potential deal structures, and develop negotiation tactics. We help you understand your position, anticipate counterparty responses, and establish clear boundaries before entering discussions.',
      whyItMatters:
        'Preparation determines negotiation outcomes. A well-crafted strategy helps you secure favorable terms, avoid common pitfalls, and maintain control throughout the process. Knowing your walk-away point prevents costly mistakes driven by emotion.',
      whoNeedsIt:
        'Any party entering complex business negotiations, including acquisitions, partnerships, major contracts, or dispute resolutions where significant value is at stake.',
    },
    {
      title: 'Negotiation',
      description:
        'Direct representation and advocacy during business negotiations. Our attorneys lead or support discussions on your behalf, addressing deal terms, price, warranties, indemnities, closing conditions, and dispute resolution mechanisms while protecting your interests.',
      whyItMatters:
        'Skilled legal representation ensures your business interests are protected while maintaining productive relationships. We balance assertiveness with pragmatism to achieve optimal outcomes without jeopardizing the deal or future business relationships.',
      whoNeedsIt:
        'Companies and individuals negotiating high-stakes transactions, complex contracts, or situations where legal expertise and objective perspective add significant value to the outcome.',
    },
    {
      title: 'Corporate Governance',
      description:
        'Ongoing advisory services for board structure, director duties, shareholder rights, corporate policies, meeting procedures, voting mechanisms, and compliance with corporate formalities. We draft bylaws, operating agreements, and governance policies tailored to your business.',
      whyItMatters:
        'Proper governance protects against internal disputes, personal liability, and legal challenges. It establishes clear decision-making authority, protects minority interests, and demonstrates professionalism to investors, lenders, and partners.',
      whoNeedsIt:
        'Corporations, LLCs, and partnerships seeking to establish or improve governance structures, especially growing companies, those with multiple owners, or businesses preparing for investment or sale.',
    },
    {
      title: 'Merger & Acquisition',
      description:
        'Full-service M&A representation from deal structuring through closing. We handle negotiations, due diligence coordination, regulatory filings, purchase agreements, asset or stock transfers, financing arrangements, employee matters, and post-closing integration support.',
      whyItMatters:
        'M&A transactions involve complex legal, financial, and operational considerations with significant risk. Expert guidance ensures deal structure optimization for tax and liability purposes, regulatory compliance, and protection against post-closing disputes.',
      whoNeedsIt:
        'Companies buying or selling businesses, private equity firms, strategic buyers, and business owners planning exits or growth through acquisition.',
    },
    {
      title: 'Buy-Sell & Non-Competition Agreements',
      description:
        'Drafting and negotiation of shareholder or member buy-sell agreements that govern ownership transfers, valuation methods, triggering events, and purchase obligations. We also craft enforceable non-competition and non-solicitation agreements to protect business interests.',
      whyItMatters:
        'These agreements prevent costly disputes when owners leave, retire, or divorce. They ensure orderly transitions, protect company value, and maintain business continuity. Well-drafted non-compete clauses protect against unfair competition from former partners or employees.',
      whoNeedsIt:
        'Multi-owner businesses, professional partnerships, and companies with key employees or executives who have access to confidential information, client relationships, or trade secrets.',
    },
    {
      title: 'Stock or LLC Interest Purchase Agreements',
      description:
        'Preparation and negotiation of comprehensive agreements for the purchase and sale of company ownership interests. We address purchase price, payment terms, representations and warranties, indemnification, closing conditions, escrows, and earn-out provisions.',
      whyItMatters:
        'These agreements define the rights and obligations of all parties, allocate risk, and provide remedies for breaches. Proper documentation prevents misunderstandings and protects both buyers and sellers from future disputes and unexpected liabilities.',
      whoNeedsIt:
        'Buyers and sellers of business ownership interests, whether acquiring control, minority stakes, or exiting partial ownership positions in corporations or LLCs.',
    },
    {
      title: 'Partnership Agreements',
      description:
        'Customized partnership agreements and LLC operating agreements that define ownership percentages, capital contributions, profit and loss allocation, management authority, decision-making processes, dispute resolution, and exit procedures for business partners.',
      whyItMatters:
        'Clear partnership terms prevent conflicts, protect investments, and ensure business continuity. A well-drafted agreement addresses the inevitable challenges of multi-party ownership and provides mechanisms for resolving disagreements without destroying the business.',
      whoNeedsIt:
        'New business ventures with multiple owners, existing partnerships formalizing their relationship, and businesses experiencing partner disagreements due to inadequate or outdated agreements.',
    },
    {
      title: 'Licensing & Assignment of Intellectual Property',
      description:
        'Negotiation and drafting of IP license agreements, assignments, and transfers covering patents, trademarks, copyrights, and proprietary technology. We define scope of use, territories, exclusivity, royalties, quality control, and termination rights.',
      whyItMatters:
        'Intellectual property often represents your most valuable business asset. Proper licensing and assignment agreements protect ownership, generate revenue, prevent unauthorized use, and avoid costly litigation over IP rights and usage terms.',
      whoNeedsIt:
        'Technology companies, creators, inventors, franchisors, manufacturers, and any business that develops, owns, or uses valuable intellectual property as part of its operations or revenue model.',
    },
    {
      title: 'Trade Secret Agreements',
      description:
        'Confidentiality agreements, non-disclosure agreements (NDAs), and trade secret protection policies for employees, contractors, and business partners. We identify protectable information, establish security protocols, and create enforceable obligations to maintain secrecy.',
      whyItMatters:
        'Trade secrets lose legal protection if not properly safeguarded. Formal agreements establish legal obligations, document confidentiality expectations, and provide remedies for breaches, helping you protect competitive advantages and proprietary information.',
      whoNeedsIt:
        'Businesses with valuable proprietary information, client lists, processes, formulas, or know-how; companies sharing sensitive information with partners, vendors, or potential investors; and employers with access to competitor trade secrets.',
    },
    {
      title: 'Annual Consultation',
      description:
        'Ongoing legal advisory relationship providing proactive guidance on corporate compliance, contract reviews, governance matters, regulatory updates, risk management, and strategic planning. Regular check-ins ensure your business stays legally sound throughout the year.',
      whyItMatters:
        'Preventive legal care is more cost-effective than crisis management. Annual consultation helps you avoid problems before they arise, stay compliant with changing laws, and access immediate legal guidance when opportunities or challenges emerge.',
      whoNeedsIt:
        'Established businesses seeking a trusted legal advisor for ongoing needs, companies in regulated industries, and organizations preferring proactive legal support over reactive crisis response.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <PracticeAreaHeader {...headerData} />
      <PracticeAreaOverview {...overviewData} />
      <ServicesAccordion title="Our Services" services={servicesData} />
    </div>
  );
};

export default businessTransactionsPage;