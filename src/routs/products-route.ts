import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-db-repository";
import {ProductsType} from "../repositories/db";

export const productsRouter = Router({})


productsRouter.get('/', async (req: Request, res: Response) => {
    const foundProducts: ProductsType[] = await productsRepository.findProducts(req.query.title?.toString())

    res.send(foundProducts)
})


productsRouter.get('/:id', async (req: Request, res: Response) => {
    const product: ProductsType | null = await productsRepository.getProductById(+req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:id', async (req: Request, res: Response) => {
    const isDeleted: boolean = await productsRepository.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
})
productsRouter.post('/', async (req: Request, res: Response) => {
    const newProduct: ProductsType = await productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)
})
productsRouter.put('/:id', async (req: Request, res: Response) => {
    const isUpDated: boolean = await productsRepository.updateProduct(+req.params.id, req.body.title)
    if (isUpDated) {
        const product = await productsRepository.getProductById(+req.params.id)
        res.send(product)
    } else {
        res.send(404)
    }
})
