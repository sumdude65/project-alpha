import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/app/components/portableTextComponents/portableText.config';
import DateController from '@/app/components/dateController';
import ImageComponent from '@/app/components/imageComponent';
import ShareButtons from '@/app/components/shareButtons';
import { sanityFetch } from '@/sanity/lib/fetch';
import { METADATA_QUERY, POSTS_QUERY, POST_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

//generate static pages already in the dataset
export async function generateStaticParams() {
    const posts = await sanityFetch({
        query: POSTS_QUERY,
        perspective: "published",
        stega: false
    })

    return posts.map((post) => {
        return {
            postId: post._id,
        }
    })
}

//Instructs Nextjs to dynamically render posts on request that were not generated at build time
export const dynamicParams = true;

//generate metadata
export async function generateMetadata({ params }) {
    const post = await sanityFetch({query: METADATA_QUERY,params})
    const {asset,alt} = post.mainImage
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.postId}`,
        type: 'article',
        images: [
          {
            url: urlForImage(asset,800,600),
            width: 800,
            height: 600,
            alt
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: process.env.NEXT_PUBLIC_BASE_URL,
        title: post.title,
        description: post.description,
        image: urlForImage(asset),
      },
    };
  }
  

export default async function BlogPost({ params }) {
    //fetch the post
    const post = await sanityFetch({ query: POST_QUERY, params })
    if (!post) {
        return notFound()
    }     //redirect to 404 if the post doesn't exist

    return (
        <main className='grid md:grid-cols-[1fr_65%_1fr] customWidth100'> {/**defines the main layout of the blog using grid */}
            <div className='hidden md:block'>{/**Reserved for ads, element hidden from small screens*/}</div>
            <article className='flex flex-col max-sm:px-4'>
                <h1 className='mt-4'>{post.title}</h1>
                <DateController dateString={post.publishedAt} author={post.author} />
                <ShareButtons title={post.title} path={post.shortId} />
                {
                    <ImageComponent value={post.mainImage} />
                }

                <PortableText value={post.body} components={portableTextComponents} />
            </article>
            <div className='hidden md:block'>{/**Reserved for ads, element hidden from small screens */}</div>
        </main>
    )
}
