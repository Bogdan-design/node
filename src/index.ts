import express, {Request, Response} from 'express';
import bodyParser from 'body-parser'
import {productsRouter} from "./routs/addresses-route";
import {addressesRouter} from "./routs/products-route";

const app = express()
const port = process.env.PORT || 3001

const parserMiddleware = bodyParser()

app.use(parserMiddleware)
app.use('products', productsRouter)
app.use('addresses',addressesRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})