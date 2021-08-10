const { AuthenticationError } = require("apollo-server-express");
const { User, Blog } = require('../models');

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
  },

  removeBlog: async (parent, args, context) => {
    const updatedUser = await User.findOneAndUpdate(
      { _id: context.user._id },
      { $pull: { savedBlogs: { bookId: args.blogId } } },
      { new: true }
    );
    if (!updatedUser) {
      throw new AuthenticationError("Could not delete blog");
    }
    return updatedUser;
  }

};

module.exports = resolvers;
