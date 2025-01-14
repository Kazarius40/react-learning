import {CartsComponent} from "../components/carts-component/CartsComponent.tsx";
import {Outlet, useParams} from "react-router-dom";

export const CartsPage = () => {
    const {id} = useParams();
    return (
        <>
            <Outlet/>
            {id && <CartsComponent id={id}/>}

        </>
    );
};