
import Link from 'next/link';
import { getCategories } from '../services/graphql'

const Tags = async () => {
    const categories = await getCategories();

  return (
    <div className='card p-5 rounded-lg mb-4'>
        <div className='card-title text-center mb-5 rounded-lg py-2'>
            <p className='text-xl font-semibold'>Categorías</p>
        </div>
        <div className='flex flex-wrap gap-2 justify-center'>
        {
            categories.map((tag, index) => (
                <Link href={`/category/${tag.slug}`} key={index} >
                    <div className='tag px-2 py-1 rounded-full'>
                        <p className={`text-sm text-${tag.color}`}>#{tag.name}</p>
                    </div>
                </Link>
            ))
        }
        </div>
    </div>
  )
}

export default Tags