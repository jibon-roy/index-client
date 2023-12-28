import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main/MainLayout";
import Home from "../../pages/home/Home";
import Jobs from "../../pages/jobs/Jobs";


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
            }
        ]
    }
])
export default routes;