import ShortIdInput from "../fieldComponents/shortId"

export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: "shortId",
      title: "ShortId",
      type: "string",
      description: "This is automatically generated for easy sharing of new posts",
      readOnly: true,
      components: {
        input: ShortIdInput,
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "A very short highlight of the article. Make it captivating! This is used to attract a reader's attention to click on the post and read more.",
      validation: Rule => Rule.required().max(50).error("This field shouldn't be longer than 50 characters")
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      description: "Single words that easily describe this post. E.g Computers, Students, Crypto",
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: Rule => Rule.required().min(3).max(6).error("Enter atleast 3 keywords")
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
}
