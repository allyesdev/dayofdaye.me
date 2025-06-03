import { getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};
export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <div className='w-full h-full pt-16 px-6'>
      <article>
        <h1 className='text-2xl font-bold'>{post.title}</h1>
        <p>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </div>
  );
}
