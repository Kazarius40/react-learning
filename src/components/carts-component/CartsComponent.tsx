import {useEffect, useState} from "react";
import {getAll} from "../../services/api.service.ts";
import {ICarts} from "../../models/carts-models/ICarts.ts";
import {CartComponent} from "./CartComponent.tsx";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";

type idProps = {
    id: string;
}

export const CartsComponent = ({ id }: idProps) => {
    const [carts, setCarts] = useState<ICarts[]>([]);

    useEffect(() => {
        getAll<IBaseResponseModel & {carts: ICarts[]}>(`users/${id}/carts`).then(({ carts }) =>
            setCarts(carts)
        );
    }, [id]);

    return (
        <>
            {carts.map((cart) => (
                <CartComponent key={cart.id} item={cart} />
            ))}
        </>
    );
};