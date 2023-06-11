import { productsType } from "../types/types"

export const filterProductsData = (products: any): any => {
    const filteredUsers:productsType[]  = products.map((product: any): productsType => {
        return {
            id: product.id,
            description: product.description,
            image: product.image,
            price: product.price,
            title: product.title
        }
    })

    return filteredUsers
}
