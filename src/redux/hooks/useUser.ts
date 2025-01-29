import {useParams} from "react-router-dom";
import {useAppSelector} from "./useAppSelector.tsx";
import {useAppDispatch} from "./useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../slices/userSlice/userSlice.ts";

export const useUser = () => {
    const {id} = useParams();
    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(userSliceActions.loadUser(id));
    }, [id, dispatch]);

    return {user, loadState}
}