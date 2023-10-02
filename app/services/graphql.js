import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  try { 
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
  }  catch (err) {
    console.log('Error at getPosts', err.message)
  }

}


export const getCategories  = async () => {
  try {
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
  } catch (err) {
    console.log('Error at getCategories', err.message)
  }
}

export const getFeaturedPosts = async () => {
  try {
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

  } catch (err) {
    console.log('Error at getFeaturedPosts', err.message)
  }
  };

  export const getPostDetails = async (slug) => {
    try {
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

    } catch (err) {
      console.log('Error at getPostDetails', err.message)
    }
  }

  export const getCategoryPosts = async (slug) => {
    try {
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

    } catch (err) {
      console.log('Error at getCategoryPost', err.message)
    }
  }

  export const getRecentPosts = async () => {
    try {
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
    } catch (err) {
      console.log('Eror at getRecentPosts', err.message)
    }
}