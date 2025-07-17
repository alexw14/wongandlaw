'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface PracticeAreaOverviewProps {
  overviewTitle: string;
  overviewText: string;
  aboutHeaderText: string;
  aboutText: string;
}

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const PracticeAreaOverview: React.FC<PracticeAreaOverviewProps> = ({
  overviewTitle,
  overviewText,
  aboutHeaderText,
  aboutText,
}) => {
  return (
    <>
      <section className="mb-10">
        <motion.h2
          className="text-2xl font-bold mb-2 text-orange-500"
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeInDown}
        >
          {overviewTitle}
        </motion.h2>
        <motion.p
          className="text-gray-700"
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeInUp}
        >
          {overviewText}
        </motion.p>
      </section>
      <section className="mb-10">
        <motion.h2
          className="text-2xl font-bold mb-2 text-orange-500"
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeInDown}
        >
          {aboutHeaderText}
        </motion.h2>
        <motion.p
          className="text-gray-700"
          initial="hidden"
          animate="visible"
          custom={0.7}
          variants={fadeInUp}
        >
          {aboutText}
        </motion.p>
      </section>
    </>
  );
};

export default PracticeAreaOverview;
