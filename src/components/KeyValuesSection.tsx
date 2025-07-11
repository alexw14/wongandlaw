import { FaBriefcase, FaGlobeAmericas, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';

const keyValuesVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const keyValues = [
  {
    icon: <FaBriefcase className="text-4xl text-[#FF8426] mb-4" />,
    title: 'Extensive Experience',
    description:
      'We take pride in providing comprehensive legal advice and services, whether your needs involve business law, international transactions, intellectual property, asset protection, or immigration matters.',
  },
  {
    icon: <FaGlobeAmericas className="text-4xl text-[#FF8426] mb-4" />,
    title: 'Global Perspective',
    description:
      'With lawyers licensed in the U.S., England & Wales, Hong Kong, and China, we address legal matters with a broad and informed outlook.',
  },
  {
    icon: <FaComments className="text-4xl text-[#FF8426] mb-4" />,
    title: 'International Support',
    description:
      'Our multilingual team, fluent in English, Chinese, Korean, and Vietnamese, ensures clear and effective communication with a diverse client base.',
  },
];

const KeyValuesSection: React.FC = () => (
  <motion.section
    className="bg-gray-50 py-16 px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={keyValuesVariants}
  >
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {keyValues.map((value) => (
          <div key={value.title} className="flex flex-col items-center">
            {value.icon}
            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
            <p className="text-gray-700">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default KeyValuesSection;