import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"

/**This component renders an image anywhere, it is used in rendering portable text images in sanity/lib
 * As well as anywhere else in the app where an image is to be rendered from sanity content lake
 */

export default function ImageComponent({ value, showAlt = true, width = 1980, height = 1080, isRounded = false }) {
    const { asset, alt } = value
    const url = urlForImage(asset, width, height) //generate image url from asset object
    return (
        <figure>
            <Image src={url}
                alt={alt || 'Image'}
                width={width || 1920} // You can adjust these values
                height={height || 1080} // You can adjust these values
                className={isRounded ? `customCenteredImage rounded-full border-4 border-secondary shadow-lg` : "customCenteredImage"}
            />
            { showAlt
             ? <figcaption className="font-bold" style={{ textAlign: "center" }}>{alt}</figcaption> 
             : ''}
        </figure>
    )
}
