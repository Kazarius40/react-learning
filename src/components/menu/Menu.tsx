import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <>
            <ul>
                <li><Link to={'users'}>UsersPage</Link></li>
                <li><Link to={''}>Home</Link></li>
            </ul>
        </>
    );
};