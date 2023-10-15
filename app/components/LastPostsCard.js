import React from 'react'
import { getRecentPosts } from '../services/graphql'
import Link from 'next/link';

const LastPostsCard = async () => {
    const posts = await getRecentPosts();
    if (posts) posts.reverse();

    if (!posts) {
        return <div>Loading...</div>
    }

  return (
    <div className='card p-5 rounded-lg mb-4'>
        <div className='card-title text-center mb-5 rounded-lg py-2'>
            <p className='text-xl font-semibold'>Ultimos Posts</p>
        </div>
        <div className='flex flex-col gap-2 justify-center'>
            {
                posts.map((post, index) => (
                    <Link href={`/post/${post.slug}`} key={index}>
                        <p className='font-light'>{post.title}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default LastPostsCard