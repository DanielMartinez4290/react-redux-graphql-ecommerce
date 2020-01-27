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
query GetGuitar {
  getGuitar(id: "700b476f-3797-49f3-83c6-ebfb38d3e5cb"){
    id,
    name,
    slug,
    url,
    price,
    category
  }
}
`;