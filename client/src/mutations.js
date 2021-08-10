import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        username
        }
    }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
        _id
        username
        }
    }
    }
`;

export const SAVE_BLOG = gql`
mutation saveBlog($blog: BlogInput!){
    saveBlog(blog: $blog) {
    _id
    username
    email
    savedBlogs {
        blogId
        authors
        image
        description
        title 
        link
        }
    }
}
`;

export const REMOVE_BLOG = gql`
mutation removeBlog($blogId:ID!){
    removeBlog(blogId: $blogId) {
    _id
    username
    email
    savedBlogs {
        blogId
        authors
        image
        description
        title 
        link
        }
    }
}
`;

