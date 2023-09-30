import CTAContact from '@/app/components/CTAContact';
import LastPostsCard from '@/app/components/LastPostsCard';
import PostDetail from '@/app/components/PostDetail';
import Subscribe from '@/app/components/Subscribe';
import Tags from '@/app/components/Tags';
import { getPostDetails } from '@/app/services/graphql'
import React from 'react'

const PostDetails = async ({ params }) => {
  const { slug } = params;
  const post = await getPostDetails(slug)


  if (!post) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    < div className='max-w-[1536px] w-full mx-auto px-2 lg:px-0 my-2'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-3/4 lg:pr-4'>
          <PostDetail post={post} />
        </div>
        <div className='w-full lg:w-1/4 mt-4 lg:mt-0'>
          <LastPostsCard />
          <Tags />
          <Subscribe />
          <CTAContact />
        </div>
      </div>
    </div>
  )
}

export default PostDetails