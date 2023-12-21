import {productsRepository} from '../repositories/products-db-repository'
import {ProductsType} from "../repositories/db";

export const productsService = {
    async findProducts(title: string | null | undefined): Promise<ProductsType[]> {
       return productsRepository.findProducts(title)
    },
    async getProductById(id: number): Promise<ProductsType | null> {
        return productsRepository.getProductById(id)
    },
    async createProduct(title: string): Promise<ProductsType> {
        const newProduct = {
            id: +(new Date()),
            title: title
        }
        const createdProduct = await productsRepository.createProduct(newProduct)
        return createdProduct
    },
    async updateProduct(id: number, title: string): Promise<boolean> {
        return await productsRepository.updateProduct(id,title)
    },
    async deleteProduct(id: number): Promise<boolean> {
        return await productsRepository.deleteProduct(id)
    }
}