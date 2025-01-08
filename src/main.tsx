import {createRoot} from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import APage from "./pages/APage.tsx";
import BPage from "./pages/BPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'a', element: <APage/>},
            {
                path: 'b', element: <BPage/>,
                children: [
                    {path: '123', element: <div>Просто перевірка, як воно працює з дочірніми елементами</div>},
                    {path: '500', element: <div>Дивлюся, як воно працює з дочірніми елементами</div>},
                ]
            },
        ]
    },
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)