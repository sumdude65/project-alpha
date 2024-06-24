//https://www.sanity.io/guides/nextjs-app-router-live-preview adding document locations

import { DocumentLocationResolver } from "sanity/presentation";
import { map } from "rxjs";

// Pass 'context' as the second argument
export const locate = (params, context) => {
  // Set up locations for post documents
  if (params.type === "post") {
    // Subscribe to the latest _id and title
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{_id,title}`,
      params,
      { perspective: "previewDrafts" } // returns a draft article if it exists
    );
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a _id, return null
        if (!doc || !doc._id) {
          return null;
        }
        return {
          locations: [
            {
              title: doc.title || "Untitled",
              href: `/blog/${doc._id}`,
            },
            {
              title: "Posts",
              href: "/",
            },
          ],
        };
      })
    );
  }
  return null;
}
