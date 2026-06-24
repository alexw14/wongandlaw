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

const TermsAndPrivacy: React.FC = () => {
  const t = useTranslations('TermsAndPrivacy');

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

      {/* ─── TERMS OF USE ─── */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-orange-500">
          {t('termsTitle')}
        </h2>

        <Section title={t('terms1Title')}>
          <p className="text-gray-700 leading-relaxed">{t('terms1Content')}</p>
        </Section>

        <Section title={t('terms2Title')}>
          <p className="text-gray-700 leading-relaxed">{t('terms2Content')}</p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
            <li>{t('terms2Bullet1')}</li>
            <li>{t('terms2Bullet2')}</li>
            <li>{t('terms2Bullet3')}</li>
            <li>{t('terms2Bullet4')}</li>
          </ul>
        </Section>

        <Section title={t('terms3Title')}>
          <p className="text-gray-700 leading-relaxed">{t('terms3Content')}</p>
        </Section>

        <Section title={t('terms4Title')}>
          <p className="text-gray-700 leading-relaxed font-medium text-orange-700 bg-orange-50 border border-orange-200 rounded-lg p-4">
            {t('terms4Content')}
          </p>
        </Section>

        <Section title={t('terms5Title')}>
          <p className="text-gray-700 leading-relaxed">{t('terms5Content')}</p>
        </Section>

        <Section title={t('terms6Title')}>
          <p className="text-gray-700 leading-relaxed">{t('terms6Content')}</p>
        </Section>

        <Section title={t('terms7Title')}>
          <p className="text-gray-700 leading-relaxed">{t('terms7Content')}</p>
        </Section>

        <Section title={t('terms8Title')}>
          <p className="text-gray-700 leading-relaxed">{t('terms8Content')}</p>
        </Section>
      </motion.section>

      {/* ─── PRIVACY POLICY ─── */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-orange-500">
          {t('privacyTitle')}
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">{t('privacyIntro')}</p>

        <Section title={t('privacy1Title')}>
          <p className="text-gray-700 leading-relaxed mb-2">{t('privacy1Content')}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>{t('privacy1Bullet1')}</li>
            <li>{t('privacy1Bullet2')}</li>
            <li>{t('privacy1Bullet3')}</li>
            <li>{t('privacy1Bullet4')}</li>
          </ul>
        </Section>

        <Section title={t('privacy2Title')}>
          <p className="text-gray-700 leading-relaxed mb-2">{t('privacy2Content')}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>{t('privacy2Bullet1')}</li>
            <li>{t('privacy2Bullet2')}</li>
            <li>{t('privacy2Bullet3')}</li>
            <li>{t('privacy2Bullet4')}</li>
          </ul>
        </Section>

        <Section title={t('privacy3Title')}>
          <p className="text-gray-700 leading-relaxed">{t('privacy3Content')}</p>
        </Section>

        <Section title={t('privacy4Title')}>
          <p className="text-gray-700 leading-relaxed">{t('privacy4Content')}</p>
        </Section>

        <Section title={t('privacy5Title')}>
          <p className="text-gray-700 leading-relaxed">{t('privacy5Content')}</p>
        </Section>

        <Section title={t('privacy6Title')}>
          <p className="text-gray-700 leading-relaxed">{t('privacy6Content')}</p>
        </Section>
      </motion.section>

      {/* Contact for Privacy Inquiries */}
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

export default TermsAndPrivacy;
