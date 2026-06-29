import React, { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import {
  FaBuilding,
  FaHandshake,
  FaGlobe,
  FaGavel,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const tabVariants = {
  active:
    'cursor-pointer border-orange-500 bg-orange-500 text-white font-bold shadow-lg ring-2 ring-orange-200 transition-all duration-200 md:border-transparent md:shadow-md md:ring-orange-500',
  inactive:
    'cursor-pointer border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500 md:hover:bg-orange-100',
};

const desktopContentVariants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -24, transition: { duration: 0.3 } },
};

const mobileContentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const LegalServicesSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations('LegalServicesSection');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateIsMobile = (event: MediaQueryList | MediaQueryListEvent) =>
      setIsMobile(event.matches);

    updateIsMobile(mediaQuery);
    mediaQuery.addEventListener('change', updateIsMobile);

    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  const services: {
    label: string;
    icon: IconType;
    description: string;
    buttonText: string;
    href: string;
    image: string;
  }[] = [
    {
      label: t('eb5InvestorProgram'),
      icon: FaChartLine,
      description: t('eb5InvestorProgramDescription'),
      buttonText: t('eb5InvestorProgramButtonText'),
      href: '/practice-areas/eb5-investor-program',
      image: '/images/services/eb5.jpg',
    },
    {
      label: t('immigration'),
      icon: FaGlobe,
      description: t('immigrationDescription'),
      buttonText: t('immigrationButtonText'),
      href: '/practice-areas/immigration',
      image: '/images/services/immigration.jpg',
    },
    {
      label: t('businessEntities'),
      icon: FaBuilding,
      description: t('businessEntitiesDescription'),
      buttonText: t('businessEntitiesButtonText'),
      href: '/practice-areas/business-entities-corporate-governance',
      image: '/images/services/business-entities.jpg',
    },
    {
      label: t('businessTransactions'),
      icon: FaHandshake,
      description: t('businessTransactionsDescription'),
      buttonText: t('businessTransactionsButtonText'),
      href: '/practice-areas/business-transactions',
      image: '/images/services/business-transactions.jpg',
    },
    {
      label: t('ecommerceAndIP'),
      icon: FaGavel,
      description: t('ecommerceAndIPDescription'),
      buttonText: t('ecommerceAndIPButtonText'),
      href: '/practice-areas/e-commerce-intellectual-property',
      image: '/images/services/ecommerce-ip.jpg',
    },
    {
      label: t('assetsProtection'),
      icon: FaShieldAlt,
      description: t('assetsProtectionDescription'),
      buttonText: t('assetsProtectionButtonText'),
      href: '/practice-areas/assets-protection-estate-planning',
      image: '/images/services/estate-planning.jpg',
    },
  ];

  const contentVariants = isMobile
    ? mobileContentVariants
    : desktopContentVariants;
  const ActiveIcon = services[active].icon;

  return (
    <motion.section
      className="bg-white py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-orange-500 text-center">
          {t('legalServicesTitle')}
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs: grid on mobile, vertical on desktop */}
          <div className="w-full md:w-1/3">
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-2">
              {services.map((service, idx) => (
                <button
                  key={service.label}
                  className={`w-full rounded-2xl border px-4 py-4 text-center shadow-sm transition-all duration-200 md:rounded md:px-4 md:py-3 md:text-left ${
                    active === idx ? tabVariants.active : tabVariants.inactive
                  }`}
                  onClick={() => setActive(idx)}
                  type="button"
                >
                  <div className="flex min-h-24 flex-col items-center justify-center gap-2 md:min-h-0 md:flex-row md:justify-start">
                    <service.icon
                      className={`text-xl md:hidden ${
                        active === idx ? 'text-white' : 'text-orange-500'
                      }`}
                    />
                    <span className="text-sm font-semibold leading-snug md:text-base">
                      {service.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center min-h-[268px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={contentVariants}
                className="relative w-full h-full max-w-xl flex items-center justify-center rounded-lg overflow-hidden shadow-md min-h-[300px]"
              >
                {/* Background Image */}
                {services[active].image && (
                  <img
                    src={services[active].image}
                    alt={services[active].label}
                    className="absolute inset-0 w-full h-full object-cover z-0 min-h-[300px]"
                  />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />
                {/* Content Overlay */}
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-6 text-center text-white">
                  <ActiveIcon className="mb-2 text-3xl text-orange-500" />
                  <h3 className="text-xl font-bold mb-2 drop-shadow">
                    {services[active].label}
                  </h3>
                  <p className="mb-6 drop-shadow">
                    {services[active].description}
                  </p>
                  {/* Hide button in overlay on mobile, show on md+ */}
                  <Link
                    href={services[active].href}
                    className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200 text-base"
                  >
                    {services[active].buttonText}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Show button below image on mobile only */}
            <Link
              href={services[active].href}
              className="mt-4 md:hidden inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full shadow transition-colors duration-200 text-sm"
            >
              {services[active].buttonText}
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LegalServicesSection;
