import React from 'react';
import PracticeAreasCard from './PracticeAreasCard';
import { useTranslations } from 'next-intl';

const PracticeAreasGrid: React.FC = () => {
  const t = useTranslations('PracticeAreasGrid');

  const practiceAreas = [
    {
      key: 'eb5-investor-program',
      title: t('eb5Title'),
      description: t('eb5Description'),
      imageUrl: '/images/services/eb5.jpg',
    },
    {
      key: 'immigration',
      title: t('immigrationTitle'),
      description: t('immigrationDescription'),
      imageUrl: '/images/services/immigration.jpg',
    },
    {
      key: 'businessEntities',
      title: t('businessEntitiesTitle'),
      description: t('businessEntitiesDescription'),
      imageUrl: '/images/services/business-entities.jpg',
    },
    {
      key: 'businessTransactions',
      title: t('businessTransactionsTitle'),
      description: t('businessTransactionsDescription'),
      imageUrl: '/images/services/business-transactions.jpg',
    },
    {
      key: 'ecommerceAndIP',
      title: t('ecommerceAndIPTitle'),
      description: t('ecommerceAndIPDescription'),
      imageUrl: '/images/services/ecommerce-ip.jpg',
    },
    {
      key: 'assetsProtection',
      title: t('assetsProtectionTitle'),
      description: t('assetsProtectionDescription'),
      imageUrl: '/images/services/estate-planning.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {practiceAreas.map((area) => (
          <PracticeAreasCard
            key={area.key}
            title={area.title}
            description={area.description}
            href={`/practice-areas/${area.key}`}
            imageUrl={area.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeAreasGrid;
