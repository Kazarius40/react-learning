import {ICar} from "../../models/ICar.ts";
import {FC} from "react";

type CarsProps = {
    item: ICar,
}

export const CarComponent: FC<CarsProps> = ({item}) => {
    return (
        <div>
            {item?.id}: {item.brand} {item.price} {item.year}
        </div>
    );
};