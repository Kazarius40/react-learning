import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>UsersPage</Link></li>
                <li><Link to={'posts'}>PostsPage</Link></li>
            </ul>
        </div>
    );
};

export default Menu;