import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users'}>Users Page</Link></li>
            </ul>
        </div>
    );
};