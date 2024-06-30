/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

import { ShareIcon, UserIcon } from "@sanity/icons"
import { InternalLinkRenderer, ShareRenderer } from "../lib/annotationRenderer"

export const blockContent = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'internal link',
            icon: UserIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                to: [
                  {
                    type: "post"
                  }
                  // other types you may want to link to
                ]
              },
            ],
            components: {
              annotation: InternalLinkRenderer
            }

          },
          {
            name: "share",
            title: "share",
            type: "object",
            icon: ShareIcon,
            fields: [
              {
                name: "reference",
                type: "reference",
                to: [
                  {
                    type: "post",
                  }
                ],
              }
            ],
            components: {
              annotation: ShareRenderer,
            }

          },
        ],
      },
    },
    {
      title: 'Embed Social Post',
      name: 'embedPost',
      type: 'object',
      fields: [
        {
          title: 'platform',
          name: 'platform',
          type: 'string',
          options: {
            list: [
              { title: "Facebook", value: "facebook" },
              { title: "Instagram", value: "instagram" },
              { title: "Tiktok", value: "tiktok" },
              { title: "X(twitter)", value: "twitter" }
            ],
          },
          initialValue: "facebook",
          fieldset: "additionalInfo"
        },
        {
          title: 'Url',
          name: 'postUrl',
          type: 'url',
          fieldset: "additionalInfo",
          validation: Rule => Rule.required().error('Additional Info is required.')
        },
      ],
      fieldsets: [
        {
          name: 'additionalInfo',
          title: 'Post Details',
          options: {
            collapsible: false,
            collapsed: false,
            columns: 2, // Adjust the number of columns as needed
          },
          description: 'Please ensure that the platform matches the Url.',
        },
      ],
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
  ],
}
