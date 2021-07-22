// import express, initialize app, add cors as a middleware
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

//call res.send with a JavaScript object containing a token
app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

  //run the server on port 8080
  app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));