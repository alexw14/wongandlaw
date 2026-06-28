'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getLocalizedPost, getRecentPosts } from '@/data/news-blogs';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6 },
  }),
};

const RecentNewsSection = () => {
  const t = useTranslations('RecentNewsSection');
  const locale = useLocale();
  const recentPosts = getRecentPosts(3);

  return (
    <motion.section
      className="bg-gray-50 py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">
            {t('title')}
          </h2>
          <Link
            href="/news-blogs"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200 text-base"
          >
            {t('viewAllBtnText')}
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {recentPosts.map((post, i) => {
            const { title, excerpt } = getLocalizedPost(post, locale);
            return (
              <motion.div
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                variants={cardVariants}
                custom={i}
              >
                <img
                  src={post.image}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs text-gray-400 mb-2">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-gray-700 mb-4 flex-1">{excerpt}</p>
                  <Link
                    href={`/news-blogs/${post.slug}`}
                    className="mt-auto inline-block text-orange-500 font-semibold hover:underline"
                  >
                    {t('readMore')} &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default RecentNewsSection;
