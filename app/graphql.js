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
mutation CreateProduct(
    $name: String!
    $slug: String!
    $url: String!
    $price: Float!
    $category: String!
) {
  createGuitar(input:{
  name: $name,
  slug: $slug,
  url: $url,
  price: $price,
  category: $category
}) {
  id
  name
  slug
  url
  price
  category
}
}`;

export const GetProduct = `
query GetProduct {
  getProduct(id: "b1f0dc83-e196-43f1-a5ff-afd4885905e7"){
    id,
    name,
    slug
  }
}
`;