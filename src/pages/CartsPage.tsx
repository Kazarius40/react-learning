import {CartsComponent} from "../components/carts-component/CartsComponent.tsx";
import {Outlet, useLocation} from "react-router-dom";

export const CartsPage = () => {

    const location = useLocation();
    const { id } = location.state;

    return (
        <>
            <Outlet />
            <CartsComponent id={id} />
        </>
    );
};