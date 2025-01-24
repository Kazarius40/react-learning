import {IUserWithTokens} from "../models/user-with-tokens/IUserWithTokens.ts";
import {axiosInstance} from "./api.service.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMin: number,
}


export const login = async (loginData: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', loginData);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}