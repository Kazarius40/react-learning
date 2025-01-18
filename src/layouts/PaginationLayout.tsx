import {PaginationComponent} from "../components/pagination/PaginationComponent.tsx";
import {Outlet} from "react-router-dom";

export const PaginationLayout = () => {
    return (
        <>
            <PaginationComponent/>
            <Outlet/>
        </>
    );
};