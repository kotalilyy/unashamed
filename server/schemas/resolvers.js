const { User , Blog } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    blogs: async (parent, args, context) => {
      const blogData = await Blog.findAll();
      return blogData
    },
  },

  
  Mutation: {
    addBlog: async (parent, args) => {
      const blog = await Blog.create(args);
      return blog;
    }
  }
};

module.exports = resolvers;
