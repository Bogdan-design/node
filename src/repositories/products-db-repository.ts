import {productsCollection, ProductsType} from "../repositories/db";


export const productsRepository = {
    async findProducts(title: string | null | undefined): Promise<ProductsType[]> {
        const filter: any = {}
        if (title) {
            filter.title = {$regex: title}
        }
        return productsCollection.find(filter).toArray()
    },
    async getProductById(id: number): Promise<ProductsType | null> {
        const product: ProductsType | null = await productsCollection.findOne({id})

        return product

    },
    async createProduct(newProduct: ProductsType): Promise<ProductsType> {
        const result = await productsCollection.insertOne(newProduct)
        return newProduct
    },
    async updateProduct(id: number, title: string): Promise<boolean> {
        const result = await productsCollection.updateOne({id: id}, {$set: {title: title}})
        return result.matchedCount === 1
    },
    async deleteProduct(id: number): Promise<boolean> {
        const result = await productsCollection.deleteOne({id: id})
        return result.deletedCount === 1
    }
}