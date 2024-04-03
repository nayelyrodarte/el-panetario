import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'nayelyrodarte',
      name: 'el-panetario',
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    recipes: collection({
      label: 'Recipes',
      slugField: 'title',
      path: 'src/content/recipes/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),
        date: fields.date({
          label: 'Date of creation',
          defaultValue: 'kind',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        image: fields.image({
          label: 'Image',
          validation: { isRequired: true },
          directory: 'src/_assets/img',
          publicPath: '_assets/img',
        }),
        featured: fields.checkbox({
          label: 'This is a featured recipe.',
          description:
            'Recuerda siempre quitar el check de la receta destacada anterior antes de marcar una nueva. Si el check no se elimina, se mostrará la receta destacada con fecha mas reciente.',
        }),
        content: fields.document({
          label: 'Method',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
