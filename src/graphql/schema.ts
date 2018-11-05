import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    { id: 1, name: "Darius", email: "dr@mail.com" },
    { id: 2, name: "Garenn", email: "gr@mail.com" }
];

const typeDefs = `
    type User {
        id: ID!
        email: String!
        name: String!
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String, email:String): User!
    }
`;

const resolvers = {
    Query: {
        allUsers: () => users
    } ,
    Mutation: {
        createUser: (parent, args) => {
            console.log(args)
            console.log(parent)
            const newuser = Object.assign({ id: users.length + 1 }, args)
            users.push(newuser)
            return newuser
        }
    }
};

export default makeExecutableSchema({ typeDefs, resolvers });