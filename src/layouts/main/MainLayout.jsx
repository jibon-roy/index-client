import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-[1440px] mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;