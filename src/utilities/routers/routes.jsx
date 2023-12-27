import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main/MainLayout";
import Home from "../../pages/home/Home";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])
export default routes;