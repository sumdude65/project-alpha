import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portableText.config';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import DateController from '@/app/components/dateController';

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
    const post = await client.fetch(`*[ _id == "${postId}" ]{
        body,
        title,
        publishedAt,
        mainImage
    }`)
    if (post.length < 1) notFound()     //redirect to 404 if the post doesn't exist
    return (
        <main className='grid md:grid-cols-[1fr_65%_1fr] customWidth100'> {/**defines the main lauout of the blog using grid */}
            <div className='hidden md:block'>{/**Reserved for ads, element hidden from small screens*/}</div>
            <article className='flex flex-col max-sm:px-4'>
                <h1 className='mt-4'>{post[0].title}</h1>
                <DateController dateString={post[0].publishedAt} />
                {/* <Image 
                src={urlForImage(post[0].mainImage)}
                height={400}    //sets the size of the container, to set the image size goto sanity/lib/image
                width={300}     //sets the size of the container, to set the image size goto sanity/lib/image
                className='customCenteredImage'
                alt={post[0].mainImage.alt}
                /> */}
                <PortableText value={post[0].body} components={portableTextComponents} />
            </article>
            <div className='hidden md:block'>{/**Reserved for ads, element hidden from small screens */}</div>
        </main>
    )
}
