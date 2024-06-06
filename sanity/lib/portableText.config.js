/**Custom styling for portable text components */

import { urlForImage } from "./image"
import Image from "next/image"


function ImageComponent({ value }) {
    const { asset, alt } = value
    const url = urlForImage(asset) //generate image url from asset object
    return <figure>
        <Image src={url}
            alt={alt || 'Image'}
            width={250} // You can adjust these values
            height={250} // You can adjust these values
            className="customCenteredImage"
        />
        <figcaption className="font-bold" style={{textAlign:"center"}}>{alt}</figcaption>
    </figure>
}
function BlockquoteComponent({ children }) {
    return <blockquote className='border-primary'>{children}</blockquote>
}
function linkComponent(props) {
    const { children, value } = props
    const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
    return (
        <a href={value.href} rel={rel} className="text-primary">
            {children}
        </a>
    )
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
        link: linkComponent
    }
}
