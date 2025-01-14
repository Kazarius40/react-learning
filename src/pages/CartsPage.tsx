import {CartsComponent} from "../components/carts-component/CartsComponent.tsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

export const CartsPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const { id } = location.state || {};

    if (!id) {
        // Якщо id відсутній, можна зробити редирект
        navigation('/users');
        return null;
    }

    return (
        <>
            <Outlet />
            <CartsComponent id={id} />
        </>
    );
};