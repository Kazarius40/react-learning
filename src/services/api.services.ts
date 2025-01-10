import {urls} from "../constans/urls.ts";
import {UsersResponse} from "../models/users/IUsersResponse.ts";
import {IPostsResponse} from "../models/posts/IPostsResponse.ts";


export const userService = {
    getUsers: async (): Promise<UsersResponse> => {
        return await fetch(urls.users.base)
            .then(res => res.json())
    }
}

export const postService = {
    getPosts: async (): Promise<IPostsResponse> => {
        return await fetch(urls.posts.base)
            .then(res => res.json())
    }
}