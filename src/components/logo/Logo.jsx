

const Logo = ({ LVariant }) => {
    if (LVariant === 'dark') {
        return (
            <div className="flex justify-center items-center">
                <img src="./dark_ico.png" className="w-7 sm:w-10" alt="" />
                <span className="font-bold max-sm:hidden text-2xl mb-1">ndex</span>
            </div>
        );
    } else if (LVariant === 'light') {
        return (
            <div className="flex justify-center items-center">
                <img src="./light_ico.png" className="w-7 sm:w-10" alt="" />
                <span className="font-bold max-sm:hidden text-primary-blue text-2xl mb-1">ndex</span>
            </div>
        );
    } else {
        return (
            <div className="flex justify-center items-center">
                <img src="./dark_ico.png" className="w-7 sm:w-10" alt="" />
                <span className="font-bold max-sm:hidden text-2xl mb-1">ndex</span>
            </div>
        );
    }
};

export default Logo;