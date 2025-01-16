import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UsersDetailsPage} from "../pages/UsersDetailsPage.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                path: 'list', element: <PaginationLayout/>, children: [
                    {path: 'users', element: <UsersPage/>},
                    {path: 'users/details', element: <UsersDetailsPage/>},
                ]
            }
        ]
    }
]);