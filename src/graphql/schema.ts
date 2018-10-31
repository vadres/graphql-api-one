import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    { id: 1, name: "Darius", email: "dr@mail.com" },
    { id: 2, name: "Garenn", email: "gr@mail.com" }
];

const typeDefs = `{
    type User {
        id: ID!
        email: String!
        name: String!
    }

    type Query {
        allUsers: [User!]!
    }
}`;

const resolvers = {
    Query: {
        allUsers: () => users
    } 
};

export default makeExecutableSchema({ typeDefs, resolvers });