import gql from "graphql-tag";

export const GET_ARTICLES = gql`
  query GetArticlesQuery($limit: Float!, $offset: Float!) {
    getArticles(limit: $limit, offset: $offset) {
      id
      text
      title
      creation_date
      picture_url
      owner {
        username
        email
        fullname
        register_date
      }
    }
  }
`;
