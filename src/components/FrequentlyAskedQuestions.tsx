'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Question {
  key: string;
  question: string;
  answer: string;
}

interface FrequentlyAskedQuestionsProp {
  title: string;
  questions: Question[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProp> = ({
  title,
  questions,
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
      <div className="space-y-4">
        {questions.map((question, i) => (
          <motion.details
            key={question.key}
            className="bg-gray-50 rounded-lg p-4"
            custom={i}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 4px 24px rgba(255,132,38,0.10)" }}
          >
            <summary className="font-semibold cursor-pointer">
              {question.question}
            </summary>
            <p className="mt-2 text-gray-700 text-sm">{question.answer}</p>
          </motion.details>
        ))}
      </div>
    </motion.section>
  );
};

export default FrequentlyAskedQuestions;
