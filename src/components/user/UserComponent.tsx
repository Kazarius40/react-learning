import {FC} from "react";
import {IUser} from "../../models/IUser.tsx";
import {Link} from "react-router-dom";
// import {Link, useNavigate} from "react-router-dom";

type UserTypeProps = {
    item: IUser;
}
const UserComponent: FC<UserTypeProps> = ({item}) => {
    // const navigate = useNavigate();
    // const handleOnClick = () => {
    //     navigate('details', {state: item});
    // };
    return (
        <div>
            <Link to={'details'} state={item}>{item.username}</Link>

            {/*<button onClick={handleOnClick}>go to details</button>*/}
        </div>
    );
};

export default UserComponent;