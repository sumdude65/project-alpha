"use client"


export default function Keywords({ keywords }) {
    //Make these tags clickable to render pages with related tags
    return (
        <div> 
            <ul className="not-prose list-none p-0 m-0">
                Tags: {keywords.map((keyword, idx) => {
                    return <li key={idx} className="inline-block my-2 mr-4 bg-base-200 text-center p-1.5 rounded-md">
                        {keyword}
                    </li>
                })}
            </ul>
        </div>
    )
}
