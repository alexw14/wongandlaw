'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ConsiderationItem {
  number: number;
  title: string;
  description: string;
}

interface ConsiderationGroup {
  groupTitle: string;
  items: ConsiderationItem[];
}

interface IPConsiderationsSectionProps {
  groups: ConsiderationGroup[];
}

const IPConsiderationsSection: React.FC<IPConsiderationsSectionProps> = ({ groups }) => {
  return (
    <section className="mb-10 space-y-12">
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <motion.h2
            className="text-2xl font-bold mb-6 text-orange-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {group.groupTitle}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {group.items.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                className="flex gap-4 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: itemIndex * 0.06 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default IPConsiderationsSection;
