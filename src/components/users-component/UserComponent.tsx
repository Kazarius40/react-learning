import {FC} from "react";
import {IUser} from "../../models/users-models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserTypeProps = {
    item: IUser;
};

export const UserComponent: FC<UserTypeProps> = ({ item }) => {
    const navigation = useNavigate();

    const onButtonClickNavigate = () => {
        navigation('/users/' + item.id + '/carts', { state: { id: item.id } });
    };

    return (
        <div>
            <Link to={'details'}>{item.id}: {item.firstName}</Link>
            <button className={'border-2'} onClick={onButtonClickNavigate}>
                click
            </button>
        </div>
    );
};