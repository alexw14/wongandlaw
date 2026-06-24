'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <motion.div
    className="mb-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeUp}
  >
    <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-orange-500 pl-3">
      {title}
    </h2>
    {children}
  </motion.div>
);

const LegalDisclaimer: React.FC = () => {
  const t = useTranslations('LegalDisclaimer');

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Page Header */}
      <motion.section
        className="mb-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">
          {t('pageTitle')}
        </h1>
        <div className="mx-auto w-16 h-1 bg-orange-500 rounded-full mb-6" />
        <p className="text-sm text-gray-500 italic">{t('lastUpdated')}</p>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">{t('intro')}</p>
      </motion.section>

      {/* ─── IMPORTANT NOTICE ─── */}
      <motion.div
        className="mb-10 bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <p className="text-orange-800 font-semibold leading-relaxed">
          {t('importantNotice')}
        </p>
      </motion.div>

      {/* ─── DISCLAIMER SECTIONS ─── */}
      <Section title={t('section1Title')}>
        <p className="text-gray-700 leading-relaxed">{t('section1Content')}</p>
      </Section>

      <Section title={t('section2Title')}>
        <p className="text-gray-700 leading-relaxed">{t('section2Content')}</p>
      </Section>

      <Section title={t('section3Title')}>
        <p className="text-gray-700 leading-relaxed">{t('section3Content')}</p>
      </Section>

      <Section title={t('section4Title')}>
        <p className="text-gray-700 leading-relaxed">{t('section4Content')}</p>
      </Section>

      <Section title={t('section5Title')}>
        <p className="text-gray-700 leading-relaxed">{t('section5Content')}</p>
      </Section>

      <Section title={t('section6Title')}>
        <p className="text-gray-700 leading-relaxed">{t('section6Content')}</p>
      </Section>

      <Section title={t('section7Title')}>
        <p className="text-gray-700 leading-relaxed">{t('section7Content')}</p>
      </Section>

      <Section title={t('section8Title')}>
        <p className="text-gray-700 leading-relaxed">{t('section8Content')}</p>
      </Section>

      <Section title={t('section9Title')}>
        <p className="text-gray-700 leading-relaxed">{t('section9Content')}</p>
      </Section>

      {/* Contact */}
      <motion.section
        className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <p className="text-gray-700 mb-2">{t('contactText')}</p>
        <a
          href="mailto:info@wongandlaw.com"
          className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
        >
          info@wongandlaw.com
        </a>
        <p className="text-sm text-gray-500 mt-1">(626) 447-7788</p>
      </motion.section>
    </div>
  );
};

export default LegalDisclaimer;
