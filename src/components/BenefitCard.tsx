'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  custom?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  icon = <span className="text-2xl text-orange-500">✔</span>,
  custom = 0,
}) => (
  <motion.div
    className="bg-orange-100 rounded-lg p-4 flex flex-col gap-2 shadow-sm mb-6"
    custom={custom}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(255,132,38,0.10)" }}
  >
    <div className="flex items-center gap-3 mb-1">
      {icon}
      <span className="text-lg font-semibold text-orange-500">{title}</span>
    </div>
    <p className="text-gray-700 text-sm">{description}</p>
  </motion.div>
);

export default BenefitCard;