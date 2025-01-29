import {useAppSelector} from "./useAppSelector.tsx";
import {useAppDispatch} from "./useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../slices/userSlice/userSlice.ts";

export const useUsers = () => {
    const {users, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, [dispatch]);

    return {users, loadState};
}