import {IUser} from "./IUser.ts";

export interface UsersResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}