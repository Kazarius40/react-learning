import {ICarts} from "../models/carts-models/ICarts.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;
console.log(baseUrl);

export const getAll = async <T, > (endpoint: string): Promise<T> => {
    return await fetch(`${baseUrl + '/'}${endpoint}`).then((res) => res.json());
}

export const cartsServices = {
    getAllCartsOfUserById: async (userId: number):Promise<ICarts[]> => {
        return await fetch(baseUrl + '/carts/' + userId).then((res) => res.json());
    }
}