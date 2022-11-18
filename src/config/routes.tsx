import Landing from '../Views/Landing'
import Login from '../Views/Login'
import Register from '../Views/Register'

const authRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]

const Routes = [
    {
        path: '/',
        element: <Landing />
    },
    ...authRoutes
]

export default Routes