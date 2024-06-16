import { client } from "@/sanity/lib/client"


//generate static pages already in the dataset
export async function generateStaticParams() {
    const authors = await client.fetch('*[ _type == "author" ]{_id} ') //returns an array
    return authors.map((author) => {
        return {
            authorId: [author._id] //catch all routes require this be an array
        }
    })
}

export default async function Author ({params}){
    const { authorId } = params //authorId is an array and yet the fetch works idk why
    const author = await client.fetch(`*[ _type == "author" && _id == "${authorId}" ]`)
    console.log(author,authorId);
    return (
        <main>Authors</main>
    )
}
