'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface PracticeAreaHeaderProps {
  imgUrl: string;
  imgAltText: string;
  title: string;
  subTitle: string;
}

const PracticeAreaHeader: React.FC<PracticeAreaHeaderProps> = ({
  imgUrl,
  imgAltText,
  title,
  subTitle,
}) => {
  return (
    <section className="mb-10 text-center">
      <motion.img
        src={imgUrl}
        alt={imgAltText}
        className="w-full h-56 object-cover rounded-xl mb-6 transition-transform duration-700 ease-in-out hover:scale-105"
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-[#FF8426] mb-4 drop-shadow-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
      >
        {subTitle}
      </motion.p>
    </section>
  );
};

export default PracticeAreaHeader;
