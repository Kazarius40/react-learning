import {IUserWithTokens} from "../models/user-with-tokens/IUserWithTokens.ts";
import {axiosInstance} from "./api.service.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMin: number,
}


export const login = async ({username, password, expiresInMin}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        username,
        password,
        expiresInMin
    });
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}