import { getAllPosts } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className='w-full h-full pt-16 px-6'>
      <h1 className='text-2xl font-bold'>Blog</h1>
      <div>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='card bg-base-100 w-96 shadow-sm cursor-pointer'
          >
            <figure>
              <Image
                src={post.thumbnail || '/images/thumbnail.png'}
                alt={post.title}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: 'auto', height: '200px' }}
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                {post.title}
                <div className='badge badge-secondary'>{post.date}</div>
              </h2>
              {post.description && <p>{post.description}</p>}
              {post.tags && (
                <div className='card-actions justify-end'>
                  {post.tags.split(',').map((tag) => (
                    <div key={tag} className='badge badge-outline'>
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
