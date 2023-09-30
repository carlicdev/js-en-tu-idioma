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
    < div className='max-w-[1536px] w-full mx-auto px-2 lg:px-0 my-2'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-3/4 lg:pr-2 mb-4 lg:mb-0'>
            <p className='text-center font-bold text-xl mb-4'>Posts de {slug}</p>
            <div className='w-full flex flex-wrap justify-around gap-3'>
              <Posts posts={posts} />
            </div>
        </div>
        <div className='w-full lg:w-1/4'>
          <LastPostsCard />
          <Tags />
          <Subscribe />
          <CTAContact />
        </div>
      </div>
    </div>
  )
}

export default Category