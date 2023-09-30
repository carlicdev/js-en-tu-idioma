import CTAContact from '@/app/components/CTAContact';
import LastPostsCard from '@/app/components/LastPostsCard';
import PostCard from '@/app/components/PostCard';
import Posts from '@/app/components/Posts';
import Subscribe from '@/app/components/Subscribe';
import Tags from '@/app/components/Tags';
import { getCategoryPosts } from '@/app/services/graphql';
import React from 'react'

const Category = async ({ params }) => {
    const { slug } = params;

    const posts = await getCategoryPosts(slug);

    if (!posts) {
        return <div>Loading...</div>
    }

  return (

      <div className='flex flex-wrap'>
        <p className='text-center font-bold text-xl mb-4'>Posts de {slug}</p>
        <div className='w-full flex flex-wrap justify-around gap-3'>
          <Posts posts={posts} />
        </div>
    </div>
  )
}

export default Category