import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src', 'data', 'posts');

export interface PostContent {
  contentHtml: string;
  usedLocale: string;
  isFallback: boolean;
}

export async function getPostContent(
  slug: string,
  locale: string,
): Promise<PostContent | null> {
  const localesToTry = locale !== 'en' ? [locale, 'en'] : ['en'];

  for (const l of localesToTry) {
    const filePath = path.join(postsDirectory, l, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { content } = matter(fileContents);
      const processed = await remark().use(html).process(content);
      return {
        contentHtml: processed.toString(),
        usedLocale: l,
        isFallback: l !== locale,
      };
    }
  }

  return null;
}
