import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to={''}>Home Page</Link></li>
            <li><Link to={'list/users'}>Users Page</Link></li>
        </ul>
    );
};