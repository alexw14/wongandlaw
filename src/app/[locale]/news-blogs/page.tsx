import { getLocalizedPost, getRecentPosts, posts } from '@/data/news-blogs';
import NewsBlogsListingClient from '@/components/NewsBlogsListingClient';

const NewsBlogsPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  const allPosts = getRecentPosts(posts.length);
  const categories = [...new Set(allPosts.map((p) => p.category))];

  const postCards = allPosts.map((post) => {
    const { title, excerpt, isFallback } = getLocalizedPost(post, locale);
    return {
      slug: post.slug,
      image: post.image,
      date: post.date,
      category: post.category,
      title,
      excerpt,
      isFallback,
    };
  });

  return <NewsBlogsListingClient posts={postCards} categories={categories} />;
};

export default NewsBlogsPage;