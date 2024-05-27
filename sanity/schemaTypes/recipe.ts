import { defineField, defineType } from 'sanity';

export const ingredient = {
  name: 'ingredient',
  type: 'object',
  title: 'Ingredient',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'quantity',
      type: 'string',
      title: 'Quantity',
    },
  ],
};

export const subcategory = {
  name: 'subcategory',
  type: 'object',
  title: 'Subcategory',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Subcategory Name',
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [{ type: 'ingredient' }],
    },
  ],
};

export const recipe = defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'The part of a URL that identifies a particular page on a website in an easy-to-read form. It gets automatically generated from the title when you click on "Generate".',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short introduction about the recipe.',
      validation: (rule) => rule.required().min(10).max(200),
    }),
    defineField({
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
          description:
            'Describes the image - It helps visually impaired people understand what the image shows. Ex. "Piece of chocolate cake"',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'prepTime',
      title: 'Preparation time',
      type: 'string',
    }),
    defineField({
      name: 'servings',
      title: 'Servings',
      type: 'string',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'subcategory' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'method',
      title: 'Method',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});
