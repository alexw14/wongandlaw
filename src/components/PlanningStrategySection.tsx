'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StrategyItem {
  title: string;
  description: string;
}

interface StrategyGroup {
  title: string;
  description: string;
  items: StrategyItem[];
}

interface PlanningStrategySectionProps {
  title: string;
  groups: StrategyGroup[];
}

const PlanningStrategySection: React.FC<PlanningStrategySectionProps> = ({
  title,
  groups,
}) => {
  return (
    <section className="mb-10 space-y-6">
      <motion.h2
        className="text-2xl font-bold text-orange-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900">{group.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {group.description}
            </p>

            <div className="mt-5 space-y-3">
              {group.items.map((item, itemIndex) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: itemIndex * 0.04 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {itemIndex + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlanningStrategySection;
