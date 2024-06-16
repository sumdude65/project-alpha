import ImageComponent from "./imageComponent";
import Link from "next/link";

/**This component renders a post title and the main image as a preview in post lists like homepage */

export default function PostWithImage({title, url, image}){
    return (
        <Link href={url}>
            <div className="hover:scale-105 transition-transform">
                <ImageComponent value={image} showAlt={false}/>
            </div>
            <p className="font-bold hover:underline">{title}</p>
        </Link>
    )
}
