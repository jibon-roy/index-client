
import SearchBar from "../searchBar/SearchBar";


const SideBar = ({ isOpen, sm }) => {

    return (
        <div className={sm ? `bg-primary-white lg:hidden text-primary-black absolute left-0 -z-10 top-[52px] min-h-[calc(100vh-52px)] pt-4 overflow-hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`
            : `bg-primary-white text-primary-black w-full -z-10 min-h-[calc(100vh-52px)] pt-4 top-0 overflow-hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`
        }>
            <ul className="space-y-2">
                <SearchBar></SearchBar>
            </ul>
        </div>
    );

};

export default SideBar;