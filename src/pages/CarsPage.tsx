import {useEffect, useState} from "react";
import {getAll} from "../services/api.serveces.ts";
import {ICar} from "../models/ICar.ts";
import {CarComponent} from "../components/car/CarComponent.tsx";

export const CarsPage = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getAll().then((cars) => setCars(cars));
    }, [])
    return (
        <>
            {
                cars.map((car) => <CarComponent key={car.id} item={car}/>)
            }
        </>
    );
};