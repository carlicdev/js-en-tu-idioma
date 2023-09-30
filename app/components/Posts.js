
import PostCard from './PostCard';

const Posts = ({posts}) => {
    const firstPost = posts[0]

    if (posts.length) {
        return (
          <div className='flex flex-wrap mb-4  gap-3 w-full justify-around'>
            <div className='lg:hidden flex flex-wrap gap-3'>
                {
                    posts.map((post, index) => (
                        <PostCard post={post} key={index}/>
                    ))
                }
            </div>
            <div className='hidden lg:flex flex-wrap gap-3'>
                {
                    posts.slice(1).map((post, index) => (
                        <PostCard post={post} key={index}/>
                    ))
                }
            </div>
          </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default Posts