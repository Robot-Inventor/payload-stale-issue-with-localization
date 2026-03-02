import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  fields: [
    {
      name: 'content',
      type: 'richText',
      localized: true,
    },
  ],
  versions: {
    drafts: {
      autosave: true,
      localizeStatus: true,
    },
  },
}
