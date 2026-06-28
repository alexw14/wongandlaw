import { notFound } from 'next/navigation';
import { posts, getLocalizedPost } from '@/data/news-blogs';
import { getPostContent } from '@/lib/posts';
import PostArticleClient from '@/components/PostArticleClient';

interface PostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ['en', 'zh-HK', 'zh-CN'];
  return posts.flatMap((post) =>
    locales.map((locale) => ({ locale, slug: post.slug })),
  );
}

const PostPage = async ({ params }: PostPageProps) => {
  const { locale, slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const content = await getPostContent(slug, locale);
  if (!content) {
    notFound();
  }

  const { title } = getLocalizedPost(post, locale);

  return (
    <PostArticleClient
      title={title}
      date={post.date}
      category={post.category}
      image={post.image}
      contentHtml={content.contentHtml}
      isFallback={content.isFallback}
    />
  );
};

export default PostPage;
