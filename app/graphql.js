export const ListProducts = `
  query ListProducts {
    listProducts{
      items {
        id,
        name,
        slug,
        url
      }
    }
  }
`;

export const ListGuitars = `
  query ListGuitars {
    listGuitars{
      items {
        id,
        name,
        slug,
        url,
        price,
        category
      }
    }
  }
`;

export const CreateProduct = `
mutation CreateProduct {
  createProduct(input: {
    name:"espadfas",
    slug:"esp-les-paul"
  }) {
    id,
    name,
    slug
  }
}
`;

export const GetProduct = `
query GetProduct {
  getProduct(id: "b1f0dc83-e196-43f1-a5ff-afd4885905e7"){
    id,
    name,
    slug
  }
}
`;