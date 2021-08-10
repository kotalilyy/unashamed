const { Schema } = require('mongoose');

const blogSchema = new Schema({
  title: 
    {
      type: String,
    },

  description: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },
  blogId: {
    type: String,
    required: true,
  },
});


module.exports = blogSchema;
