// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[ _type == "post" ]{_id}`;

export const METADATA_QUERY = groq`*[ _type == "post" && ( _id == $postId || shortId == $postId) ][0]{title, description, keywords, mainImage}`

{/**Fetch posts published from the past 30 days, _updatedAt time gives the best representation of publishing time */ }
export const RECENT_POSTS = groq`*[ _type == "post" && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*30] | order(_updatedAt desc){
        _id,title,mainImage}`

//This fetch is faulty because it assumes all internalLinks are directed to authors, create an annotation for authors and true internal links
export const POST_QUERY = groq`*[ _type == "post" && ( _id == $postId || shortId == $postId) ][0]{
        body[]{
            ...,
            markDefs[]{
                ...,
                _type == "internalLink" => {
                "url": @.reference->_id
                },
                _type == "share" => {
                "url": @.reference->shortId,
                "title":@.reference->title
                }
            }   
        },
        author->,
        title,
        description,
        keywords,
        publishedAt,
        mainImage,
        shortId
    }`;
