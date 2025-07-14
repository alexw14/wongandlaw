'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Requirement {
  title: string;
  content: string;
  highlightDollarValues: boolean;
}

interface PracticeAreaBasicRequirementsProps {
  title: string;
  requirements: Requirement[];
}

// Helper function to bold dollar amounts in a string
function highlightDollarValues(text: string) {
  return text.split(/(\$\d{1,3}(?:,\d{3})*(?:\.\d+)?)/g).map((part, i) =>
    /^\$\d/.test(part) ? (
      <span key={i} className="font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const PracticeAreaBasicRequirements: React.FC<PracticeAreaBasicRequirementsProps> = ({
  title,
  requirements,
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
      <div className="grid gap-4 sm:grid-cols-2">
        {requirements.map((requirement, i) => (
          <motion.details
            key={requirement.title}
            className="bg-gray-50 rounded-lg p-4"
            custom={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(255,132,38,0.10)" }}
          >
            <summary className="font-semibold text-[#FF8426] cursor-pointer">
              {requirement.title}
            </summary>
            <p className="mt-2 text-gray-700 text-sm">
              {requirement.highlightDollarValues
                ? highlightDollarValues(requirement.content)
                : requirement.content}
            </p>
          </motion.details>
        ))}
      </div>
    </motion.section>
  );
};

export default PracticeAreaBasicRequirements;
