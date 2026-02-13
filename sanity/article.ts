// Sanity schema for CasuallyAI
// Add this to your Sanity Studio project under schemas/article.ts

const article = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary shown in article listings",
      validation: (Rule: any) => Rule.required().max(300),
    },
    {
      name: "tag",
      title: "Tag",
      type: "string",
      options: {
        list: [
          { title: "Build Log", value: "Build Log" },
          { title: "Comparison", value: "Comparison" },
          { title: "Experiment", value: "Experiment" },
          { title: "Deep Dive", value: "Deep Dive" },
          { title: "Wild Card", value: "Wild Card" },
          { title: "News", value: "News" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: 'e.g. "12 min read"',
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        {
          type: "code",
          title: "Code Block",
          options: {
            withFilename: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      tag: "tag",
      date: "publishedAt",
    },
    prepare({ title, tag, date }: any) {
      return {
        title,
        subtitle: `${tag} · ${new Date(date).toLocaleDateString()}`,
      };
    },
  },
};

export default article;
