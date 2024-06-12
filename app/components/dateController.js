import Link from "next/link";

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
            Published at {formattedDate} by <Link className="no-underline text-primary not-prose hover:underline" href=''>
                {author.name}
            </Link>
        </em>
    )
}

