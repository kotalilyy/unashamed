const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const blogSchema = new Schema({
  title: 
    {
      type: String,
    },

  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  userId: {
    type: String,
    required: true,
  },
});

module.exports = blogSchema;
