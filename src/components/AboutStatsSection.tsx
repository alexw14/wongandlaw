import React from 'react';
import Link from 'next/link';
import StatCard from './StatCard';
import { motion } from 'framer-motion';

const statsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stats = [
  { value: '20+', label: 'Years of Immigration Legal Experience' },
  { value: '5000+', label: 'Total Cases Handled' },
  { value: '1000+', label: 'EB-5 Investor Cases' },
  { value: '300+', label: 'EB-5 Cases under RIA' },
  { value: '99.3%', label: 'EB-5 Approval Rate under RIA' },
  { value: 'Licensed', label: 'Across U.S., Hong Kong, and China' },
];

const AboutStatsSection: React.FC = () => (
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
          Wong & Partners: Your Trusted Immigration & Business Law Team
        </h2>
        <p className="text-lg sm:text-xl mb-4 text-gray-700">
          Wong & Partners is a family-founded law firm with deep roots in the communities we serve. With over two decades of experience, our multilingual team provides clear, client-focused legal guidance in English, Cantonese, and Mandarin. Licensed across the U.S., Hong Kong, and China, we are dedicated to delivering results with integrity and expertise.
        </p>
        <p className="text-lg sm:text-xl mb-6 text-gray-700">
          Our practice areas include the EB-5 Investor Program, immigration, asset protection and estate planning, business entities and corporate governance, e-commerce and intellectual property, and business transactions. We are committed to helping individuals, families, and businesses achieve their goals with personalized strategies and a global perspective.
        </p>
        <Link
          href="/professionals"
          className="inline-block bg-[#FF8426] hover:bg-[#e6731f] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-200 text-base sm:text-lg mx-auto md:mx-0"
        >
          Meet Our Team
        </Link>
      </div>
    </div>
  </motion.section>
);

export default AboutStatsSection;