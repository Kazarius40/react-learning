import {useEffect, useState} from "react";
import {cartsServices} from "../../services/api.service.ts";
import {ICarts} from "../../models/carts-models/ICarts.ts";
import {CartComponent} from "./CartComponent.tsx";

type idProps = {
    id: string;
}

export const CartsComponent = ({id}: idProps) => {
    const [carts, setCarts] = useState<ICarts[]>([]);


    useEffect(() => {
        if (id) {
            cartsServices.getAllCartsOfUserById(+id).then(({carts}) => setCarts(carts))
        }
    }, [id])

    return (
        <>
            {
                carts.map(cart => <CartComponent key={cart.id} item={cart}/>)
            }
        </>
    );
};