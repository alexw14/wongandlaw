export type Locale = 'en' | 'zh-HK' | 'zh-CN';

export interface PostTranslation {
  title: string;
  excerpt: string;
}

export interface Post {
  slug: string;
  image: string;
  date: string;
  category: string;
  availableLocales: Locale[];
  translations: Partial<Record<Locale, PostTranslation>>;
}

export const posts: Post[] = [
  {
    slug: 'eb5-investor-program-overview',
    image: '/images/services/eb5.jpg',
    date: '2025-07-01',
    category: 'EB-5',
    availableLocales: ['en', 'zh-HK', 'zh-CN'],
    translations: {
      en: {
        title: 'Understanding the EB-5 Investor Program',
        excerpt:
          'A comprehensive overview of the EB-5 program and what investors need to know before committing capital.',
      },
      'zh-HK': {
        title: '了解EB-5投資移民計劃',
        excerpt: '全面介紹EB-5計劃的核心要求，以及投資者在承諾資金前需要了解的重要事項。',
      },
      'zh-CN': {
        title: '了解EB-5投资移民计划',
        excerpt: '全面介绍EB-5计划的核心要求，以及投资者在承诺资金前需要了解的重要事项。',
      },
    },
  },
  {
    slug: 'business-entity-choices',
    image: '/images/services/business-entities.jpg',
    date: '2025-06-20',
    category: 'Business',
    availableLocales: ['en', 'zh-HK', 'zh-CN'],
    translations: {
      en: {
        title: 'Business Entity Choices for Startups',
        excerpt:
          'LLC, S-Corp, or C-Corp? Learn how to choose the right structure for your business goals and tax situation.',
      },
      'zh-HK': {
        title: '初創企業的商業實體選擇',
        excerpt: 'LLC、S型企業還是C型企業？了解如何根據您的業務目標和稅務情況選擇正確的架構。',
      },
      'zh-CN': {
        title: '初创企业的商业实体选择',
        excerpt: 'LLC、S型企业还是C型企业？了解如何根据您的业务目标和税务情况选择正确的架构。',
      },
    },
  },
  {
    slug: 'estate-planning-basics',
    image: '/images/services/estate-planning.jpg',
    date: '2025-06-10',
    category: 'Estate Planning',
    availableLocales: ['en', 'zh-HK', 'zh-CN'],
    translations: {
      en: {
        title: 'Estate Planning Basics for Families',
        excerpt:
          'Protect your legacy with these essential estate planning steps every family should take.',
      },
      'zh-HK': {
        title: '家庭遺產規劃基礎知識',
        excerpt: '通過這些每個家庭都應採取的基本遺產規劃步驟，保護您的遺產。',
      },
      'zh-CN': {
        title: '家庭遗产规划基础知识',
        excerpt: '通过这些每个家庭都应采取的基本遗产规划步骤，保护您的遗产。',
      },
    },
  },
];

export function getRecentPosts(count: number = 3): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getLocalizedPost(
  post: Post,
  locale: string,
): { title: string; excerpt: string; isFallback: boolean } {
  const loc = locale as Locale;
  if (post.translations[loc]) {
    return { ...post.translations[loc]!, isFallback: false };
  }
  // Fallback to English
  return { ...post.translations['en']!, isFallback: true };
}
