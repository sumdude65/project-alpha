/**Custom styling for portable text components */

import EmbedVideo from "@/app/components/embedVideo"
import ImageComponent from "@/app/components/imageComponent"
import SharePost from "@/app/components/sharePost"
import Link from "next/link"

function BlockquoteComponent({ children }) {
    return <blockquote className='border-secondary'>{children}</blockquote>
}
function LinkComponent(props) {
    const { children, value } = props
    const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
    return (
        <a href={value.href} rel={rel} className="no-underline text-primary not-prose hover:underline">
            {children}
        </a>
    )
}
function ShareAnnotation(props) {
    const { value } = props
    const { url, title } = value //specified in queries
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    return <SharePost
        postTitle={title}
        postUrl={`${baseUrl}/blog/${url}`}
    />
}

function InternalLinkAnnotation(props) {
    const { children, value } = props
    const { url } = value
    const href = `/blog/${url}`
    return (
        <Link href={href} className="not-prose text-primary hover:underline">
            {children}
        </Link>
    )
}

function EmbedVideoAnnotation({value}){
    const {platform, videoUrl} = value
    return <EmbedVideo platform={platform} videoUrl={videoUrl}  />
}

/** Define custom styling for portable text elements
 * This is passed to the portable text component as components prop
 * for more info https://github.com/portabletext/react-portabletext
*/
export const portableTextComponents = {
    types: {
        image: ImageComponent,
    },
    block: {
        blockquote: BlockquoteComponent,
    },
    marks: {
        link: LinkComponent,
        share: ShareAnnotation,
        internalLink: InternalLinkAnnotation,
        embedVideo: EmbedVideoAnnotation,
    }
}
