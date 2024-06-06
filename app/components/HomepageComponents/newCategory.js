import { client } from '@/sanity/lib/client'
import Link from 'next/link'
export default async function NewCategory() {
    {/**Fetch posts published from the past 7 days, _updatedAt time gives the best representation of publishing time */ }
    const posts = await client.fetch(`*[ _type == "post" && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7] | order(_updatedAt asc){
        _id,title,}`,{next: { revalidate: 3600} })
    return (
        <div>
            {!posts ? "loading..." :
                <div className='px-5'>
                    <h3>New Stories...</h3>
                    <ul>
                        {posts.map((post) => {
                            return <li key={post._id}>
                                <Link className="font-bold" href={`/blog/${post._id}`}>{post.title}</Link>
                            </li>
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}
