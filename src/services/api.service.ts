import axios from "axios";
import {IUserWithTokens} from "../models/user-with-tokens/IUserWithTokens.ts";
import {IProduct} from "../models/product/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokensPair} from "../models/tokens/ITokensPair.ts";


export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})


axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = `Bearer ` + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
})


export const loadAuthProducts = async (): Promise<IProduct[]> => {

    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    return products
}

export const refresh = async () => {

    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokensPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}