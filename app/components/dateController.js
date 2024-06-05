
export default function DateController({ dateString }) {
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
    return <em>Published at {formattedDate}</em>
}

