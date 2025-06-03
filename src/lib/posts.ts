import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((file) => file.replace(/\.md$/, ''));
}

export function getPostMeta(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    slug,
    ...(data as {
      title: string;
      date: string;
      thumbnail?: string;
      description?: string;
      tags?: string;
    }),
  };
}

export async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(data as {
      title: string;
      date: string;
      thumbnail?: string;
      description?: string;
      tags?: string;
    }),
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map(getPostMeta)
    .sort((a, b) => b.date.localeCompare(a.date));
}
