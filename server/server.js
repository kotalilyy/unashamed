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
// app.use('/login', (req, res) => {
//     res.send({
//       token: 'test123'
//     });
//   });

  app.use(cors());

  app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

  //run the server on port 8080
  db.once("open", () => {
    app.listen(8080, () => 
    console.log('API is running on http://localhost:8080/login'));
  })