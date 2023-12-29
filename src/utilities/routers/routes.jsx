import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main/MainLayout";
import Home from "../../pages/home/Home";
import Jobs from "../../pages/jobs/Jobs";
import Messages from "../../pages/messages/Messages";
import Notices from "../../pages/notices/Notices";
import Profile from "../../pages/profile/Profile";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/jobs',
                element: <Jobs />
            },
            {
                path: '/messages',
                element: <Messages />
            },
            {
                path: '/notices',
                element: <Notices />
            },
            {
                path: '/profile',
                element: <Profile />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
])
export default routes;