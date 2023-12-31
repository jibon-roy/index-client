import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main/MainLayout";
import Home from "../../pages/home/Home";
import Jobs from "../../pages/jobs/Jobs";
import Messages from "../../pages/messages/Messages";
import Notices from "../../pages/notices/Notices";
import Profile from "../../pages/profile/Profile";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import JoinPage from "../../pages/join/JoinPage";
import Error from "../../pages/error/Error";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
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
        path: '/join',
        element: <JoinPage />
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