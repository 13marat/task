export type FormType = string | undefined
export type UserEmail = {username: string, email: string}
export type CurrentType = {current: UsersType}
export type ItemType = {item : ProductsType}

export enum CartFunctionsArguments {
    PlusCount = "plus",
    MinusCount = "minus"
}

export interface StateType{
    cart: ProductsType[],
    current: PersistedCurrentUser,
    items: InitialProductsInterface,
    users: InitialUsersInterface,
}

export interface AxiosProduct{
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        count: number,
        rate: number
    }
    title: string
}

export interface AxiosUser{
    address:{
        city: string,
        geo:{
            lat: string,
            lng: string
        },
        street: string,
        suite: string,
        zipcode: string
    },
    company:{
        bs: string,
        catchPhrase: string,
        name: string
    },
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
}

export type UsersType = {
    id: number,
    name: string,
    email: string,
    phone: string
    username: string
}

export type ProductsType = {
    id: number,
    description: string,
    image: string,
    price: number,
    title: string,
    count: number
}

export interface InitialUsersInterface{
    loading: boolean,
    error: boolean,
    initialUsers: UsersType[]
}

export interface InitialProductsInterface{
    loading: boolean,
    error: boolean,
    initialProducts: ProductsType[]
}

export interface PersistedCurrentUser{
    current: UsersType,
    _persist: PersistedState
}

export type PersistedState = {
    rehydrated: boolean,
    version: number
}

// export type UsersType = Pick<AxiosUser, "id"| "name"| "email"| "phone"| "username"> & {description: string}
// export type ProductsType = Pick<AxiosProduct, "description" | "image" | "price" | "title" | "id"> & {count: number}