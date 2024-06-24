import PostWithImage from '../postWithImagePreview'
import { sanityFetch } from '@/sanity/lib/fetch'
import { RECENT_POSTS } from '@/sanity/lib/queries'

export default async function NewCategory() {
    const posts = await sanityFetch({
        query:RECENT_POSTS,
    })
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
