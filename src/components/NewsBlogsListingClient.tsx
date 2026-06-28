'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface PostCard {
  slug: string;
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  isFallback: boolean;
}

interface NewsBlogsListingClientProps {
  posts: PostCard[];
  categories: string[];
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.55 },
  }),
};

const NewsBlogsListingClient: React.FC<NewsBlogsListingClientProps> = ({
  posts,
  categories,
}) => {
  const t = useTranslations('NewsBlogsPage');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <motion.div
        className="bg-orange-500 text-white py-16 px-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-lg text-orange-100 max-w-2xl">{t('pageSubtitle')}</p>
        </div>
      </motion.div>

      {/* Category filter */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
              activeCategory === 'all'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
            }`}
          >
            {t('allCategories')}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts grid */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-16">{t('noPostsFound')}</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
                variants={cardVariants}
                custom={i}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    {post.isFallback && (
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        {t('translationComingSoon')}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news-blogs/${post.slug}`}
                    className="mt-auto inline-block text-orange-500 font-semibold hover:underline text-sm"
                  >
                    {t('readMore')} &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NewsBlogsListingClient;
