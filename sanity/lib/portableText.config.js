import { urlForImage } from "./image"
import Image from "next/image"


function ImageComponent({ value }) {
    const { asset, alt } = value
    const url = urlForImage(asset) //generate image url from asset object
    return <Image src={url}
        alt={alt || 'Image'}
        width={250} // You can adjust these values
        height={250} // You can adjust these values
        className="customCenteredImage"
    />
}


export const portableTextComponents = {
    types: {
        image: ImageComponent,
    }
}
