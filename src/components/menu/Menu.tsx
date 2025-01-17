import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <Link to={''}>Home Page</Link>
            <Link to={'users'}>Users Page</Link>
        </div>
    );
};