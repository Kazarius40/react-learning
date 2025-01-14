import {ICarts} from "../models/carts-models/ICarts.ts";
import {IBaseResponseModel} from "../models/IBaseResponseModel.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;
console.log(baseUrl);

export const getAll = async <T, >(endpoint: string): Promise<T> => {
    return await fetch(`${baseUrl + '/'}${endpoint}`).then((res) => res.json());
}

export const cartsServices = {
    getAllCartsOfUserById: async (userId: string): Promise<IBaseResponseModel & {carts: ICarts[]}> => {
        return await fetch(baseUrl + '/users/' + userId +'/carts').then((res) => res.json())}
}