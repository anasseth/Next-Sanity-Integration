import { type SchemaTypeDefinition } from "sanity";
import { ProductSchema } from "./schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ProductSchema
  ],
};
