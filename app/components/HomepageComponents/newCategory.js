import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import PostWithImage from '../postWithImagePreview'
export default async function NewCategory() {
    {/**Fetch posts published from the past 14 days, _updatedAt time gives the best representation of publishing time */ }
    const posts = await client.fetch(`*[ _type == "post" && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*14] | order(_updatedAt desc){
        _id,title,mainImage}`,{}, { next: { revalidate: 3600 } })
    return (
        <div>
            {!posts ? "loading..." :
                <div className='px-5 w-1/2 mx-auto'>
                    <h3>Latest stories...</h3>
                    <ul className='not-prose list-none'>
                        {posts.map((post) => {
                            return (
                                <li key={post._id} className='my-4' >
                                    <PostWithImage
                                        url={`/blog/${post._id}`}
                                        title={post.title}
                                        image={post.mainImage} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}
