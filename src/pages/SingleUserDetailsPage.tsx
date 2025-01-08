import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser.tsx";

export const SingleUserDetailsPage = () => {

    const {state} = useLocation();
    const user = state as IUser;

    return (
        <div>
            {user.email},
            {/*{JSON.stringify(user)},*/}
        </div>
    );
};