import ImageComponent from "@/app/components/imageComponent"
import { client } from "@/sanity/lib/client"
import { portableTextComponents } from "@/sanity/lib/portableText.config"
import { PortableText } from "next-sanity"
import { notFound } from "next/navigation"


//generate static pages already in the dataset
export async function generateStaticParams() {
    const authors = await client.fetch('*[ _type == "author" ]{_id} ') //returns an array
    return authors.map((author) => {
        return {
            authorId: [author._id] //catch all routes require this be an array
        }
    })
}

export default async function Author({ params }) {
    const { authorId } = params //authorId is an array and yet the fetch works idk why
    const [author] = await client.fetch(`*[ _type == "author" && _id == "${authorId}" ]`)
    console.log(author);

    if (author.length < 1) notFound()
    return (
        <main className="w-screen px-4">
            <div className="w-2/3 mx-auto text-center">
            <p><b>Author:</b> {author.name}</p>
                <ImageComponent value={author.image}
                    width={200}
                    height={200}
                    isRounded={true}
                    showAlt={false} />
                <PortableText value={author.bio} components={portableTextComponents} />
            </div>
        </main>
    )
}
