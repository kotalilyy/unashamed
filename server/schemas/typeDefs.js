const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  friends: [User]
}

type Thought {
  thoughtText: String
  createdAt: String
  username: String
  reactionCount: Int
  reactions: [Reaction]
}

  type Mutation {
    addBook(title: String!, author: String!, pages: Int!): Book
  }
`;

module.exports = typeDefs;
