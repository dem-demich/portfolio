import { createRoot } from "react-dom/client";
import { Root } from "./Root";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import './index.css'

const root = document.getElementById('root')

if(!root) {
    throw new Error('Root elemnt not found')
}

const container = createRoot(root)
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/test1',
                element: <><h1>Test 1</h1><Link to='/'>Back</Link></>
            },
            {
                path: '/test2',
                element: <><h1>Test 2</h1><Link to='/'>Back</Link></>
            }
        ]
    }
])
container.render(
    <RouterProvider router={router} />
)