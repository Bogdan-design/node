export type ProductsType = {
    id: number
    title: string
}

const __products: ProductsType[] = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

export const productsInMemoryRepository = {
    async findProducts(title: string | null | undefined): Promise<ProductsType[]> {
        if (title) {

            return __products.filter(p => p.title.indexOf(title) > -1)
        } else {
            return __products
        }
    },
    async getProductById(id: number) : Promise<ProductsType | null> {
        const product = __products.find(p => p.id === id)
        if(product){
            return product
        } else {
            return null
        }
    },
    async createProduct(title: string): Promise<ProductsType> {
        const newProduct = {
            id: +(new Date()),
            title: title
        }
        __products.push(newProduct)
        return newProduct
    },
    async updateProduct(id: number, title: string): Promise<boolean> {
        const product = __products.find(p => p.id === id)
        if (product) {
            product.title = title
            return true
        } else {
            return false
        }
    },
    async deleteProduct(id: number): Promise<boolean> {
        for (let i = 0; i < __products.length; i++) {
            if (__products[i].id === id) {
                __products.splice(i, 1)
                return true
            }
        }
        return false
    }
}