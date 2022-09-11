export const categoryNameQuery = `
query {
  categoryCollection(limit: 3){
    items{
      categoryName
      slug
      sys {
        id
      }
    }
  }
}
`;

export const allCategoryNamesQuery = `
query {
  categoryCollection{
    items{
      categoryName
      slug
      sys {
        id
      }
    }
  }
}
`;
