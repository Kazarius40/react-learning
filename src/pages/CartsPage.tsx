import {CartsComponent} from "../components/carts-component/CartsComponent.tsx";
import {Outlet, useParams} from "react-router-dom";

export const CartsPage = () => {
    const {id} = useParams();
    return (
        <>
            {id && <CartsComponent id={id}/>}
            <Outlet/>
        </>
    );
};