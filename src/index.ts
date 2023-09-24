import express, {Request, Response} from 'express';

const app = express()
const port = process.env.PORT || 3001

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
const addresses = [{id: 1, value: 'Nezalejnasti 12'}, {id: 2, value: 'Selikaga 11'}]

app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
        const searchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }
})

app.get('/products/:id', (req: Request, res: Response) => {
    const product = products.find(p => p.id === +req.params.id)
    if (product) {

        res.send(product)
    }
    res.send(404)
})
app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id){
            products.splice(i,1)
            res.send(201)
            return
        }
    }

})

app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    const address = addresses.find(a => a.id === +req.params.id)
    if (address) {
        res.send(address)
    }
    res.send(404)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})