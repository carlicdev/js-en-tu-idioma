import Link from 'next/link';
import styleDate from '../utils/date'

const PostCard = ({post}) => {

  return (
    <div className='card p-5 rounded-lg w-full lg:max-w-[372px] flex flex-col'>
        <img src={post.node.featuredImage.url} alt='blogImg' className="w-full h-[150px] rounded mb-2" />
        <p className="font-semibold text-gray-500 text-xs mb-1">{styleDate(post.node.createdAt)}</p>
        <p className="font-black mb-2">{post.node.title}</p>
        <p className='text-sm text-justify mb-4'>{post.node.excerpt.slice(0,150)}...</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {
                post.node.categories.map((category, index) => (
                    <Link href={`/category/${category.slug}`} key={index}>
                        <div className='tag px-2 py-1 rounded-full'>
                            <p className={`text-sm text-${category.color}`}>#{category.name}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
        <div className="flex items-end">
            <Link href={`/post/${post.node.slug}`} className='mx-auto'>
                <button className='text-white bg-red-400 lg:px-5  py-2 px-4 rounded-lg text-md '>
                    Leer Más
                </button>
            </Link>
        </div>
    </div>
  )
}

export default PostCard