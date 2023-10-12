
import Hero from './components/Hero'
import Featured from './components/Featured'

import Posts from './components/Posts'

import { getPosts } from './services/graphql'


export default async function Home() {
  const posts = await getPosts();

  if (!posts) {
    return <p>Loading...</p>
  }

  posts.reverse();
  return (
    <main className="w-full flex flex-col gap-4">
      <Hero />
      <Featured post={posts[0].node}/>
      <Posts posts={posts} />   
    </main>
  )
}
