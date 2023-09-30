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
    < div className='w-full mb-2'>
          <PostDetail post={post} />
    </div>
  )
}

export default PostDetails