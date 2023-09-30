
import Link from 'next/link';
import styleDate from '../utils/date'

const Featured = async ({ post }) => {

    if (post) {

        return (
            <div className='hidden lg:flex card p-5 w-full rounded-lg'>
                <img src={post.featuredImage.url} alt='blogImg' className='w-1/3 rounded-lg' />
                <div className='px-5 flex flex-col w-full'>
                    <p className='text-xl lg:text-2xl font-black mb-2'>{post.title}</p>
                    <p className='text-xs lg:text-sm mb-4'>{styleDate(post.createdAt)}</p>
                    <p className='hidden lg:block text-lg  mb-4 text-justify'>{post.excerpt}</p>
                    <div className='mb-0 mt-auto flex items-end'>
                        <div className='flex flex-wrap justify-start gap-2 mb-2'>
                            {
                                post.categories.map((tag, index) => (
                                    <Link href={`/category/${tag.slug}`} key={index}>
                                        <div className='tag px-2 py-1 rounded-full'>
                                            <p className={`text-sm text-${tag.color}`}># {tag.name}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        <Link href={`post/${post.slug}`} className='mr-0 ml-auto'>
                            <button className='text-white bg-red-400 lg:px-5 lg:py-3 py-2 px-4 rounded-lg text-md lg:text-xl '>
                                Leer Más
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div>
                Loading...
            </div>
        )
    }

}

export default Featured