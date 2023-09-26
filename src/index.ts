import express from 'express';
import bodyParser from 'body-parser'
import {productsRouter} from "./routs/products-route";
import {addressesRouter} from "./routs/addresses-route";

const app = express()
const port = process.env.PORT || 3001



const parserMiddleware = bodyParser()

app.use(parserMiddleware)
app.use('products', productsRouter)
app.use('addresses', addressesRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})