import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"


export default function ImageComponent({ value, showAlt = true }) {
    const { asset, alt } = value
    const url = urlForImage(asset) //generate image url from asset object
    return (
        <figure>
            <Image src={url}
                alt={alt || 'Image'}
                width={1920} // You can adjust these values
                height={1080} // You can adjust these values
                className="customCenteredImage"
            />
            { showAlt
             ? <figcaption className="font-bold" style={{ textAlign: "center" }}>{alt}</figcaption> 
             : ''}
        </figure>
    )
}
