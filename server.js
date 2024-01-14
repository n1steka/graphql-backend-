import cors  from "cors"; 
import { ApolloServer } from '@apollo/server';
import { expressMiddleware   as apolloExpressMiddleware} from '@apollo/server/express4';
import express from 'express';
import { handleLogin } from "./authentication.js";
import knex from "./lib/db.js"
import {readFile} from "node:fs/promises"
import { resolvers } from "./resolver.js";

const { Schema} = knex


const PORT = 9000

const app = express();

app.use(cors() ,express.json());

app.post('/login' , handleLogin);
const   typeDefs  = await readFile("./schema.graphql" , "utf8")
const apolloServer = new ApolloServer({ typeDefs, resolvers});

await apolloServer.start();
app.use("/graphql"  , apolloExpressMiddleware(apolloServer))

app.listen( {port : PORT} ,  () => {
    console.log("express sever online   " + "http://localhost:"+PORT)
    console.log("apollo graphql  sever online   " + "http://localhost:"+PORT+"/graphql")
})
