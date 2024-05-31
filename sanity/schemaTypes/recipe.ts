import { describe } from 'node:test';

import { defineField, defineType } from 'sanity';

export const ingredient = {
  name: 'ingredient',
  type: 'object',
  title: 'Ingrediente',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del ingrediente',
    },
    {
      name: 'grams',
      type: 'number',
      title: 'Cantidad en gramos',
      description: 'Solo se aceptan numeros.',
    },
    {
      name: 'cups',
      type: 'number',
      title: 'Cantidad en tazas',
      description: 'Solo se aceptan numeros.',
    },
  ],
};

export const subcategory = {
  name: 'subcategory',
  type: 'object',
  title: 'Grupo de ingrediente',
  description: 'Ejemplo: "Para la masa", "para el betun", etc',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Grupo',
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredientes',
      of: [{ type: 'ingredient' }],
    },
  ],
};

export const recipe = defineType({
  name: 'recipe',
  title: 'Receta',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Parte de la URL que identifica a cada receta. Por ejemplo "panque-de-platano". Se genera sola cuando das click en "Generate".',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descripcion',
      type: 'text',
      description:
        'Descripcion corta de la receta. Va posicionado como introduccion',
      validation: (rule) => rule.required().min(10).max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description:
            'Describe la imagen. Ayuda a las personas con discapacidad visual a entenderla mejor. Ej. "Rebanada de pastel de chocolate"',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicacion',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'prepTime',
      title: 'Tiempo de preparacion',
      type: 'string',
    }),
    defineField({
      name: 'servings',
      title: 'Porciones',
      type: 'string',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredientes',
      type: 'array',
      of: [{ type: 'subcategory' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'method',
      title: 'Metodo',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
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
