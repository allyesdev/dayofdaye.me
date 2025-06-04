import { getAllPosts } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  title: string;
  date: string;
  thumbnail?: string;
  description?: string;
  tags?: string;
  slug: string;
}

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Link
      key={post.slug}
      href={`/blog/${post.slug}`}
      className='card bg-base-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 flex-grow-1 flex-shrink-1 min-w-[300px]'
    >
      <figure className='border-b border-gray-200'>
        <Image
          src={post.thumbnail || '/images/thumbnail.png'}
          alt={post.title}
          width={0}
          height={0}
          sizes='100vw'
          priority
          style={{ width: 'auto', height: '200px' }}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{post.title}</h2>
        <p>{post.description}</p>
        {post.tags && (
          <div className='card-actions'>
            {post.tags.split(',').map((tag) => (
              <div key={tag} className='badge badge-outline'>
                {tag}
              </div>
            ))}
          </div>
        )}
        <div className='card-actions text-xs text-gray-500'>{post.date}</div>
      </div>
    </Link>
  );
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className='w-full h-full flex justify-center'>
      <div className='w-full h-full pt-24 px-8 flex flex-col gap-8 max-w-[1024px]'>
        <div className='grid grid-cols-1 pb-16 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
