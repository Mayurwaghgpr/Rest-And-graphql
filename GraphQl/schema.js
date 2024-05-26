import { buildSchema } from "graphql";


export default buildSchema(`
    type Post{
        _id:ID!
        title:String!
        content:String!
        imageUrl:String!
        creator:User!
        createdAt:String!
        updatedAt:String!
    }
    type User{
        _id:ID!
        name:String!
        email:String!
        password:String!
        post:[Post!]!
    }
    input userInputdata{
        email:String!
        name:String!
        password: String!
    }
    type RootMutation{
        createUser(userInput: userInputdata):User!
    }
    type rootQuery{
        hello:String!
    }
   schema {
        query:rootQuery
        mutation:RootMutation
    }
`)