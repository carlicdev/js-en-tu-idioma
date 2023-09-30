import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
              }
              createdAt
              excerpt
              slug
              title
              featuredPost
              featuredImage {
                url
              }
              categories {
                name
                slug
                color
              }
            }
          }
        }
      }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges

}


export const getCategories  = async () => {
    const query = gql`
    query MyQuery {
        categories {
          name
          slug
          color
        }
      }
      
    `
    const result = await request(graphqlAPI, query);

    return result.categories; 
}

export const getFeaturedPosts = async () => {
    const query = gql`
      query myQuery() {
        posts(where: {featuredPost: true}) {
          author {
            name
          }
          featuredImage {
            url
          }
          title
          slug
          excerpt
          createdAt
          categories {
            name
            slug
            color
          }
        }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };

  export const getPostDetails = async (slug) => {
    const query = gql`
    query MyQuery ($slug: String!){
      post(where: {slug: $slug}) {
        createdAt
        excerpt
        slug
        title
        featuredImage {
          url
        }
        content {
          raw
        }
        categories {
          name
          slug
          color
        }
      }
    }
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.post
  }

  export const getCategoryPosts = async (slug) => {
    const query = `
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.postsConnection.edges;
  }

  export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails() {
            posts(
                orderBy: createdAt_ASC
                last: 3
                ) {
                    title
                    featuredImage {
                        url
                    }
                    createdAt
                    slug
                }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.posts; 
}