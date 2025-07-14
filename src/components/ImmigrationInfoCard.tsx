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
      <h3 className="font-bold text-[#FF8426] mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">
        {description}
        {badge && <><br />{badge}</>}
      </p>
    </div>
  </motion.div>
);

export default ImmigrationInfoCard;