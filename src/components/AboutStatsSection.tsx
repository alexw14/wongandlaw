import React from 'react';
import Link from 'next/link';
import StatCard from './StatCard';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const statsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutStatsSection: React.FC = () => {
  const t = useTranslations('AboutStatsSection');

  const stats = [
    { value: '20+', label: t('yearsOfExperience') },
    { value: '5000+', label: t('totalCasesHandled') },
    { value: '1000+', label: t('eb5InvestorCases') },
    { value: '300+', label: t('eb5CasesUnderRIA') },
    { value: '99.3%', label: t('eb5ApprovalRateUnderRIA') },
    { value: t('licensed'), label: t('licensedIn') },
  ];

  return (
    <motion.section
      className="bg-white py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={statsVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12">
        {/* Stats - Left Side */}
        <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8 self-center">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
        {/* Text - Right Side */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#FF8426]">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg sm:text-xl mb-4 text-gray-700">
            {t('aboutDescriptionOne')}
          </p>
          <p className="text-lg sm:text-xl mb-6 text-gray-700">
            {t('aboutDescriptionTwo')}
          </p>
          <Link
            href="/professionals"
            className="inline-block bg-[#FF8426] hover:bg-[#e6731f] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-200 text-base sm:text-lg mx-auto md:mx-0"
          >
            {t('meetOurTeam')}
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutStatsSection;
