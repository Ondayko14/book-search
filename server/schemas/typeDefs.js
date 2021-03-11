// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
  username: String
  
  email: String
  
  password: String

  
}

type Query {
    me: User 
  }
  `;

// export the typeDefs
module.exports = typeDefs;