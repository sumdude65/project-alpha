import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portableText.config';
import DateController from '@/app/components/dateController';
import ImageComponent from '@/app/components/imageComponent';
import ShareButtons from '@/app/components/shareButtons';

//generate static pages already in the dataset
export async function generateStaticParams() {
    const posts = await client.fetch('*[ _type == "post" ]{_id} ') //returns an array
    return posts.map((post) => {
        return {
            postId: post._id
        }
    })
}

//Instructs nextjs to dynamically render posts on request that were not generated at build time
export const dynamicParams = true;

export default async function BlogPost({ params }) {
    const { postId } = params
    console.log(params);
    //This fetch is faulty because it assumes all internalLinks are directed to authors, create an annotation for authors and true internal links
    const post = await client.fetch(`*[ _id == "${postId}" ]{
        body[]{
            ...,
            markDefs[]{
                ...,
                _type == "internalLink" => {
                "url": @.reference->_id
                },
                _type == "share" => {
                "url": @.reference->_id,
                "title":@.reference->title
                }
            }   
        },
        author->,
        title,
        publishedAt,
        mainImage
    }`, {}, { next: { revalidate: 1 } })     //refresh cache every 10 mins

    if (post.length < 1) notFound()     //redirect to 404 if the post doesn't exist

    return (
        <main className='grid md:grid-cols-[1fr_65%_1fr] customWidth100'> {/**defines the main layout of the blog using grid */}
            <div className='hidden md:block'>{/**Reserved for ads, element hidden from small screens*/}</div>
            <article className='flex flex-col max-sm:px-4'>
                <h1 className='mt-4'>{post[0].title}</h1>
                <DateController dateString={post[0].publishedAt} author={post[0].author} />
                <ShareButtons title={post[0].title} />
                {
                    <ImageComponent value={post[0].mainImage} />
                }

                <PortableText value={post[0].body} components={portableTextComponents} />
            </article>
            <div className='hidden md:block'>{/**Reserved for ads, element hidden from small screens */}</div>
        </main>
    )
}
