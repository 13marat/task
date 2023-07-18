import { AxiosProduct, AxiosUser, ProductsType, UsersType } from "../types/Types";

export const filterProductsData = (products: AxiosProduct[]): ProductsType[] => {

  const filteredProducts: ProductsType[] = products.map((product: any) => ({    
    id: product.id,
    description: product.description,
    image: product.image,
    price: Math.floor(product.price),
    title: product.title,
    count: 1,
  })
);
  return filteredProducts
}

export const filterUsersData = (users: AxiosUser[]): UsersType[] => {
  
  const filterUsers: UsersType[] = users.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    username: user.username
  }));
  return filterUsers
}