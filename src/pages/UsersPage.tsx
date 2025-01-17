import {Outlet} from "react-router-dom";
import {UsersComponent} from "../components/users/UsersComponent.tsx";

export const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};