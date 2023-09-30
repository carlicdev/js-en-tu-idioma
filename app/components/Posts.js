
import PostCard from './PostCard';

const Posts = ({posts}) => {

    if (posts.length) {
        return (
          <div className='flex flex-wrap my-4  gap-3 w-full justify-around'>
            {
                posts.map((post, index) => (
                    <PostCard post={post} key={index}/>
                ))
            }
          </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default Posts