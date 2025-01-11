// import {urls} from "../constans/urls.ts";
// import {IUsersResponse} from "../models/users/IUsersResponse.ts";
// import {IPostsResponse} from "../models/posts/IPostsResponse.ts";

import {baseUrl} from "../constans/urls.ts";


export const getAll = async <T, >(endpoint: string): Promise<T> => {
    return await fetch(`${baseUrl}${endpoint}`).then(res => res.json());
}


// export const userService = {
//     getUsers: async (): Promise<IUsersResponse> => {
//         return await fetch(urls.users.base)
//             .then(res => res.json())
//     }
// }
//
// export const postService = {
//     getPosts: async (): Promise<IPostsResponse> => {
//         return await fetch(urls.posts.base)
//             .then(res => res.json())
//     }
// }