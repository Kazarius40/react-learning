import {Link, Outlet} from "react-router-dom";

const BPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'123'}>Перехід на 123</Link></li>
                <li><Link to={'500'}>Йду на 500</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default BPage;