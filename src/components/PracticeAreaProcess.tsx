'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  key: string;
  label: string;
  description: string;
}

interface Process {
  title: string;
  steps: Step[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const PracticeAreaProcess: React.FC<Process> = ({ title, steps }) => {
  return (
    <motion.section
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-2xl font-bold mb-4 text-orange-500"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        {title}
      </motion.h2>
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.key}
            className="flex items-start gap-4 bg-orange-50 rounded-lg p-5 shadow-sm"
            custom={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(255,132,38,0.10)" }}
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg">
                {idx + 1}
              </div>
            </div>
            <div>
              <div className="font-semibold text-orange-500 text-base">
                {step.label}
              </div>
              <div className="text-gray-700 text-sm">{step.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PracticeAreaProcess;
