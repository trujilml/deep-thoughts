//import gql tagged template function
const {gql} = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql`
type Query {
    thoughts(username: String): [Thought]
}
type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
}
type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
}
`;

//export typeDefs
module.exports = typeDefs;