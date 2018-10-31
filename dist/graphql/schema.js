"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
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
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
