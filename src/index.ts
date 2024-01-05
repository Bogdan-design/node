import express from 'express';
import bodyParser from 'body-parser'
import {productsRouter} from "./routs/products-route";
import {addressesRouter} from "./routs/addresses-route";
import {runDb} from "./repositories/db";
import {validationResult} from "express-validator";
import {inputValidationMiddleware} from "./middlewares/input-validation-middleware";

const app = express()

const jsonRouterMiddleware = bodyParser.json()
app.use(jsonRouterMiddleware)
// app.use(inputValidationMiddleware)

const port = process.env.PORT || 3001

app.use('/products',productsRouter)

const startApp = async ()=>{
    await runDb()
    app.listen(port,()=>{
        console.log(`Example app listening on port: ${port}`)
    })
}
startApp()