import {IUser} from "../models/IUser.ts";
import {FC} from "react";

type UserProps = {
    user: IUser;
}

export const UserComponent:FC<UserProps> = ({user})=>{
    return (
        <>
            <div>
                {user.id}: {user.email}
            </div>
        </>
    )
}