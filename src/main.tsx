// Маршрутизація. Є наступні сторінки:
//     UsersPage - відтворює користувачів з api dummyjson.com (довільна розмітка та кількість інфи про об'єкт)
// PostsPage - відтворює пости з з api dummyjson.com (довільна розмітка та кількість інфи про об'єкт)
// Відтворювати тільки перший відданий пул об'єктів (30 об'єктів чи скільки віддає апі)(без пагінації і не звертаючи увагу на залишки)


import {createRoot} from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";


const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
        ]}
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)