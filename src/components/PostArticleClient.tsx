'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface PostArticleClientProps {
  title: string;
  date: string;
  category: string;
  image: string;
  contentHtml: string;
  isFallback: boolean;
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PostArticleClient: React.FC<PostArticleClientProps> = ({
  title,
  date,
  category,
  image,
  contentHtml,
  isFallback,
}) => {
  const t = useTranslations('PostPage');

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href="/news-blogs"
          className="inline-flex items-center text-orange-500 font-semibold hover:underline text-sm"
        >
          &larr; {t('backToBlogs')}
        </Link>
      </div>

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <img
          src={image}
          alt={title}
          className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-sm text-gray-500">
            {t('publishedOn')} {new Date(date).toLocaleDateString()}
          </span>
          {isFallback && (
            <span className="text-xs bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1 rounded-full">
              {t('translationComingSoon')}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {title}
        </h1>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none text-gray-700
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-gray-900
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
            prose-li:mb-1
            prose-table:w-full prose-table:border-collapse
            prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:px-4 prose-th:py-2 prose-th:text-left
            prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2
            prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      {/* CTA */}
      <div className="bg-orange-500 text-white py-12 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">{t('ctaTitle')}</h2>
          <p className="text-orange-100 mb-6">{t('ctaSubtitle')}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-500 font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-50 transition-colors duration-200"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PostArticleClient;
