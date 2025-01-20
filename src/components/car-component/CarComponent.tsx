import {ICar} from "../../models/ICar.ts";
import {FC} from "react";

type CarsProps = {
    item: ICar,
    index: number,
}

export const CarComponent: FC<CarsProps> = ({item, index}) => {
    return (
        <div>
            {index}. {item?.id}: {item.brand} {item.price} {item.year}
        </div>
    );
};