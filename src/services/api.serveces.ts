import axios from "axios";
import {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {'Content-Type': 'application/json'},
});

export const getAll = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars')
    return data;
}

export const createCar = async (car: ICar): Promise<void> => {
    await axiosInstance.post<ICar>('/cars', car);
}