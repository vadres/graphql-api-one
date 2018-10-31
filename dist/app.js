"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello world");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema_1 = require("./graphql/schema");
class App {
    constructor() {
        this.express = express();
        this.middleware();
    }
    middleware() {
        this.express.use('/graphql', graphqlHTTP({
            schema: schema_1.default
        }));
    }
}
exports.default = new App().express;
/*
    this.express.use('/hello', ( req, res, next) => {
        res.send({
            hello: "Hello WorldS"
        })
    })
*/ 
