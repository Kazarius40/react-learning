import {ICarts} from "../../models/carts-models/ICarts.ts";

type cartsProps = {
    item: ICarts;
}

export const CartComponent = ({item}: cartsProps) => {
    return (
        <>
            {item.id}
        </>
    );
};