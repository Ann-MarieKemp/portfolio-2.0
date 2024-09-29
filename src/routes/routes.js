import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components'

export const router = createBrowserRouter([
    {
        path: '/',
        // element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                id: 'home',
                path: '/',
                index: true,
                element: <Home />,
                lazy: () => import('../pages/Home').then(() => ({component: Component.default}))

            },
            {
                id: 'about_me',
                path: '/AboutMe',
                lazy: () => import('../pages/AboutMe').then(() => ({component: Component.default}))
            }

    ]

}])