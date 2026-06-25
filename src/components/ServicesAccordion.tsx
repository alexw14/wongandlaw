'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetail {
  title: string;
  description: string;
  whyItMatters: string;
  whoNeedsIt: string;
}

interface ServicesAccordionLabels {
  howWeHelp: string;
  whyItMatters: string;
  whoNeedsIt: string;
}

interface ServicesAccordionProps {
  title: string;
  services: ServiceDetail[];
  labels: ServicesAccordionLabels;
}

const ServicesAccordion: React.FC<ServicesAccordionProps> = ({
  title,
  services,
  labels,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mb-10">
      <motion.h2
        className="text-2xl font-bold mb-6 text-orange-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <div className="space-y-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-orange-50 transition-colors"
              aria-expanded={expandedIndex === index}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <motion.svg
                className="w-6 h-6 text-orange-500 flex-shrink-0 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-2 space-y-4 border-t border-gray-100">
                    {/* Description */}
                    <div>
                      <h4 className="font-semibold text-orange-500 mb-1">
                        {labels.howWeHelp}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Why It Matters */}
                    <div>
                      <h4 className="font-semibold text-orange-500 mb-1">
                        {labels.whyItMatters}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {service.whyItMatters}
                      </p>
                    </div>

                    {/* Who Needs It */}
                    <div>
                      <h4 className="font-semibold text-orange-500 mb-1">
                        {labels.whoNeedsIt}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {service.whoNeedsIt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAccordion;