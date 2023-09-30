
import Hero from './components/Hero'
import Featured from './components/Featured'
import Tags from './components/Tags'
import Posts from './components/Posts'
import CTAContact from './components/CTAContact'

import { getPosts } from './services/graphql'
import LastPostsCard from './components/LastPostsCard'
import Subscribe from './components/Subscribe'

export default async function Home() {
  const posts = await getPosts();
  posts.reverse()

  return (
    <main className="w-full">
        <Hero />
        <div className='my-2 max-w-[1536px] mx-auto flex flex-wrap px-2 lg:px-0'>
          <div className='w-full lg:w-3/4 gap-4 lg:pr-2'>
            <Featured post={posts[0].node}/>
            <Posts posts={posts.slice(1)} />
          </div>
          <div className='w-full lg:w-1/4 lg:pl-2'>
            <LastPostsCard />
            <Tags />
            <Subscribe />
            <CTAContact />
          </div>
        </div>
    </main>
  )
}
