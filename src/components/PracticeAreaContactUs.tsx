'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ContactUsData {
  title: string;
  content: string;
  buttonText: string;
}

const PracticeAreaContactUs: React.FC<ContactUsData> = ({
  title,
  content,
  buttonText,
}) => {
  return (
    <motion.section
      className="text-center mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="text-2xl font-bold mb-4 text-[#FF8426]"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-700 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {content}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className="inline-block"
      >
        <Link
          href="/contact"
          className="inline-block bg-[#FF8426] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e6731f] transition-colors"
        >
          {buttonText}
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default PracticeAreaContactUs;
