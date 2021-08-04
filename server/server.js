// import express, initialize app, add cors as a middleware
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;

const app = express();

// Apollo Server
const server = new ApolloServer({
  typeDefs, 
  resolvers, 
  // context: authMiddleware
});
server.applyMiddleware({ app });


//call res.send with a JavaScript object containing a token
app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

  app.use(cors());

  //run the server on port 8080
  db.once("open", () => {
    app.listen(8080, () => 
    console.log('API is running on http://localhost:8080/login'));
  })
