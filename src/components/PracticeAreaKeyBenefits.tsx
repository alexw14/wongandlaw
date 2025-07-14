'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface KeyBenefit {
  title: string;
}

interface KeyBenefitsProps {
  title: string;
  benefits: KeyBenefit[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const PracticeAreaKeyBenefits: React.FC<KeyBenefitsProps> = ({
  title,
  benefits,
}) => {
  return (
    <motion.section
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-2xl font-bold mb-4 text-[#FF8426]"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        {title}
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            className="bg-[#FFFAF3] rounded-lg p-4 flex items-center gap-3 shadow-sm"
            custom={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(255,132,38,0.10)" }}
          >
            <span className="text-2xl text-[#FF8426]">✔</span>
            <span>{benefit.title}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PracticeAreaKeyBenefits;
