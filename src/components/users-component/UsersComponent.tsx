import {useEffect} from "react";
import {getAll} from "../../services/api.services.ts";

export const UsersComponent = () => {

    useEffect(() => {
        getAll('users').then()
    }, []);
    
    return (
        <>

        </>
    );
};