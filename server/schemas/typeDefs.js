const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friends: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Blog {
    blogText: String
    createdAt: String
    username: String
    reactionCount: Int
  }

  type Query {
    me: User
    blogs: [Blog]
  }
  type Mutation {
    login(email:String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBlog(title: String!, description: String!, userId: ID!): Blog
  }
`;

module.exports = typeDefs;
