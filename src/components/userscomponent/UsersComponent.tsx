import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";

export const UsersComponent = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(userSliceActions.loadUsers());
    }, []);


    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>
                        {user.name}
                    </div>
                })
            }
        </div>
    );
};