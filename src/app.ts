console.log("hello world");

import * as express from 'express' 
import * as graphqlHTTP from 'express-graphql'
import schema from './graphql/schema';

class App {
    public express : express.Application

    constructor(){
       this.express = express()
       this.middleware()
    }

    public middleware(): void{
        this.express.use('/graphql', graphqlHTTP({
            schema: schema
        }))
    }
}

export default new App().express

/* 
    this.express.use('/hello', ( req, res, next) => {
        res.send({
            hello: "Hello WorldS"
        })
    })
*/