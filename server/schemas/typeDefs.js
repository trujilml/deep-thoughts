//import gql tagged template function
const {gql} = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql`
type Auth {
    token: ID!
    user: User
}
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
}
type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
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
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
}
`;

//export typeDefs
module.exports = typeDefs;