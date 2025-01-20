import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to=''>Home Page</Link>
            </li>

            <li>
                <Link to='/cars'>Cars</Link>
            </li>

            <li>
                <Link to='/cars/create'>Create cars</Link>
            </li>
        </ul>
    );
};