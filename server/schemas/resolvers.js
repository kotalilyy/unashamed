const { AuthenticationError } = require("apollo-server-express");
const { User, Blog } = require('../models');

const { signToken } = require("../utils/auth");

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
    addUser: async (parent, args) => {
      
      console.log("ARGS",args)

      const user = await User.create(args);

      console.log("USER",user)

      if (!user) {
        throw new AuthenticationError("Could not find user");
      }
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, args) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new AuthenticationError("Could not log in");
      }
  
      const correctPw = await user.isCorrectPassword(args.password);
  
      if (!correctPw) {
        throw new AuthenticationError("Wrong password");
      }
      const token = signToken(user);
      return { token, user };
    },

    addBlog: async (parent, args) => {
      const blog = await Blog.create(args);
      return blog;
    }
  },

  // removeBlog: async (parent, args, context) => {
  //   const updatedUser = await Blog.findOneAndUpdate(
  //     { _id: context.args._id },
  //     { $pull: { savedBlogs: { blogId: args.blogId } } },
  //     { new: true }
  //   );
  //   if (!updatedUser) {
  //     throw new AuthenticationError("Could not delete blog");
  //   }
  //   return updatedUser;
  // }

};

module.exports = resolvers;
