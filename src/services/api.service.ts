import {IUser} from "../models/IUser.tsx";
import {urls} from "../constans/urls.ts";


export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(res => res.json())
    },
    getUser: async (id: number) => {
        return await fetch(urls.users.byId(id))
            .then(res => res.json())
    }
}