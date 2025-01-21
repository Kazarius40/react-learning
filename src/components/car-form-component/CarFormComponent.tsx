import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";
import {createCar} from "../../services/api.serveces.ts";

export const CarFormComponent = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandler = (data: ICar) => {
        createCar(data);
    }


    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input type="text" {...register('brand')}/>
                </div>
                <div>
                    <input type="number" {...register('price')}/>
                </div>
                <div>
                    <input type="number" {...register('year')}/>
                </div>
            </form>
        </>
    );
};