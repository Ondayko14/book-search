const User = require("../models/User");

const resolvers = {
    Query: {
      me: () => {
        return User.find();
      }
    }
  };
  
  module.exports = resolvers;