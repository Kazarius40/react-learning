import {useEffect, useState} from "react";
import {ICar} from "../../models/ICar.ts";
import {getAll} from "../../services/api.serveces.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";

export const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getAll().then((cars) => {
            console.log(cars);
            setCars(cars)
        });
    }, [])
    return (
        <>
            {
                cars.map((car) => <CarComponent key={car.id} item={car}/>)
            }
        </>
    );
};