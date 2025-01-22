import axios from "axios";
import {IUserWithTokens} from "../models/user-with-tokens/IUserWithTokens.ts";
import {IProduct} from "../models/product/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number,
}


export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        username,
        password,
        expiresInMins
    });
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}


export const loadAuthProducts = async (): Promise<IProduct[]> => {

    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    return products

}