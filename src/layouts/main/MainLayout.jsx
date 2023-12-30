import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import SideBar from "../../components/sideBar/sideBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-[1920px] lg:grid lg:grid-cols-8 mx-auto">
                <div className="col-span-2 max-lg:hidden">
                    <SideBar></SideBar>
                </div>
                <div className="col-span-6 h-[calc(100vh-57px)] px-2 overflow-y-auto">
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default MainLayout;