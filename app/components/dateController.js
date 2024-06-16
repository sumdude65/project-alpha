import Link from "next/link";

/**This component renders the time a post was published on the studio, as well as the author */

export default function DateController({ dateString, author }) {
    const date = new Date(dateString);

    // Format the date
    const formattedDate = date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    return (
        <em>
            Published at {formattedDate} by <Link className="no-underline text-primary not-prose hover:underline" href={`/author/${author._id}`}>
                {author.name}
            </Link>
        </em>
    )
}

