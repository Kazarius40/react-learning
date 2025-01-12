import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layuouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>}
        ]},
])

