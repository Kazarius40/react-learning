import {UsersComponent} from "../components/users/UsersComponent.tsx";
import {Outlet} from "react-router-dom";


export const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};