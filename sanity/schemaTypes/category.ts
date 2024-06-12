import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rules) => rules.required(),
    }),
    defineField({
      name: 'image',
      title: 'Icono',
      type: 'image',
      validation: (rules) => rules.required(),
    }),
    defineField({
      name: 'imageUrl',
      type: 'string',
      hidden: true,
    }),
  ],
});
