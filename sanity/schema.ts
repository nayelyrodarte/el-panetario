import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import category from './schemaTypes/category';
import { ingredient, recipe, subcategory } from './schemaTypes/recipe';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recipe, category, subcategory, ingredient, blockContent],
};
