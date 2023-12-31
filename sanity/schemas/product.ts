export const ProductSchema = {
  name: "product",
  tilte: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "description",
      title: "Product Description",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
  ],
};
