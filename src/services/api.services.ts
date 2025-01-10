import {UsersResponse} from "../models/IUsersResponse.ts";

export const userService = {
    getUsers: async (): Promise<UsersResponse> => {
        return await fetch('dummyjson.com/users')
            .then(res => res.json())
    }
}