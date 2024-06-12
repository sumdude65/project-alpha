import ImageComponent from "./imageComponent";
import Link from "next/link";


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
