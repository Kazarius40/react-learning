import {IUser} from "../models/IUser.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch('dummyjson.com/users')
            .then(res => res.json())
    }
}