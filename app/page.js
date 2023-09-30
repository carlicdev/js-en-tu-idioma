
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
    <main className="w-full flex flex-col gap-4">
      <Hero />
      <Featured post={posts[0].node}/>
      <Posts posts={posts} />   
    </main>
  )
}
