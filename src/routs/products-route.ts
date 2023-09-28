import {Request, Response, Router} from "express";
import {productsRepository, ProductsType} from "../repositories/products-repository";
import {body} from "express-validator";
import {inputValidationMiddleware} from "../middlewares/input-validation-middleware";

export const productsRouter = Router({})


const titleValidation = body('title').notEmpty().isLength({
    min: 3,
    max: 10
}).withMessage('title should be from 3 to 10 symbols')


productsRouter.get('/', async (req: Request, res: Response) => {
    const foundProducts: ProductsType[] = await productsRepository.findProducts(req.query.title?.toString())

    res.send(foundProducts)
})


productsRouter.get('/:id', (req: Request, res: Response) => {
    const product = productsRepository.getProductById(+req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:id', async (req: Request, res: Response) => {
    const isDeleted :boolean = await productsRepository.deleteProduct(+req.params.id)
    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
})
productsRouter.post('/', titleValidation, inputValidationMiddleware, async (req: Request, res: Response) => {


    const newProduct :ProductsType = await productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)
})
productsRouter.put('/:id', titleValidation, inputValidationMiddleware, async (req: Request, res: Response) => {
    const isUpDated : boolean = await productsRepository.updateProduct(+req.params.id, req.body.title)
    if (isUpDated) {
        const product = productsRepository.getProductById(+req.params.id)
        res.send(product)
    } else {
        res.send(404)
    }
})
