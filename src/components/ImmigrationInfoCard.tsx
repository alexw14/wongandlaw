'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ImmigrationInfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: React.ReactNode;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5 }
  }),
};

const ImmigrationInfoCard: React.FC<ImmigrationInfoCardProps> = ({
  icon,
  title,
  description,
  badge,
  className = '',
}) => (
  <motion.div
    className={`bg-white rounded-xl shadow p-5 flex gap-3 ${className}`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(255,132,38,0.10)" }}
  >
    {icon}
    <div>
      <motion.h3
        className="font-bold text-[#FF8426] mb-1"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        custom={0}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-700 text-sm"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        custom={1}
      >
        {description}
        {badge && <><br />{badge}</>}
      </motion.p>
    </div>
  </motion.div>
);

export default ImmigrationInfoCard;