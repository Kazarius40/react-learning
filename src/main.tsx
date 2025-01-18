import {createRoot} from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout.tsx";
import {UsersPage} from "./pages/UsersPage.tsx";
import {PaginationLayout} from "./layouts/PaginationLayout.tsx";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                path: 'list', element: <PaginationLayout/>, children: [
                    {path: 'users', element: <UsersPage/>}
                ]
            }
        ]
    }
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)