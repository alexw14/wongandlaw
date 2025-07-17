'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ImmigrationInfoCard from '@/components/ImmigrationInfoCard';
import {
  FaUsers,
  FaUserFriends,
  FaMedal,
  FaGraduationCap,
  FaBriefcase,
  FaGlobeAmericas,
  FaMoneyBillWave,
} from 'react-icons/fa';

interface FamilyBasedImmigrationItem {
  key: string;
  title: string;
  description: string;
  badgeText: string;
}

interface EmploymentBasedImmigrationItem {
  key: string;
  title: string;
  description: string;
}

interface ImmigrationPathwaysProps {
  title: string;
  familyBasedImmigration: {
    title: string;
    note: string;
    items: FamilyBasedImmigrationItem[];
  };
  employmentBasedImmigration: {
    title: string;
    note: string;
    items: EmploymentBasedImmigrationItem[];
  };
}

const getImmigrationInfoCardIcon = (key: string) => {
  switch (key) {
    case 'immediateRelatives':
      return <FaUsers className="text-3xl text-blue-500" />;
    case 'familyPreference':
      return <FaUserFriends className="text-3xl text-purple-500" />;
    case 'eb1':
      return <FaMedal className="text-2xl text-yellow-500 mb-2" />;
    case 'eb2':
      return <FaGraduationCap className="text-2xl text-green-600 mb-2" />;
    case 'eb3':
      return <FaBriefcase className="text-2xl text-gray-600 mb-2" />;
    case 'eb4':
      return <FaGlobeAmericas className="text-2xl text-indigo-500 mb-2" />;
    case 'eb5':
      return <FaMoneyBillWave className="text-2xl text-emerald-600 mb-2" />;
    default:
      return null;
  }
};

const getBadgeClass = (key: string) => {
  switch (key) {
    case 'immediateRelatives':
      return 'inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs mt-1';
    case 'familyPreference':
      return 'inline-block bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs mt-1';
    default:
      return '';
  }
};

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const ImmigrationPathways: React.FC<ImmigrationPathwaysProps> = ({
  title,
  familyBasedImmigration,
  employmentBasedImmigration,
}) => {
  return (
    <motion.section
      className="mb-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-extrabold mb-2 text-orange-500 text-center"
        variants={headingVariants}
      >
        {title}
      </motion.h2>
      <motion.div
        className="flex justify-center mb-8"
        variants={underlineVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="block w-16 h-1 bg-orange-500 rounded-full"
          variants={underlineVariants}
        />
      </motion.div>
      <motion.div
        className="mb-12"
        variants={headingVariants}
      >
        <motion.h3
          className="text-xl font-bold mb-4 text-orange-500"
          variants={headingVariants}
        >
          {familyBasedImmigration.title}
        </motion.h3>
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {familyBasedImmigration.items.map((item) => (
            <motion.div key={item.title} variants={sectionVariants}>
              <ImmigrationInfoCard
                icon={getImmigrationInfoCardIcon(item.key)}
                title={item.title}
                description={item.description}
                badge={
                  <span className={getBadgeClass(item.key)}>
                    {item.badgeText}
                  </span>
                }
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-gray-700 mt-4 text-sm"
          variants={headingVariants}
        >
          {familyBasedImmigration.note}
        </motion.p>
      </motion.div>
      <motion.div variants={headingVariants}>
        <motion.h3
          className="text-xl font-bold mb-4 text-orange-500"
          variants={headingVariants}
        >
          {employmentBasedImmigration.title}
        </motion.h3>
        <motion.div
          className="grid sm:grid-cols-3 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {employmentBasedImmigration.items.map((item) => (
            <motion.div key={item.title} variants={sectionVariants}>
              <ImmigrationInfoCard
                icon={getImmigrationInfoCardIcon(item.key)}
                title={item.title}
                description={item.description}
                className="flex-col items-center text-center"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-gray-700 mt-4 text-sm"
          variants={headingVariants}
        >
          {employmentBasedImmigration.note}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default ImmigrationPathways;
