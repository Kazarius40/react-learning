import {Outlet} from "react-router-dom";
import {UsersDetailsComponent} from "../components/users-details-component/UsersDetailsComponent.tsx";

export const UsersDetailsPage = () => {
    return (
        <>
            <Outlet/>
            <UsersDetailsComponent/>
        </>
    );
};