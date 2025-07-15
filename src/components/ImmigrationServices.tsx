'use client';
import React from 'react';
import {
  FaBriefcase,
  FaUserCheck,
  FaLightbulb,
  FaMoneyCheckAlt,
  FaExchangeAlt,
  FaUniversity,
  FaPassport,
  FaUserGraduate,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ImmigrationService {
  key: string;
  title: string;
  description: string;
}

interface ImmigrationServicesProps {
  title: string;
  items: ImmigrationService[];
}

const getIcon = (key: string) => {
  switch (key) {
    case 'familyBased':
      return <FaUserCheck className="text-2xl text-blue-500 mt-1" />;
    case 'employmentBased':
      return <FaBriefcase className="text-2xl text-gray-600 mt-1" />;
    case 'strategies':
      return <FaLightbulb className="text-2xl text-yellow-500 mt-1" />;
    case 'eb5':
      return <FaMoneyCheckAlt className="text-2xl text-emerald-600 mt-1" />;
    case 'adjustmentOfStatus':
      return <FaExchangeAlt className="text-2xl text-indigo-500 mt-1" />;
    case 'consular':
      return <FaUniversity className="text-2xl text-green-600 mt-1" />;
    case 'nonImmigrant':
      return <FaPassport className="text-2xl text-purple-500 mt-1" />;
    case 'student':
      return <FaUserGraduate className="text-2xl text-pink-500 mt-1" />;
    default:
      return null;
  }
};

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ImmigrationServices: React.FC<ImmigrationServicesProps> = ({
  title,
  items,
}) => {
  return (
    <motion.section
      className="bg-gray-50 rounded-2xl py-12 px-4 mb-12 shadow-inner"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-extrabold mb-8 text-[#FF8426] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="grid sm:grid-cols-2 gap-6"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item) => (
          <motion.div
            key={item.key}
            className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(255,132,38,0.10)" }}
          >
            {getIcon(item.key)}
            <div>
              <motion.div
                className="font-semibold text-[#FF8426]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {item.title}
              </motion.div>
              <motion.div
                className="text-gray-700 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.4, delay: 0.18 }}
              >
                {item.description}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ImmigrationServices;
